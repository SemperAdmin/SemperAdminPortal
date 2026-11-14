from pathlib import Path
import importlib.util, sys
HERE = Path(__file__).parent
def load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name.replace('-', '_')}.py")
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

def test_cache_roundtrip(tmp_path):
    tc = load("build_text_cache")
    src = HERE / "fixtures" / "two-page.pdf"
    out = tc.extract(src, tmp_path / "two-page.pdf.txt")
    pages = tc.read_cached_file(out)
    assert len(pages) == 2
    assert "PARAGRAPH ONE" in pages[0]

def test_read_cached_resolves_relative_path(tmp_path, monkeypatch):
    tc = load("build_text_cache")
    monkeypatch.setattr(tc, "CACHE", tmp_path)
    tc.extract(HERE / "fixtures" / "two-page.pdf", tc.cache_path("MCO/two-page.pdf"))
    pages = tc.read_cached("MCO/two-page.pdf")
    assert len(pages) == 2
    assert "PARAGRAPH TWO" in pages[1]
