from pathlib import Path
import importlib.util
HERE = Path(__file__).parent
def load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name.replace('-', '_')}.py")
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

def test_bad_sidecars_do_not_abort_run(tmp_path, monkeypatch, capsys):
    tc = load("build_text_cache")
    archive = tmp_path / "archive"
    cache = tmp_path / "cache"
    archive.mkdir()
    monkeypatch.setattr(tc, "ARCHIVE", archive)
    monkeypatch.setattr(tc, "CACHE", cache)

    good = archive / "good.md"
    good.write_text("PARAGRAPH GOOD", encoding="utf-8")

    empty_hash = archive / "empty-hash.md"
    empty_hash.write_text("PARAGRAPH EMPTY", encoding="utf-8")
    (archive / "empty-hash.md.json").write_text('{"content_hash": ""}', encoding="utf-8")

    bad_json = archive / "bad-json.md"
    bad_json.write_text("PARAGRAPH BAD", encoding="utf-8")
    (archive / "bad-json.md.json").write_text("{not json", encoding="utf-8")

    assert tc.main([]) == 0
    first = capsys.readouterr()
    assert "extracted 3, unchanged 0, failed 0" in first.out
    assert first.err == ""
    for rel in ("good.md", "empty-hash.md", "bad-json.md"):
        assert (cache / (rel + ".txt")).exists()

    assert tc.main([]) == 0
    second = capsys.readouterr()
    assert "extracted 0, unchanged 3, failed 0" in second.out
    assert second.err == ""

def test_per_file_failure_is_logged_and_counted(tmp_path, monkeypatch, capsys):
    tc = load("build_text_cache")
    archive = tmp_path / "archive"
    archive.mkdir()
    monkeypatch.setattr(tc, "ARCHIVE", archive)
    monkeypatch.setattr(tc, "CACHE", tmp_path / "cache")
    (archive / "broken.pdf").write_bytes(b"not a pdf")
    (archive / "fine.md").write_text("OK", encoding="utf-8")

    assert tc.main([]) == 0
    captured = capsys.readouterr()
    assert "extracted 1, unchanged 0, failed 1" in captured.out
    assert "FAIL broken.pdf" in captured.err
