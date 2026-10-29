"""Standalone tests for Windows preview-lock fix (no Flask dependency)."""
import importlib.util
import unittest
from pathlib import Path

PATCH = Path(__file__).resolve().parents[1] / 'fix_windows_preview_v151.py'
spec = importlib.util.spec_from_file_location('kanscan_winfix', PATCH)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class WindowsPreviewLockTests(unittest.TestCase):
    def test_rewrite_is_idempotent(self):
        source = (
            'def preview(doc_id, number):\n    try:\n'
            + mod.OLD_PAGE + '\n    except Exception:\n        pass\n'
            + 'def join_preview(doc_id):\n    try:\n        with lock:\n            pass\n'
            + mod.OLD_JOIN + '\n    except Exception:\n        pass\n'
            + 'def rotate_page(doc_id, number):\n    try:\n        with lock:\n'
            + mod.OLD_ROTATE + '\n    except Exception:\n        pass\n'
        )
        fixed, changed = mod.rewrite(source)
        self.assertTrue(changed)
        self.assertEqual(fixed.count("return send_file(io.BytesIO(data), mimetype='image/jpeg')"), 2)
        self.assertIn('data = target.read_bytes()', fixed)
        self.assertIn('            try:\n                transformed.save(temporary', fixed)
        again, changed = mod.rewrite(fixed)
        self.assertFalse(changed)
        self.assertEqual(again, fixed)

    def test_unrecognized_source_is_rejected(self):
        with self.assertRaises(RuntimeError):
            mod.rewrite('def rotate_page(doc_id, number):\n    pass\n')


if __name__ == '__main__':
    unittest.main()
