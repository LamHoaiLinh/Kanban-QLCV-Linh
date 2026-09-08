# -*- coding: utf-8 -*-
"""
KanBan Signing Agent 1.0
- Local-only HTTP bridge for KanBan PDF > Ký số > Doanh nghiệp.
- Uses Windows Certificate Store + CSP/KSP middleware; does NOT load PKCS#11 DLL.
- Keeps the private key inside the USB Token/provider.
- Binds only to 127.0.0.1:8765.
"""
import os, sys, re, json, base64, tempfile, shutil, ctypes, hashlib, ssl, time, traceback
from pathlib import Path
from io import BytesIO
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

VERSION = "KanBan Signing Agent 1.0"
HOST = "127.0.0.1"
PORT = 8765
MAX_BODY = 120 * 1024 * 1024
ALLOWED_ORIGINS = {
    "https://lamhoailinh.github.io",
    "http://localhost",
    "http://127.0.0.1",
}

# ------------------------- Windows Certificate Store / CSP / KSP -------------------------
# Mục tiêu: giống luồng của Foxit/Adobe hơn: chọn certificate trong Windows Store,
# sau đó để Windows CSP/KSP + middleware của nhà cung cấp USB Token thực hiện phép ký.
# Ứng dụng KHÔNG load PKCS#11 DLL trực tiếp.

class _CERT_CONTEXT(ctypes.Structure):
    _fields_ = [
        ("dwCertEncodingType", ctypes.c_uint32),
        ("pbCertEncoded", ctypes.POINTER(ctypes.c_ubyte)),
        ("cbCertEncoded", ctypes.c_uint32),
        ("pCertInfo", ctypes.c_void_p),
        ("hCertStore", ctypes.c_void_p),
    ]


class _BCRYPT_PKCS1_PADDING_INFO(ctypes.Structure):
    _fields_ = [("pszAlgId", ctypes.c_wchar_p)]


def _win_api():
    if os.name != "nt":
        raise RuntimeError("Chức năng chứng thư Windows chỉ hoạt động trên Windows.")
    from ctypes import wintypes
    crypt32 = ctypes.WinDLL("crypt32.dll", use_last_error=True)
    cryptui = ctypes.WinDLL("cryptui.dll", use_last_error=True)
    advapi32 = ctypes.WinDLL("advapi32.dll", use_last_error=True)
    ncrypt = ctypes.WinDLL("ncrypt.dll", use_last_error=True)
    PCCERT = ctypes.POINTER(_CERT_CONTEXT)
    HKEY = ctypes.c_size_t

    crypt32.CertOpenSystemStoreW.argtypes = [ctypes.c_void_p, ctypes.c_wchar_p]
    crypt32.CertOpenSystemStoreW.restype = ctypes.c_void_p
    crypt32.CertCloseStore.argtypes = [ctypes.c_void_p, ctypes.c_uint32]
    crypt32.CertCloseStore.restype = wintypes.BOOL
    crypt32.CertEnumCertificatesInStore.argtypes = [ctypes.c_void_p, PCCERT]
    crypt32.CertEnumCertificatesInStore.restype = PCCERT
    crypt32.CertDuplicateCertificateContext.argtypes = [PCCERT]
    crypt32.CertDuplicateCertificateContext.restype = PCCERT
    crypt32.CertFreeCertificateContext.argtypes = [PCCERT]
    crypt32.CertFreeCertificateContext.restype = wintypes.BOOL
    crypt32.CryptAcquireCertificatePrivateKey.argtypes = [
        PCCERT, ctypes.c_uint32, ctypes.c_void_p,
        ctypes.POINTER(HKEY), ctypes.POINTER(ctypes.c_uint32), ctypes.POINTER(wintypes.BOOL)
    ]
    crypt32.CryptAcquireCertificatePrivateKey.restype = wintypes.BOOL

    cryptui.CryptUIDlgSelectCertificateFromStore.argtypes = [
        ctypes.c_void_p, ctypes.c_void_p, ctypes.c_wchar_p, ctypes.c_wchar_p,
        ctypes.c_uint32, ctypes.c_uint32, ctypes.c_void_p
    ]
    cryptui.CryptUIDlgSelectCertificateFromStore.restype = PCCERT

    advapi32.CryptSetProvParam.argtypes = [HKEY, ctypes.c_uint32, ctypes.c_void_p, ctypes.c_uint32]
    advapi32.CryptSetProvParam.restype = wintypes.BOOL
    advapi32.CryptCreateHash.argtypes = [HKEY, ctypes.c_uint32, HKEY, ctypes.c_uint32, ctypes.POINTER(HKEY)]
    advapi32.CryptCreateHash.restype = wintypes.BOOL
    advapi32.CryptHashData.argtypes = [HKEY, ctypes.c_void_p, ctypes.c_uint32, ctypes.c_uint32]
    advapi32.CryptHashData.restype = wintypes.BOOL
    advapi32.CryptSignHashW.argtypes = [HKEY, ctypes.c_uint32, ctypes.c_wchar_p, ctypes.c_uint32, ctypes.c_void_p, ctypes.POINTER(ctypes.c_uint32)]
    advapi32.CryptSignHashW.restype = wintypes.BOOL
    advapi32.CryptDestroyHash.argtypes = [HKEY]
    advapi32.CryptDestroyHash.restype = wintypes.BOOL
    advapi32.CryptReleaseContext.argtypes = [HKEY, ctypes.c_uint32]
    advapi32.CryptReleaseContext.restype = wintypes.BOOL

    ncrypt.NCryptSetProperty.argtypes = [HKEY, ctypes.c_wchar_p, ctypes.c_void_p, ctypes.c_uint32, ctypes.c_uint32]
    ncrypt.NCryptSetProperty.restype = ctypes.c_long
    ncrypt.NCryptSignHash.argtypes = [
        HKEY, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_uint32,
        ctypes.c_void_p, ctypes.c_uint32, ctypes.POINTER(ctypes.c_uint32), ctypes.c_uint32
    ]
    ncrypt.NCryptSignHash.restype = ctypes.c_long
    ncrypt.NCryptFreeObject.argtypes = [HKEY]
    ncrypt.NCryptFreeObject.restype = ctypes.c_long
    return crypt32, cryptui, advapi32, ncrypt, PCCERT, HKEY


def _win_error(prefix):
    code = ctypes.get_last_error()
    try:
        msg = ctypes.FormatError(code).strip()
    except Exception:
        msg = ""
    return RuntimeError(f"{prefix} (Windows error {code})" + (f": {msg}" if msg else ""))


def _cert_der(ctx):
    c = ctx.contents
    return ctypes.string_at(c.pbCertEncoded, c.cbCertEncoded)


def _thumbprint(der):
    return hashlib.sha1(bytes(der)).hexdigest().upper()


def _load_pyca_cert(der):
    from cryptography import x509
    return x509.load_der_x509_certificate(bytes(der))


def _cert_info_from_der(der):
    from cryptography.x509.oid import NameOID
    from cryptography.hazmat.primitives.asymmetric import rsa, ec
    cert = _load_pyca_cert(der)
    def first(oid):
        vals = cert.subject.get_attributes_for_oid(oid)
        return vals[0].value if vals else ""
    org = first(NameOID.ORGANIZATION_NAME)
    cn = first(NameOID.COMMON_NAME)
    pub = cert.public_key()
    if isinstance(pub, rsa.RSAPublicKey):
        key_desc = f"RSA {pub.key_size} bit"
    elif isinstance(pub, ec.EllipticCurvePublicKey):
        key_desc = f"ECDSA {pub.curve.name}"
    else:
        key_desc = type(pub).__name__
    try:
        nbf = cert.not_valid_before_utc
        naf = cert.not_valid_after_utc
    except Exception:
        nbf = cert.not_valid_before
        naf = cert.not_valid_after
    return {
        "thumbprint": _thumbprint(der),
        "organization": org,
        "common_name": cn,
        "who": org or cn or cert.subject.rfc4514_string(),
        "subject": cert.subject.rfc4514_string(),
        "issuer": cert.issuer.rfc4514_string(),
        "serial": format(cert.serial_number, "X"),
        "not_before": nbf.strftime("%d/%m/%Y"),
        "not_after": naf.strftime("%d/%m/%Y"),
        "key_desc": key_desc,
        "der": bytes(der),
    }


def list_windows_certificates():
    """Liệt kê certificate trong Current User\\MY mà không truy cập private key/PIN."""
    crypt32, _, _, _, _, _ = _win_api()
    store = crypt32.CertOpenSystemStoreW(None, "MY")
    if not store:
        raise _win_error("Không mở được Windows Certificate Store")
    prev = None
    rows = []
    try:
        while True:
            ctx = crypt32.CertEnumCertificatesInStore(store, prev)
            prev = ctx
            if not ctx:
                break
            try:
                rows.append(_cert_info_from_der(_cert_der(ctx)))
            except Exception:
                pass
        return rows
    finally:
        crypt32.CertCloseStore(store, 0)


def score_company_certificate(info, company="", tax=""):
    blob = " ".join([
        info.get("organization", ""),
        info.get("common_name", ""),
        info.get("subject", ""),
        info.get("issuer", ""),
    ]).lower()

    company_n = (company or "").strip().lower()
    digits_blob = re.sub(r"\\D+", "", blob)
    tax_n = re.sub(r"\\D+", "", tax or "")
    score = 0

    if tax_n and tax_n in digits_blob:
        score += 1000
    if company_n and company_n in blob:
        score += 600

    for token in ["đào tạo", "lái xe", "bình tân"]:
        if token in company_n and token in blob:
            score += 80

    if any(x in blob for x in ["localhost", "test", "development", "self-signed"]):
        score -= 700

    return score


def auto_pick_company_certificate(company="", tax=""):
    rows = list_windows_certificates()
    ranked = sorted(
        [(score_company_certificate(r, company, tax), r) for r in rows],
        key=lambda x: x[0],
        reverse=True,
    )
    if not ranked or ranked[0][0] <= 0:
        return None, ranked
    return ranked[0][1], ranked


def select_windows_certificate(hwnd=0):
    """Mở hộp thoại chọn chứng thư chuẩn của Windows (Current User\\MY)."""
    crypt32, cryptui, _, _, _, _ = _win_api()
    store = crypt32.CertOpenSystemStoreW(None, "MY")
    if not store:
        raise _win_error("Không mở được Windows Certificate Store")
    ctx = None
    try:
        ctx = cryptui.CryptUIDlgSelectCertificateFromStore(
            store, ctypes.c_void_p(int(hwnd or 0)),
            "Chọn chứng thư số",
            "Cắm USB Token rồi chọn chứng thư doanh nghiệp dùng để ký PDF.",
            0, 0, None,
        )
        if not ctx:
            return None
        return _cert_info_from_der(_cert_der(ctx))
    finally:
        if ctx:
            crypt32.CertFreeCertificateContext(ctx)
        crypt32.CertCloseStore(store, 0)


def _find_cert_ctx(thumbprint):
    crypt32, _, _, _, _, _ = _win_api()
    target = (thumbprint or "").replace(" ", "").upper()
    store = crypt32.CertOpenSystemStoreW(None, "MY")
    if not store:
        raise _win_error("Không mở được Windows Certificate Store")
    prev = None
    found = None
    try:
        while True:
            ctx = crypt32.CertEnumCertificatesInStore(store, prev)
            prev = ctx
            if not ctx:
                break
            der = _cert_der(ctx)
            if _thumbprint(der) == target:
                found = crypt32.CertDuplicateCertificateContext(ctx)
                # Enumeration owns/frees previous contexts. Free current explicitly because we stop here.
                crypt32.CertFreeCertificateContext(ctx)
                prev = None
                break
        if not found:
            raise RuntimeError(
                "Không thấy chứng thư đã chọn trong Windows Certificate Store. "
                "Hãy cắm USB Token và chọn chứng thư lại."
            )
        return found
    finally:
        crypt32.CertCloseStore(store, 0)


def get_windows_certificate_info(thumbprint):
    crypt32, _, _, _, _, _ = _win_api()
    ctx = _find_cert_ctx(thumbprint)
    try:
        return _cert_info_from_der(_cert_der(ctx))
    finally:
        crypt32.CertFreeCertificateContext(ctx)


def _norm_digest(name):
    n = (name or "sha256").lower().replace("-", "").replace("_", "")
    if n not in {"sha1", "sha224", "sha256", "sha384", "sha512"}:
        raise RuntimeError(f"Thuật toán băm chưa hỗ trợ: {name}")
    return n


def _set_pin_cng(ncrypt, hkey, pin):
    if not pin:
        return False
    raw = (pin + "\\x00").encode("utf-16-le")
    buf = ctypes.create_string_buffer(raw)
    status = ncrypt.NCryptSetProperty(hkey, "SmartCardPin", ctypes.cast(buf, ctypes.c_void_p), len(raw), 0)
    return status == 0


def _set_pin_capi(advapi32, hprov, key_spec, pin):
    if not pin:
        return False
    try:
        raw = pin.encode("ascii") + b"\\x00"
    except UnicodeEncodeError:
        return False
    buf = ctypes.create_string_buffer(raw)
    # AT_SIGNATURE=2 -> PP_SIGNATURE_PIN=33; AT_KEYEXCHANGE=1 -> PP_KEYEXCHANGE_PIN=32
    param = 33 if int(key_spec) == 2 else 32
    return bool(advapi32.CryptSetProvParam(hprov, param, ctypes.cast(buf, ctypes.c_void_p), 0))


def windows_sign_raw(thumbprint, data, digest_algorithm="sha256", pin="", hwnd=0, dry_run=False):
    """Raw signature thông qua Windows CSP/KSP; private key không rời Token."""
    from cryptography.hazmat.primitives.asymmetric import rsa, ec, utils as asym_utils
    crypt32, _, advapi32, ncrypt, _, HKEY = _win_api()
    ctx = _find_cert_ctx(thumbprint)
    key_handle = HKEY(0)
    key_spec = ctypes.c_uint32(0)
    caller_free = ctypes.c_int(0)
    try:
        info = _cert_info_from_der(_cert_der(ctx))
        pub = _load_pyca_cert(info["der"]).public_key()
        if isinstance(pub, rsa.RSAPublicKey):
            dry_len = max(128, pub.key_size // 8)
        elif isinstance(pub, ec.EllipticCurvePublicKey):
            n = (pub.curve.key_size + 7) // 8
            dry_len = 2*n + 16
        else:
            raise RuntimeError(f"Loại khóa chưa hỗ trợ: {type(pub).__name__}")
        if dry_run:
            return bytes(dry_len)

        CRYPT_ACQUIRE_PREFER_NCRYPT_KEY_FLAG = 0x00020000
        CRYPT_ACQUIRE_WINDOW_HANDLE_FLAG = 0x00000080
        flags = CRYPT_ACQUIRE_PREFER_NCRYPT_KEY_FLAG
        pv = None
        hwnd_value = ctypes.c_void_p(int(hwnd or 0))
        if hwnd:
            flags |= CRYPT_ACQUIRE_WINDOW_HANDLE_FLAG
            pv = ctypes.cast(ctypes.byref(hwnd_value), ctypes.c_void_p)

        ok = crypt32.CryptAcquireCertificatePrivateKey(
            ctx, flags, pv,
            ctypes.byref(key_handle), ctypes.byref(key_spec), ctypes.byref(caller_free)
        )
        if not ok:
            raise _win_error("Windows không truy cập được private key của chứng thư")

        dname = _norm_digest(digest_algorithm)
        CERT_NCRYPT_KEY_SPEC = 0xFFFFFFFF
        if key_spec.value == CERT_NCRYPT_KEY_SPEC:
            # CNG/KSP
            _set_pin_cng(ncrypt, key_handle, pin)  # best effort; provider có thể tự bật UI PIN
            digest = hashlib.new(dname, data).digest()
            inbuf = ctypes.create_string_buffer(digest)
            needed = ctypes.c_uint32(0)
            if isinstance(pub, rsa.RSAPublicKey):
                alg = {"sha1":"SHA1","sha224":"SHA224","sha256":"SHA256","sha384":"SHA384","sha512":"SHA512"}[dname]
                pad = _BCRYPT_PKCS1_PADDING_INFO(alg)
                pad_ptr = ctypes.cast(ctypes.byref(pad), ctypes.c_void_p)
                sign_flags = 0x2  # NCRYPT_PAD_PKCS1_FLAG
            else:
                pad_ptr = None
                sign_flags = 0
            status = ncrypt.NCryptSignHash(
                key_handle, pad_ptr, ctypes.cast(inbuf, ctypes.c_void_p), len(digest),
                None, 0, ctypes.byref(needed), sign_flags
            )
            if status != 0:
                raise RuntimeError(f"NCryptSignHash không ký được (0x{ctypes.c_uint32(status).value:08X}).")
            outbuf = ctypes.create_string_buffer(needed.value)
            status = ncrypt.NCryptSignHash(
                key_handle, pad_ptr, ctypes.cast(inbuf, ctypes.c_void_p), len(digest),
                ctypes.cast(outbuf, ctypes.c_void_p), needed.value, ctypes.byref(needed), sign_flags
            )
            if status != 0:
                raise RuntimeError(f"NCryptSignHash lỗi 0x{ctypes.c_uint32(status).value:08X}")
            sig = outbuf.raw[:needed.value]
            if isinstance(pub, ec.EllipticCurvePublicKey):
                n = (pub.curve.key_size + 7) // 8
                if len(sig) == 2*n:
                    r = int.from_bytes(sig[:n], "big")
                    s = int.from_bytes(sig[n:], "big")
                    sig = asym_utils.encode_dss_signature(r, s)
            return sig

        # Legacy CryptoAPI/CSP fallback
        if not isinstance(pub, rsa.RSAPublicKey):
            raise RuntimeError("Legacy CSP hiện chỉ hỗ trợ RSA trong ứng dụng này.")
        _set_pin_capi(advapi32, key_handle, key_spec.value, pin)
        algid = {"sha1":0x8004, "sha256":0x800C, "sha384":0x800D, "sha512":0x800E}.get(dname)
        if algid is None:
            raise RuntimeError(f"Legacy CSP không hỗ trợ {dname} trong ứng dụng này.")
        hhash = HKEY(0)
        if not advapi32.CryptCreateHash(key_handle, algid, 0, 0, ctypes.byref(hhash)):
            raise _win_error("CryptCreateHash")
        try:
            databuf = ctypes.create_string_buffer(bytes(data))
            if not advapi32.CryptHashData(hhash, ctypes.cast(databuf, ctypes.c_void_p), len(data), 0):
                raise _win_error("CryptHashData")
            size = ctypes.c_uint32(0)
            if not advapi32.CryptSignHashW(hhash, key_spec.value, None, 0, None, ctypes.byref(size)):
                raise _win_error("CryptSignHash")
            outbuf = ctypes.create_string_buffer(size.value)
            if not advapi32.CryptSignHashW(hhash, key_spec.value, None, 0, ctypes.cast(outbuf, ctypes.c_void_p), ctypes.byref(size)):
                raise _win_error("CryptSignHash")
            # CryptoAPI RSA trả little-endian, còn CMS/PKCS#1 dùng big-endian.
            return outbuf.raw[:size.value][::-1]
        finally:
            if hhash.value:
                advapi32.CryptDestroyHash(hhash)
    finally:
        if key_handle.value and caller_free.value:
            if key_spec.value == 0xFFFFFFFF:
                ncrypt.NCryptFreeObject(key_handle)
            else:
                advapi32.CryptReleaseContext(key_handle, 0)
        crypt32.CertFreeCertificateContext(ctx)


def verify_windows_test_signature(info, signature, data, digest_algorithm="sha256"):
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.asymmetric import rsa, ec, padding
    pub = _load_pyca_cert(info["der"]).public_key()
    h = {
        "sha1": hashes.SHA1(), "sha224": hashes.SHA224(), "sha256": hashes.SHA256(),
        "sha384": hashes.SHA384(), "sha512": hashes.SHA512()
    }[_norm_digest(digest_algorithm)]
    if isinstance(pub, rsa.RSAPublicKey):
        pub.verify(signature, data, padding.PKCS1v15(), h)
    elif isinstance(pub, ec.EllipticCurvePublicKey):
        pub.verify(signature, data, ec.ECDSA(h))
    else:
        raise RuntimeError("Không hỗ trợ loại public key này.")
    return True


def _windows_chain(signing_der):
    """Best effort: gom intermediate từ Windows CA/ROOT để nhúng vào CMS."""
    if os.name != "nt":
        return []
    from cryptography import x509
    from cryptography.hazmat.primitives import hashes
    signing = x509.load_der_x509_certificate(signing_der)
    pool = []
    for store_name in ("CA", "ROOT"):
        try:
            for blob, enc, _trust in ssl.enum_certificates(store_name):
                if enc == "x509_asn":
                    try: pool.append(x509.load_der_x509_certificate(blob))
                    except Exception: pass
        except Exception:
            pass
    result = []
    cur = signing
    seen = {cur.fingerprint(hashes.SHA256())}
    for _ in range(8):
        if cur.issuer == cur.subject:
            break
        parent = next((c for c in pool if c.subject == cur.issuer), None)
        if parent is None:
            break
        fp = parent.fingerprint(hashes.SHA256())
        if fp in seen:
            break
        seen.add(fp); result.append(parent); cur = parent
    return result


def make_windows_pyhanko_signer(thumbprint, pin="", hwnd=0):
    from pyhanko.keys.internal import translate_pyca_cryptography_cert_to_asn1
    from pyhanko.sign.signers.pdf_cms import Signer
    from pyhanko_certvalidator.registry import SimpleCertificateStore
    info = get_windows_certificate_info(thumbprint)
    pyca_cert = _load_pyca_cert(info["der"])
    signing_cert = translate_pyca_cryptography_cert_to_asn1(pyca_cert)
    registry = SimpleCertificateStore()
    for cert in _windows_chain(info["der"]):
        try:
            registry.register(translate_pyca_cryptography_cert_to_asn1(cert))
        except Exception:
            pass

    class WindowsStoreSigner(Signer):
        def __init__(self):
            super().__init__(signing_cert=signing_cert, cert_registry=registry, prefer_pss=False, embed_roots=False)
        async def async_sign_raw(self, data: bytes, digest_algorithm: str, dry_run=False) -> bytes:
            return windows_sign_raw(
                thumbprint, data, digest_algorithm=digest_algorithm,
                pin=pin, hwnd=hwnd, dry_run=dry_run
            )
    return WindowsStoreSigner(), info




def _public_cert_info(info):
    return {k:v for k,v in info.items() if k != "der"}


def _score_cert(info, company="", tax=""):
    blob = " ".join([
        info.get("organization", ""), info.get("common_name", ""),
        info.get("subject", ""), info.get("issuer", "")
    ]).lower()
    company = (company or "").strip().lower()
    tax_digits = re.sub(r"\D+", "", tax or "")
    score = 0
    if tax_digits and tax_digits in re.sub(r"\D+", "", blob): score += 1000
    if company and company in blob: score += 600
    for token in ("đào tạo", "lái xe", "bình tân"):
        if token in company and token in blob: score += 60
    if any(x in blob for x in ("localhost", "test", "development", "self-signed")): score -= 700
    return score


def _appearance_pdf(png_bytes, width, height, path):
    from reportlab.pdfgen import canvas
    from reportlab.lib.utils import ImageReader
    c = canvas.Canvas(str(path), pagesize=(float(width), float(height)))
    c.drawImage(ImageReader(BytesIO(png_bytes)), 0, 0, width=float(width), height=float(height), mask='auto')
    c.showPage(); c.save()


def sign_pdf_incremental(pdf_bytes, appearance_png, thumbprint, pin, page, rect, tsa=""):
    from pyhanko.pdf_utils.incremental_writer import IncrementalPdfFileWriter
    from pyhanko.sign import signers, fields, timestamps
    from pyhanko.stamp import StaticStampStyle

    if len(rect) != 4:
        raise ValueError("Rect không hợp lệ.")
    x1,y1,x2,y2 = map(float, rect)
    if x2 <= x1 or y2 <= y1:
        raise ValueError("Kích thước ô ký không hợp lệ.")
    page = int(page)
    if page < 1:
        raise ValueError("Trang ký không hợp lệ.")

    tmp = Path(tempfile.mkdtemp(prefix="kanban_sign_agent_"))
    try:
        src = tmp / "input.pdf"
        ap = tmp / "appearance.pdf"
        out = tmp / "signed.pdf"
        src.write_bytes(pdf_bytes)
        _appearance_pdf(appearance_png, x2-x1, y2-y1, ap)

        signer, info = make_windows_pyhanko_signer(thumbprint, pin=pin, hwnd=0)
        # Unique field name avoids collisions with pre-existing Signature1 fields.
        field = f"KB_Sign_{int(time.time()*1000)}"
        meta = signers.PdfSignatureMetadata(field_name=field, md_algorithm="sha256")
        style = StaticStampStyle.from_pdf_file(str(ap), page_ix=0, border_width=0, background_opacity=1.0)
        new_field = fields.SigFieldSpec(
            sig_field_name=field,
            on_page=page-1,
            box=(int(round(x1)), int(round(y1)), int(round(x2)), int(round(y2)))
        )
        timestamper = timestamps.HTTPTimeStamper(tsa) if (tsa or "").strip() else None

        with open(src, "rb") as inf, open(out, "wb") as outf:
            writer = IncrementalPdfFileWriter(inf)
            pdf_signer = signers.PdfSigner(
                meta, signer=signer, timestamper=timestamper,
                stamp_style=style, new_field_spec=new_field
            )
            pdf_signer.sign_pdf(writer, existing_fields_only=False, output=outf)
        result = out.read_bytes()
        if not result:
            raise RuntimeError("Không tạo được PDF đã ký.")
        return result, _public_cert_info(info)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def _origin_allowed(origin):
    if not origin:
        return True
    if origin in ALLOWED_ORIGINS:
        return True
    # Local development only. Do not broadly allow arbitrary public sites.
    return origin.startswith("http://localhost:") or origin.startswith("http://127.0.0.1:")


class Handler(BaseHTTPRequestHandler):
    server_version = "KanBanSigningAgent/1.0"

    def log_message(self, fmt, *args):
        print("[Agent]", self.address_string(), "-", fmt % args)

    def _cors(self):
        origin = self.headers.get("Origin", "")
        if _origin_allowed(origin):
            self.send_header("Access-Control-Allow-Origin", origin or "*")
            self.send_header("Vary", "Origin")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-KanBan-Agent")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Private-Network-Access-Name", "kanban-signing-agent")
        self.send_header("Private-Network-Access-ID", "4b:42:53:41:00:01")
        self.send_header("Cache-Control", "no-store")

    def _json(self, obj, status=200):
        raw = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status); self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw))); self.end_headers(); self.wfile.write(raw)

    def _error(self, message, status=400):
        self._json({"ok":False,"error":str(message)}, status)

    def _authorized(self):
        origin = self.headers.get("Origin", "")
        if not _origin_allowed(origin):
            self._error("Origin không được phép dùng Signing Agent.", 403); return False
        if self.headers.get("X-KanBan-Agent", "") != "linh-kanban-v1":
            self._error("Thiếu mã nhận diện KanBan.", 403); return False
        return True

    def do_OPTIONS(self):
        origin = self.headers.get("Origin", "")
        if not _origin_allowed(origin):
            self.send_response(403); self.end_headers(); return
        self.send_response(204); self._cors(); self.end_headers()

    def do_GET(self):
        if not self._authorized(): return
        u = urlparse(self.path)
        if u.path == "/health":
            return self._json({"ok":True,"version":VERSION,"host":HOST,"port":PORT})
        if u.path == "/certificates":
            try:
                q = parse_qs(u.query)
                company = (q.get("company") or [""])[0]
                tax = (q.get("tax") or [""])[0]
                rows = list_windows_certificates()
                rows = sorted(rows, key=lambda x:_score_cert(x,company,tax), reverse=True)
                return self._json({"ok":True,"certificates":[_public_cert_info(x) for x in rows]})
            except Exception as e:
                return self._error(e, 500)
        return self._error("Endpoint không tồn tại.", 404)

    def do_POST(self):
        if not self._authorized(): return
        u = urlparse(self.path)
        if u.path != "/sign": return self._error("Endpoint không tồn tại.", 404)
        try:
            n = int(self.headers.get("Content-Length", "0") or 0)
            if n <= 0 or n > MAX_BODY: raise ValueError("Dữ liệu gửi tới Agent quá lớn hoặc rỗng.")
            payload = json.loads(self.rfile.read(n).decode("utf-8"))
            pdf_bytes = base64.b64decode(payload.get("pdfBase64", ""), validate=True)
            appearance = base64.b64decode(payload.get("appearancePngBase64", ""), validate=True)
            thumbprint = str(payload.get("thumbprint", "")).replace(" ", "").upper()
            pin = str(payload.get("pin", ""))
            if not pdf_bytes: raise ValueError("PDF rỗng.")
            if not appearance: raise ValueError("Ảnh chữ ký rỗng.")
            if not thumbprint: raise ValueError("Chưa chọn chứng thư Windows.")
            if not pin: raise ValueError("Chưa nhập PIN USB Token.")
            signed, cert = sign_pdf_incremental(
                pdf_bytes, appearance, thumbprint, pin,
                int(payload.get("page", 1)), payload.get("rect") or [],
                str(payload.get("tsa", ""))
            )
            self.send_response(200); self._cors()
            self.send_header("Content-Type", "application/pdf")
            self.send_header("Content-Disposition", 'attachment; filename="signed.pdf"')
            self.send_header("X-KanBan-Certificate", base64.b64encode(json.dumps(cert,ensure_ascii=False).encode()).decode())
            self.send_header("Content-Length", str(len(signed))); self.end_headers(); self.wfile.write(signed)
        except Exception as e:
            traceback.print_exc()
            self._error(str(e), 500)


def main():
    if os.name != "nt":
        print("Signing Agent chỉ chạy trên Windows.")
        input("Nhấn Enter để thoát..."); return
    print("="*64)
    print(VERSION)
    print(f"Đang chạy tại http://{HOST}:{PORT}")
    print("Giữ cửa sổ này mở khi ký doanh nghiệp trên KanBan.")
    print("Private key không rời USB Token; Agent không upload PDF lên Internet.")
    print("="*64)
    try:
        ThreadingHTTPServer((HOST,PORT),Handler).serve_forever()
    except OSError as e:
        print("Không mở được cổng 8765:",e)
        input("Nhấn Enter để thoát...")
    except KeyboardInterrupt:
        print("\nĐã dừng Agent.")

if __name__ == "__main__":
    main()
