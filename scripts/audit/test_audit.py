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


def test_amendments_amends_via_ref_letter():
    am = load("amendments")
    idx = am.build_index([("MARADMIN 100/10", "2010-03-01", "MARADMINS/CY2010/x.pdf",
                           (HERE / "fixtures" / "maradmin-amends.txt").read_text())])
    got = am.amendments_for("MCO 1050.3J", "2009-05-19", index=idx)
    assert [(g["id"], g["kind"], g["date"]) for g in got] == [("MARADMIN 100/10", "amends", "2010-03-01")]
    assert got[0]["file"] == "MARADMINS/CY2010/x.pdf"
    assert am.amendments_for("MCO 1050.3J", "2011-01-01", index=idx) == []

def test_amendments_cancels_direct_mention():
    am = load("amendments")
    idx = am.build_index([("MARADMIN 251/26", "2026-05-01", "m.pdf",
                           (HERE / "fixtures" / "maradmin-cancels.txt").read_text())])
    got = am.amendments_for("MARADMIN 468/26", "2026-01-01", index=idx)
    assert [(g["id"], g["kind"]) for g in got] == [("MARADMIN 251/26", "cancels")]

def test_normalize_doc_key():
    am = load("amendments")
    assert am.doc_key("DoDI 1327.06 CH 1") == "DODI 1327.06"
    assert am.doc_key("MARADMIN 001/26~A4370991") == "MARADMIN 001/26"
    assert am.doc_key("Vol. 8 MCO 5800.16, par. 4") == "MCO 5800.16"

def test_source_map_resolves_title_fallback():
    sm = load("source_map")
    cites = {"byId": {"dodi-1327-06": {"id": "dodi-1327-06", "type": "DODI", "number": "1327.06",
              "title": "DODI 1327.06 - Military Leave, Liberty, and Administrative Absence"}},
             "byAlias": {"DODI 1327.06": "dodi-1327-06"}, "byBase": {}}
    r = sm.Resolver(cites)
    assert r.resolve("DODI 1327.06 par 3")["id"] == "dodi-1327-06"
    assert r.resolve("DODI Leave, Liberty, and Administrative Absence (7 August 2025)")["id"] == "dodi-1327-06"
    assert r.resolve("Nothing Known") is None

def test_archive_rows_resolve_messages_and_corpora():
    sm = load("source_map")
    rows = [sm._row("MARADMINS/CY2023/MARADMIN_051_23_X.pdf", "051/23", "2023-01-30", "MARADMIN", []),
            sm._row("DoDFMR/Vol_07a/Vol07a_Ch01_Basic_Pay.pdf", "DoDFMR Vol 07a Ch 01", "2024-05-01", "DoDFMR", []),
            sm._row("DoDFMR/Vol_07a/Vol07a_Ch02_Bonuses.pdf", "DoDFMR Vol 07a Ch 02", "2024-05-01", "DoDFMR", [])]
    arch = sm.Archive(rows, {})
    got, _ = arch.find({"id": "m", "type": "MARADMIN", "number": "051/23", "aliases": ["MARADMIN 051/23"]})
    assert got[0]["rel"].endswith("MARADMIN_051_23_X.pdf") and got[0]["number"] == "MARADMIN 051/23"
    got, _ = arch.find({"id": "f", "type": "DODFMR", "number": "7000.14-R Vol 7A", "aliases": ["DoDFMR Vol 7A"]})
    assert len(got) == 2


def test_undated_entry_is_flagged_not_proven_later():
    am = load("amendments")
    text = (HERE / "fixtures" / "maradmin-amends.txt").read_text()
    idx = am.build_index([("MARADMIN 100/10", "", "x.pdf", text)])
    got = am.amendments_for("MCO 1050.3J", "2009-05-19", index=idx)
    assert len(got) == 1 and got[0]["dateUnknown"] is True
    assert "dateUnknown" not in am.build_index([("MARADMIN 100/10", "2010-03-01", "x.pdf", text)])["MCO 1050.3J"][0]

def test_via_distinguishes_ref_letter_from_direct():
    am = load("amendments")
    letter = am.scan_message((HERE / "fixtures" / "maradmin-amends.txt").read_text(), "MARADMIN 100/10")
    assert ("MCO 1050.3J", "amends", "ref-letter") in letter
    direct = am.scan_message((HERE / "fixtures" / "maradmin-cancels.txt").read_text(), "MARADMIN 251/26")
    assert direct == [("MARADMIN 468/26", "cancels", "direct")]
    idx = am.build_index([("MARADMIN 251/26", "2026-05-01", "m.pdf", (HERE / "fixtures" / "maradmin-cancels.txt").read_text())])
    assert am.amendments_for("MARADMIN 468/26", "2026-01-01", index=idx)[0]["via"] == "direct"

def test_readability_checked_on_every_row(tmp_path, monkeypatch):
    sm = load("source_map")
    monkeypatch.setattr(sm.tc, "CACHE", tmp_path)
    for rel, body in (("A/one.pdf", "text"), ("A/two.pdf", "  ")):
        out = sm.tc.cache_path(rel); out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text("\f[[page 1]]\n" + body, encoding="utf-8")
    assert sm.readability("A/one.pdf") == "ok"
    assert sm.readability("A/two.pdf") == "unreadable"
    assert sm.readability("A/three.pdf") == "uncached"
    entries = [{"sources": [{"readable": "unreadable", "file": "A/one.pdf", "unreadableFiles": ["A/two.pdf"], "amendments": []}],
                "unresolved": [], "noArchiveSource": False, "hasRefs": True, "wave": 1}]
    assert "A/two.pdf" in sm.coverage(entries)


# ---- Task 3: mechanical checks ----

def _cancel_index():
    am = load("amendments")
    return am.build_index([
        ("MARADMIN 251/26", "2026-05-01", "m251.pdf", "MARADMIN 251/26\nGENTEXT/REMARKS/1. MARADMIN 468/23 IS CANCELLED."),
        ("MARADMIN 300/26", "", "m300.pdf", "GENTEXT/REMARKS/1. MARADMIN 150/24 IS CANCELLED."),
        ("MARADMIN 301/26", "2026-06-01", "m301.pdf", "GENTEXT/REMARKS/1. MARADMIN 160/24 IS MODIFIED."),
    ])


def test_superseded_cancelled_ref_names_replacement():
    sr = load("superseded_refs")
    got = sr.check_ref("MARADMIN 468/23", _cancel_index())
    assert got["proven"][0]["replacement"] == "MARADMIN 251/26"
    assert got["proven"][0]["reason"] == "cancels"
    assert got["unconfirmed"] == []


def test_superseded_undated_cancel_is_unconfirmed_only():
    sr = load("superseded_refs")
    got = sr.check_ref("MARADMIN 150/24", _cancel_index())
    assert got["proven"] == []
    assert got["unconfirmed"][0]["replacement"] == "MARADMIN 300/26"


def test_superseded_amend_is_not_a_cancellation():
    sr = load("superseded_refs")
    got = sr.check_ref("MARADMIN 160/24", _cancel_index())
    assert got["proven"] == [] and got["unconfirmed"] == []


def test_superseded_scan_text_reports_page_and_line():
    sr = load("superseded_refs")
    text = "intro\nSee MARADMIN 468/23 for details.\nAlso MARADMIN 251/26.\n"
    out = sr.scan_text("content/x.mdx", text, _cancel_index())
    assert [(o["page"], o["line"], o["ref"], o["replacement"]) for o in out["superseded"]] == [
        ("content/x.mdx", 2, "MARADMIN 468/23", "MARADMIN 251/26")]
    assert out["superseded"][0]["alsoCitesReplacement"] is True


def test_contradictions_fsa_two_values():
    cx = load("contradictions")
    pages = {"content/a.mdx": "Intro\nFSA is paid at $250 per month.\n",
             "content/b.mdx": "Text\nThe FSA rate is $300 a month for members.\n"}
    out = cx.find_contradictions(pages)
    assert len(out) == 1 and out[0]["topic"] == "fsa"
    assert out[0]["values"] == {"$250": ["content/a.mdx:2"], "$300": ["content/b.mdx:2"]}


def test_contradictions_agreeing_pages_are_silent():
    cx = load("contradictions")
    pages = {"a": "FSA is $300 monthly.", "b": "FSA pays $300 per month."}
    assert cx.find_contradictions(pages) == []


def test_contradictions_units_normalize():
    cx = load("contradictions")
    hits = cx.topic_hits("Parental leave is 12 weeks. Convalescent leave: 84 days. SRB cap 6 percent")
    assert ("parental leave", "12 weeks") in hits
    assert ("convalescent", "84 days") in hits
    assert ("srb", "6%") in hits


def _tmp_archive(tmp_path, folders):
    root = tmp_path / "Policies"
    for f in folders:
        (root / f).mkdir(parents=True)
    (root / "paa_index.json").write_text('{"downloaded": {}}', encoding="utf-8")
    return root

def test_amend_index_refuses_partial_walk(tmp_path):
    import pytest
    am = load("amendments")
    tc = load("build_text_cache")
    root = _tmp_archive(tmp_path, ["MARADMINS", "ALNAVS", "DoDI"])  # ALMARS missing
    tc.ARCHIVE, tc.CACHE = root, root / "_text"
    with pytest.raises(RuntimeError, match="ALMARS"):
        am.load_index(rebuild=True, tc=tc)
    assert not (root / "_text" / "_amend_index.json").exists()
    for f in ("ALMARS",):
        (root / f).mkdir()
    assert am.load_index(rebuild=True, tc=tc) == {}
    assert (root / "_text" / "_amend_index.json").exists()

def test_archive_table_refuses_partial_walk(tmp_path, monkeypatch):
    import pytest
    sm = load("source_map")
    root = _tmp_archive(tmp_path, ["MARADMINS"])  # most expected folders missing
    monkeypatch.setattr(sm.tc, "ARCHIVE", root)
    monkeypatch.setattr(sm.tc, "CACHE", root / "_text")
    with pytest.raises(RuntimeError, match="ALNAVS"):
        sm.load_archive_table(rebuild=True)
    assert not (root / "_text" / "_archive_docs.json").exists()

def test_archive_table_refuses_unreadable_sidecar(tmp_path, monkeypatch):
    import pytest
    sm = load("source_map")
    root = _tmp_archive(tmp_path, list(sm.EXPECTED_FOLDERS))
    (root / "MCO" / "MCO_1.pdf.json").write_text('{"document_number": "MCO 1"}', encoding="utf-8")
    (root / "MCO" / "MCO_2.pdf.json").write_text("{bad json", encoding="utf-8")  # skipped, not fatal
    monkeypatch.setattr(sm.tc, "ARCHIVE", root)
    monkeypatch.setattr(sm.tc, "CACHE", root / "_text")
    assert len(sm.load_archive_table(rebuild=True)) == 1
    (root / "_text" / "_archive_docs.json").unlink()
    real = Path.read_text
    def flaky(self, *a, **k):
        if self.name == "MCO_1.pdf.json":
            raise PermissionError(13, "denied")
        return real(self, *a, **k)
    monkeypatch.setattr(Path, "read_text", flaky)
    with pytest.raises(RuntimeError, match="MCO_1.pdf.json"):
        sm.load_archive_table(rebuild=True)
    assert not (root / "_text" / "_archive_docs.json").exists()

def test_long_cache_paths_are_read_and_written(tmp_path, monkeypatch):
    import os, sys, pytest
    if sys.platform != "win32":
        pytest.skip("MAX_PATH only applies on Windows")
    sm = load("source_map")
    am = load("amendments")
    deep = tmp_path / ("d" * 60) / ("e" * 60) / ("f" * 60) / ("g" * 60) / ("h" * 60)
    monkeypatch.setattr(sm.tc, "CACHE", deep / "_text")
    rel = "MARADMINS/CY2023/" + "X" * 80 + ".pdf"
    out = sm.tc.cache_path(rel)
    assert len(str(out)) > 300
    os.makedirs(sm.tc.io_path(out.parent), exist_ok=True)
    with open(sm.tc.io_path(out), "w", encoding="utf-8") as f:
        f.write("\f[[page 1]]\nbody text")
    assert sm.readability(rel) == "ok"
    root = _tmp_archive(tmp_path, list(sm.EXPECTED_FOLDERS))
    monkeypatch.setattr(sm.tc, "ARCHIVE", root)
    (root / "MARADMINS" / "CY2023").mkdir(parents=True)
    rows = sm.load_archive_table(rebuild=True)  # writes _archive_docs.json under the deep root
    assert rows == [] and os.path.exists(sm.tc.io_path(sm.tc.CACHE / "_archive_docs.json"))
    assert sm.load_archive_table() == []
    am.tc = sm.tc
    idx = am.load_index(rebuild=True, tc=sm.tc)
    assert idx == {} and os.path.exists(sm.tc.io_path(am.pickle_path(sm.tc)))
    assert am.load_index(tc=sm.tc) == {}

def test_doc_key_folds_spaced_revision_letter():
    am = load("amendments")
    assert am.doc_key("MCO 1050.3 J") == "MCO 1050.3J"
    assert am.doc_key("NAVMC 1200.1 L") == "NAVMC 1200.1L"
    assert am.doc_key("MARADMIN 051/23 CLARIFICATION") == "MARADMIN 051/23"
    assert am.doc_key("DoDI 1327.06 CH 1") == "DODI 1327.06"


def test_superseded_uses_source_date_over_jan1():
    sr = load("superseded_refs")
    am = load("amendments")
    idx = am.build_index([("MARADMIN 251/26", "2026-03-01", "m.pdf", "1. MARADMIN 468/26 IS CANCELLED.")])
    assert sr.check_ref("MARADMIN 468/26", idx)["proven"][0]["replacement"] == "MARADMIN 251/26"
    got = sr.check_ref("MARADMIN 468/26", idx, {"MARADMIN 468/26": "2026-06-01"})
    assert got["proven"] == [] and got["unconfirmed"] == []


# ---- Task 4: cluster builder ----
def _items(n, tokens=10, key="K"):
    return [{"page": f"content/marines/p{i:03d}.mdx", "tokens": tokens, "key": key} for i in range(n)]

def test_pack_splits_over_page_cap():
    sm = load("source_map")
    bins = sm.pack_bins(_items(7), page_cap=3, token_cap=10**9, min_merge=1)
    assert [len(b) for b in bins] == [3, 3, 1]

def test_pack_splits_over_token_cap():
    sm = load("source_map")
    bins = sm.pack_bins(_items(5, tokens=50), page_cap=40, token_cap=120, min_merge=1)
    assert [len(b) for b in bins] == [2, 2, 1]

def test_pack_merges_tail_under_five_when_it_fits():
    sm = load("source_map")
    assert [len(b) for b in sm.pack_bins(_items(44), page_cap=40, token_cap=10**9, min_merge=5)] == [40, 4]
    assert [len(b) for b in sm.pack_bins(_items(14), page_cap=10, token_cap=10**9, min_merge=5)] == [10, 4]
    assert [len(b) for b in sm.pack_bins(_items(12), page_cap=14, token_cap=10**9, min_merge=5)] == [12]
    bins = sm.pack_bins(_items(13), page_cap=10, token_cap=10**9, min_merge=5)
    assert [len(b) for b in bins] == [10, 3]

def _row(page, src, cluster=None, wave=1):
    return {"page": page, "roles": ["marine"], "wave": wave, "cluster": cluster,
            "sources": [{"id": src, "file": f"MCO/{src}.pdf", "date": "2020-01-01", "amendments": []}] if src else [],
            "unresolved": [], "noArchiveSource": not src}

def test_generic_merge_small_groups_into_sibling_family():
    sm = load("source_map")
    rows = [_row(f"c/a{i}.mdx", "MCO 100", wave=2) for i in range(20)]
    rows += [_row(f"c/b{i}.mdx", "MCO 200", wave=2) for i in range(2)]
    rows += [_row(f"c/c{i}.mdx", "MCO 300", wave=2) for i in range(2)]
    rows += [_row(f"c/d{i}.mdx", "MARADMIN 1/20", wave=2) for i in range(2)]
    out = sm.build_generic(rows, lambda r: 10, page_cap=30, token_cap=10**9)
    sizes = sorted(len(c["rows"]) for c in out)
    assert sizes == [2, 24]
    big = [c for c in out if len(c["rows"]) == 24][0]
    assert {r["sources"][0]["id"] for r in big["rows"]} == {"MCO 100", "MCO 200", "MCO 300"}

def test_wave1_budget_cap_and_overflow_listing():
    sm = load("source_map")
    rows = [_row(f"c/p{i:03d}.mdx", "MCO 1001R.1L", "mcramm") for i in range(25)]
    rows += [_row(f"c/q{i:03d}.mdx", "MCO 1900.16", "separations-1900-16") for i in range(12)]
    rows += [_row("c/k1.mdx", "MCO 5800.16 W/ CH-1", "keyword")]
    rows += [_row("c/k2.mdx", "MCO 9999", "keyword")]
    rows += [_row("c/k3.mdx", None, "keyword")]
    clusters, overflow = sm.build_wave1(rows, lambda r: 10, page_cap=10, token_cap=10**9, budget=3)
    assert len(clusters) <= 3
    placed = [r["page"] for c in clusters for r in c["rows"]]
    over = {o["page"]: o["reason"] for o in overflow}
    assert sorted(placed + list(over)) == sorted(r["page"] for r in rows)
    assert not set(placed) & set(over)
    assert over["c/k2.mdx"] and over["c/k3.mdx"]
    assert "c/k1.mdx" in placed
    assert all(o["reason"] for o in overflow)

def test_wave1_keyword_page_joins_family_by_source():
    sm = load("source_map")
    rows = [_row("c/k1.mdx", "MCO 1050.3 J", "keyword"), _row("c/p.mdx", "MCO 1050.3 J", "leave-1050-3j")]
    clusters, overflow = sm.build_wave1(rows, lambda r: 10, page_cap=40, token_cap=10**9, budget=10)
    assert [c["id"] for c in clusters] == ["leave-1050-3j"] and not overflow


def test_decorate_includes_non_primary_sources():
    sm = load("source_map")
    r = _row("c/a.mdx", "MCO 1001R.1L", "mcramm")
    r["sources"].append({"id": "MARADMIN 1/20", "file": "MARADMINS/m1.pdf", "date": "2020-02-02",
                         "amendments": [{"id": "MARADMIN 9/21", "date": "2021-01-01", "file": "MARADMINS/m9.pdf", "kind": "amends", "via": "direct"}]})
    d = sm.decorate({"id": "x", "family": "mcramm", "rows": [r], "pageTokens": 1}, [], [])
    got = {(f["file"], f["role"]) for f in d["sourceFiles"]}
    assert got == {("MCO/MCO 1001R.1L.pdf", "baseDoc"), ("MARADMINS/m1.pdf", "companion"), ("MARADMINS/m9.pdf", "amendment")}
    assert [f["date"] for f in d["sourceFiles"]] == ["2021-01-01", "2020-02-02", "2020-01-01"]
    assert set(d["uncachedFiles"]) == {f["file"] for f in d["sourceFiles"]}

def test_run_clusters_places_every_page_once(tmp_path, monkeypatch):
    sm = load("source_map")
    rows = [_row(f"c/p{i}.mdx", "MCO 1001R.1L", "mcramm") for i in range(3)]
    rows += [_row(f"c/o{i}.mdx", "MCO 9999", "keyword") for i in range(2)]
    rows += [_row(f"c/w2{i}.mdx", "MCO 8888", wave=2) for i in range(6)]
    rows += [_row(f"c/w3{i}.mdx", "MCO 7777", wave=3) for i in range(6)]
    for name, data in (("SOURCE_MAP_JSON", rows), ("SUPERSEDED_JSON", []), ("CONTRADICTIONS_JSON", [])):
        f = tmp_path / (name + ".json"); f.write_text(__import__("json").dumps(data))
        monkeypatch.setattr(sm, name, f)
    monkeypatch.setattr(sm, "CLUSTERS_OUT", tmp_path / "out.json")
    monkeypatch.setattr(sm, "REPO", tmp_path)
    sm.run_clusters()
    w = __import__("json").loads((tmp_path / "out.json").read_text())["waves"]
    pages = [p["page"] for v in w.values() for c in v["clusters"] for p in c["pages"]]
    assert len(pages) == len(set(pages)) == len(rows)
    homes = {p["page"]: c["id"] for c in w["2"]["clusters"] for p in c["pages"]}
    assert all(o["movedTo"] == homes[o["page"]] for o in w["1"]["overflow"]) and len(w["1"]["overflow"]) == 2
