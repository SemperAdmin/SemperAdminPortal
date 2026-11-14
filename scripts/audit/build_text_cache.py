"""Extract archive PDFs and DOCX to a page-marked text cache. Incremental by sidecar content_hash."""
import json, sys
from pathlib import Path
import pymupdf

ARCHIVE = Path(r"E:\GunnyBot\Policies")
CACHE = ARCHIVE / "_text"
MARK = "\n\f[[page {n}]]\n"
SKIP_DIRS = ("_text", "_quarantine", "_broken_pdfs")

def extract(src: Path, out: Path) -> Path:
    out.parent.mkdir(parents=True, exist_ok=True)
    if src.suffix.lower() == ".md":
        text = MARK.format(n=1) + src.read_text(encoding="utf-8")
    elif src.suffix.lower() == ".docx":
        from docx import Document
        text = MARK.format(n=1) + "\n".join(p.text for p in Document(src).paragraphs)
    else:
        doc = pymupdf.open(src)
        text = "".join(MARK.format(n=i + 1) + p.get_text() for i, p in enumerate(doc))
    out.write_text(text, encoding="utf-8")
    return out

def read_cached_file(path: Path) -> list[str]:
    parts = path.read_text(encoding="utf-8").split("\f[[page ")
    return [p.split("]]\n", 1)[1] for p in parts if "]]\n" in p]

def cache_path(relative_path: str) -> Path:
    return CACHE / (relative_path + ".txt")

def read_cached(relative_path: str) -> list[str]:
    return read_cached_file(cache_path(relative_path))

def main(argv: list[str]) -> int:
    done = skipped = failed = 0
    for src in ARCHIVE.rglob("*"):
        if src.suffix.lower() not in (".pdf", ".docx", ".md") or any(d in src.parts for d in SKIP_DIRS):
            continue
        rel = src.relative_to(ARCHIVE).as_posix()
        out = cache_path(rel)
        side = src.with_name(src.name + ".json")
        stamp = out.with_name(out.name + ".hash")
        h = json.loads(side.read_text(encoding="utf-8")).get("content_hash", "") if side.exists() else str(src.stat().st_mtime)
        if out.exists() and stamp.exists() and stamp.read_text() == h:
            skipped += 1; continue
        try:
            extract(src, out); stamp.write_text(h); done += 1
        except Exception as e:  # broken PDFs are logged, not fatal
            failed += 1; print(f"FAIL {rel}: {e}", file=sys.stderr)
    print(f"[audit:cache] extracted {done}, unchanged {skipped}, failed {failed}")
    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
