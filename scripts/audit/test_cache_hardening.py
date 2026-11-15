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

    assert tc.main([]) == 1
    captured = capsys.readouterr()
    assert "extracted 1, unchanged 0, failed 1" in captured.out
    assert "FAIL broken.pdf" in captured.err

def test_env_override_sets_cache(tmp_path, monkeypatch):
    custom = tmp_path / "custom-cache"
    monkeypatch.setenv("AUDIT_TEXT_CACHE", str(custom))
    tc = load("build_text_cache")
    assert tc.CACHE == custom
    assert tc.cache_path("MCO/x.pdf") == custom / "MCO" / "x.pdf.txt"

def test_missing_archive_returns_nonzero(tmp_path, monkeypatch, capsys):
    tc = load("build_text_cache")
    monkeypatch.setattr(tc, "ARCHIVE", tmp_path / "does-not-exist")
    monkeypatch.setattr(tc, "CACHE", tmp_path / "cache")
    assert tc.main([]) == 1
    captured = capsys.readouterr()
    assert "extracted 0, unchanged 0, failed 0" in captured.out
    assert "WALK ERRORS" in captured.err

def test_long_cache_path_roundtrip(tmp_path, monkeypatch):
    import os, pytest
    if os.name != "nt":
        pytest.skip("long-path behaviour is Windows only")
    tc = load("build_text_cache")
    archive = tmp_path / "archive"
    archive.mkdir()
    src = archive / "deep.md"
    src.write_text("PARAGRAPH DEEP", encoding="utf-8")
    monkeypatch.setattr(tc, "CACHE", tmp_path / "cache")
    rel = "/".join(["segment-" + "x" * 50] * 5) + "/deep.md"
    out = tc.cache_path(rel)
    assert len(str(out)) > 300
    tc.extract(src, out)
    assert "PARAGRAPH DEEP" in tc.read_cached(rel)[0]


# ---- final review fixes ----
import json, os

def _archive(tmp_path, sm):
    root = tmp_path / "Policies"
    for f in sm.EXPECTED_FOLDERS:
        (root / f).mkdir(parents=True)
    (root / "paa_index.json").write_text('{"downloaded": {}}', encoding="utf-8")
    return root

def test_default_cache_is_repo_local(monkeypatch):
    monkeypatch.delenv("AUDIT_TEXT_CACHE", raising=False)
    tc = load("build_text_cache")
    assert tc.CACHE == HERE.resolve().parents[1] / ".superpowers" / "text-cache"
    assert "_text" not in tc.CACHE.parts

def test_archive_docs_cache_rebuilds_when_archive_changes(tmp_path, monkeypatch):
    sm = load("source_map")
    root = _archive(tmp_path, sm)
    monkeypatch.setattr(sm.tc, "ARCHIVE", root)
    monkeypatch.setattr(sm.tc, "CACHE", tmp_path / "cache")
    (root / "MCO" / "MCO_1.pdf.json").write_text('{"document_number": "MCO 1"}', encoding="utf-8")
    assert len(sm.load_archive_table()) == 1
    assert len(sm.load_archive_table()) == 1
    (root / "MCO" / "MCO_2.pdf.json").write_text('{"document_number": "MCO 2"}', encoding="utf-8")
    assert len(sm.load_archive_table()) == 2

def test_amend_index_rebuilds_when_archive_changes(tmp_path, monkeypatch):
    am = load("amendments")
    sm = load("source_map")
    tc = load("build_text_cache")
    root = _archive(tmp_path, sm)
    tc.ARCHIVE, tc.CACHE = root, tmp_path / "cache"
    assert am.load_index(tc=tc) == {}
    calls = []
    real = am.build_index
    monkeypatch.setattr(am, "build_index", lambda m: calls.append(1) or real(m))
    am.load_index(tc=tc)
    assert calls == []
    (root / "MARADMINS" / "x.pdf.json").write_text('{}', encoding="utf-8")
    am.load_index(tc=tc)
    assert calls == [1]

def test_superseded_folder_resolves_to_replacement(tmp_path, monkeypatch):
    sm = load("source_map")
    root = _archive(tmp_path, sm)
    new_rel = "DTMO/New_Regs.pdf"
    old_rel = "DTMO/_superseded/Old_Regs.pdf"
    (root / "DTMO" / "_superseded").mkdir()
    (root / "DTMO" / "_superseded" / "Old_Regs.pdf.json").write_text(json.dumps(
        {"document_number": "DoD GTCC Regs", "relative_path": old_rel, "document_date": "2025-04-09",
         "superseded_by": [new_rel]}), encoding="utf-8")
    (root / "DTMO" / "New_Regs.pdf.json").write_text(json.dumps(
        {"document_number": "DoW GTCC Regs", "relative_path": new_rel, "document_date": "2026-05-29"}), encoding="utf-8")
    monkeypatch.setattr(sm.tc, "ARCHIVE", root)
    monkeypatch.setattr(sm.tc, "CACHE", tmp_path / "cache")
    rows = sm.load_archive_table(rebuild=True)
    arc = sm.Archive(rows, {})
    rec = {"id": "gtcc", "type": "DTMO", "number": "x", "aliases": ["DoD GTCC Regs"]}
    got, _ = arc.find(rec)
    assert got[0]["supersededFrom"] == old_rel
    assert [r["rel"] for r in got] == [new_rel]
    assert sm.source_record(got[0], "x", rec, False, got, {})["supersededFrom"] == old_rel

def test_dot_prefixed_content_is_skipped(tmp_path, monkeypatch):
    sm = load("source_map")
    sr = load("superseded_refs")
    ct = load("contradictions")
    content = tmp_path / "content"
    (content / "marines").mkdir(parents=True)
    (content / "marines" / "ok.mdx").write_text("---\ntitle: a\n---\nx", encoding="utf-8")
    (content / "marines" / ".trash-ok.mdx").write_text("---\ntitle: a\n---\nx", encoding="utf-8")
    for m in (sm, sr, ct):
        monkeypatch.setattr(m, "CONTENT", content)
        monkeypatch.setattr(m, "REPO", tmp_path)
    assert [r.as_posix() for _, r in sm.content_files()] == ["marines/ok.mdx"]
    assert [Path(p).name for p, _ in sr.content_pages()] == ["ok.mdx"]
    assert [Path(p).name for p in ct.load_pages()] == ["ok.mdx"]

def test_cache_main_returns_1_on_failed_file(tmp_path, monkeypatch, capsys):
    tc = load("build_text_cache")
    archive = tmp_path / "archive"
    archive.mkdir()
    monkeypatch.setattr(tc, "ARCHIVE", archive)
    monkeypatch.setattr(tc, "CACHE", tmp_path / "cache")
    (archive / "broken.pdf").write_bytes(b"not a pdf")
    assert tc.main([]) == 1
    assert "failed 1" in capsys.readouterr().out


def test_amend_index_fails_loud_without_paa_index(tmp_path):
    import pytest
    am = load("amendments")
    tc = load("build_text_cache")
    root = tmp_path / "arch"
    for f in ("MARADMINS", "ALNAVS", "ALMARS", "DoDI"):
        (root / f).mkdir(parents=True)
    tc.ARCHIVE, tc.CACHE = root, tmp_path / "cache"
    with pytest.raises(RuntimeError, match="paa_index"):
        am.load_index(rebuild=True, tc=tc)
    assert not (tmp_path / "cache" / "_amend_index.json").exists()


def test_archive_env_override(monkeypatch, tmp_path):
    monkeypatch.setenv("AUDIT_ARCHIVE", str(tmp_path))
    tc = load("build_text_cache")
    assert tc.ARCHIVE == tmp_path
