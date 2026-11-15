"""Extract archive PDFs and DOCX to a page-marked text cache. Incremental by sidecar content_hash."""
import json, os, sys
from pathlib import Path
import pymupdf

ARCHIVE = Path(r"E:\GunnyBot\Policies")
CACHE = Path(os.environ["AUDIT_TEXT_CACHE"]) if os.environ.get("AUDIT_TEXT_CACHE") else ARCHIVE / "_text"
MARK = "\n\f[[page {n}]]\n"
SKIP_DIRS = ("_text", "_quarantine", "_broken_pdfs")

def io_path(p) -> str:
    """Return a string Windows file APIs accept past MAX_PATH (LongPathsEnabled is 0 here)."""
    s = os.path.abspath(str(p))
    if os.name != "nt" or s.startswith("\\\\?\\"):
        return s
    if s.startswith("\\\\"):
        return "\\\\?\\UNC\\" + s[2:]
    return "\\\\?\\" + s

def _read(p) -> str:
    with open(io_path(p), encoding="utf-8") as f:
        return f.read()

def _write(p, text: str) -> None:
    with open(io_path(p), "w", encoding="utf-8") as f:
        f.write(text)

def _exists(p) -> bool:
    return os.path.exists(io_path(p))

def extract(src: Path, out: Path) -> Path:
    os.makedirs(io_path(out.parent), exist_ok=True)
    if src.suffix.lower() == ".md":
        text = MARK.format(n=1) + _read(src)
    elif src.suffix.lower() == ".docx":
        from docx import Document
        text = MARK.format(n=1) + "\n".join(p.text for p in Document(src).paragraphs)
    else:
        doc = pymupdf.open(src)
        text = "".join(MARK.format(n=i + 1) + p.get_text() for i, p in enumerate(doc))
    _write(out, text)
    return out

def read_cached_file(path: Path) -> list[str]:
    parts = _read(path).split("\f[[page ")
    return [p.split("]]\n", 1)[1] for p in parts if "]]\n" in p]

def cache_path(relative_path: str) -> Path:
    return CACHE / (relative_path + ".txt")

def read_cached(relative_path: str) -> list[str]:
    return read_cached_file(cache_path(relative_path))

def source_hash(src: Path) -> str:
    """Return the sidecar content_hash, or the source mtime when the sidecar is absent, unreadable, or empty."""
    side = src.with_name(src.name + ".json")
    try:
        if _exists(side):
            value = json.loads(_read(side)).get("content_hash", "")
            if value:
                return str(value)
    except (OSError, ValueError, AttributeError):
        pass  # normal fallback, not logged
    return str(os.stat(io_path(src)).st_mtime)

def process(src: Path) -> str:
    """Extract one source. Returns 'done', 'skipped', or 'failed'."""
    rel = src.relative_to(ARCHIVE).as_posix()
    out = cache_path(rel)
    stamp = out.with_name(out.name + ".hash")
    try:
        h = source_hash(src)
        if _exists(out) and _exists(stamp) and _read(stamp) == h:
            return "skipped"
        extract(src, out); _write(stamp, h)
        return "done"
    except Exception as e:  # broken PDFs and bad sidecars are logged, not fatal
        print(f"FAIL {rel}: {e}", file=sys.stderr)
        return "failed"

def main(argv: list[str]) -> int:
    counts = {"done": 0, "skipped": 0, "failed": 0}
    walk_errors: list[str] = []

    def on_walk_error(err: OSError) -> None:
        walk_errors.append(f"{err.filename}: {err.strerror or err}")

    for root, dirnames, filenames in os.walk(ARCHIVE, onerror=on_walk_error):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for name in filenames:
            src = Path(root) / name
            if src.suffix.lower() in (".pdf", ".docx", ".md"):
                counts[process(src)] += 1
    print(f"[audit:cache] extracted {counts['done']}, unchanged {counts['skipped']}, failed {counts['failed']}", flush=True)
    if walk_errors:
        print(f"[audit:cache] WALK ERRORS {len(walk_errors)} (first: {walk_errors[0]})", file=sys.stderr, flush=True)
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
