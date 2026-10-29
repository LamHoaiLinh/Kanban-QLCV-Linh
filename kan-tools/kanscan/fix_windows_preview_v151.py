"""KanScan v1.5.1 Windows preview lock fix. Idempotent and fails closed."""
import argparse
import ast
import os
from pathlib import Path

OLD_PAGE = "        return send_file(draft_path(doc_id) / f'page_{number:02d}.jpeg', mimetype='image/jpeg')"
NEW_PAGE = """        # Return an in-memory buffer instead of holding the Windows JPEG open.
        with lock:
            data = (draft_path(doc_id) / f'page_{number:02d}.jpeg').read_bytes()
        return send_file(io.BytesIO(data), mimetype='image/jpeg')"""

OLD_JOIN = "        return send_file(target, mimetype='image/jpeg')"
NEW_JOIN = """            # Release join_preview_NN.jpeg before the HTTP response is sent.
            data = target.read_bytes()
        return send_file(io.BytesIO(data), mimetype='image/jpeg')"""

OLD_ROTATE = """            with Image.open(destination) as opened:
                transformed = opened.transpose(
                    Image.Transpose.ROTATE_90 if direction == 'left'
                    else Image.Transpose.ROTATE_270
                )
                try:
                    transformed.save(temporary, format='JPEG',
                                     quality=CONFIG['jpeg_quality'], optimize=True)
                    os.replace(temporary, destination)
                finally:
                    transformed.close()
                    temporary.unlink(missing_ok=True)"""
NEW_ROTATE = """            # Close the source JPEG before os.replace on Windows.
            with Image.open(destination) as opened:
                transformed = opened.transpose(
                    Image.Transpose.ROTATE_90 if direction == 'left'
                    else Image.Transpose.ROTATE_270
                )
            try:
                transformed.save(temporary, format='JPEG',
                                 quality=CONFIG['jpeg_quality'], optimize=True)
                os.replace(temporary, destination)
            finally:
                transformed.close()
                temporary.unlink(missing_ok=True)"""


def rewrite(text):
    if 'def rotate_page(doc_id, number):' not in text or 'def join_preview(doc_id):' not in text:
        raise RuntimeError('KanScan v1.5 sources required, refusing to patch.')
    changed = False
    for before, after, check in (
        (OLD_PAGE, NEW_PAGE, "data = (draft_path(doc_id) / f'page_{number:02d}.jpeg').read_bytes()"),
        (OLD_JOIN, NEW_JOIN, 'data = target.read_bytes()'),
        (OLD_ROTATE, NEW_ROTATE, '            try:\n                transformed.save(temporary'),
    ):
        if before in text:
            if text.count(before) != 1:
                raise RuntimeError('Ambiguous KanScan source; not patching.')
            text = text.replace(before, after, 1)
            changed = True
        elif check not in text:
            raise RuntimeError('Unsupported KanScan source; not patching.')
    ast.parse(text)
    return text, changed


def apply(root):
    target = Path(root) / 'app.py'
    original = target.read_text(encoding='utf-8')
    updated, changed = rewrite(original)
    if changed:
        stage = target.with_suffix('.winlock.tmp')
        try:
            stage.write_text(updated, encoding='utf-8')
            os.replace(stage, target)
        finally:
            stage.unlink(missing_ok=True)
    return changed


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('root', type=Path)
    args = parser.parse_args()
    print('Patched Windows JPEG preview locks' if apply(args.root) else 'Already fixed')
