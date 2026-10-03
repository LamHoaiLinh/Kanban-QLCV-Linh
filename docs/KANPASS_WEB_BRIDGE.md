# KanPass Web Bridge

## Mục tiêu

KanPass Web Bridge cho phép Web do công cụ của mình mở có trải nghiệm gần Google Password Manager:

1. Tool/trình duyệt đọc credential trực tiếp từ DOM khi người dùng submit form.
2. Credential chỉ tồn tại ngắn hạn trong RAM.
3. Chỉ sau khi xác định login thành công mới chuyển candidate sang KanPass.
4. Windows Agent hiện prompt native "Lưu?" hoặc "Cập nhật?".
5. KDBX là nơi duy nhất ghi password lâu dài.

Không lấy password từ Network request và không ghi request body/password vào log.

## Chế độ 1: Browser do KanPass quản lý

UI: **CÔNG CỤ → KanPass → Mở Web bằng KanPass**.

Agent mở Chrome/Edge/Brave/Vivaldi với:
- profile riêng `KanPassBrowserProfile`;
- CDP bind `127.0.0.1` và port ngẫu nhiên;
- không bật remote-debugging cho browser/profile chính của người dùng.

Bridge inject listener vào login form bằng CDP `Runtime.addBinding`.
Sau submit, bridge đợi URL đổi hoặc password field biến mất rồi mới hỏi Save/Update.

## Chế độ 2: Tool F12 / Playwright hiện có

Tool F12 có thể tự đọc DOM bằng Playwright, tự xác nhận login thành công, rồi POST snapshot tới Agent:

`POST http://127.0.0.1:47631/kanpass/web/dom-submit`

Header bắt buộc:

`X-KanBan-Agent: linh-kanpass-v1`

Body:

```json
{
  "loginSuccess": true,
  "snapshot": {
    "href": "https://example.com/login",
    "host": "example.com",
    "title": "Example",
    "fields": [
      {
        "type": "text",
        "name": "companyId",
        "label": "Company ID",
        "value": "..."
      },
      {
        "type": "text",
        "name": "username",
        "label": "Tên đăng nhập",
        "value": "..."
      },
      {
        "type": "password",
        "name": "password",
        "label": "Mật khẩu",
        "value": "..."
      }
    ]
  }
}
```

Agent không log body của endpoint này.

## Quy tắc field

Web Bridge ưu tiên metadata DOM:
- `password` / "Mật khẩu" → password.
- `username`, `user id`, email, "Tên đăng nhập" → username.
- `company id`, `corporate id`, "Mã công ty", "Mã doanh nghiệp" → company_id.
- `mst`, `tax id`, "Mã số thuế" → tax_id.

Fallback form ngân hàng doanh nghiệp 3 ô:
- ô text đầu → Company ID;
- ô text thứ hai → username;
- ô password → password.

Tên Công ty có thể được tái sử dụng từ credential khác nếu Company ID/MST trùng.

## Quy tắc matching nhiều công ty

Không dùng password để xác định trùng.
Ưu tiên:
1. Company ID hoặc MST.
2. Username.
3. Domain/host.
4. Dịch vụ.

Nếu Company ID/MST khác nhau, không update chéo giữa hai công ty.
Nếu còn mơ hồ, prompt native bắt người dùng chọn đúng hồ sơ thay vì tự đoán.

## Bảo mật và redaction

Không ghi các dữ liệu sau vào capture/log:
- password / passwd / pwd;
- PIN / OTP;
- Cookie / Authorization / Set-Cookie;
- request body đăng nhập chưa được redact.

Nếu tool F12 cần lưu request body để phân tích API, phải redact credential trước khi ghi JSON/JSONL.
