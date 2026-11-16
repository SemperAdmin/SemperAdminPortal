from pathlib import Path
import importlib.util, json

HERE = Path(__file__).parent


def load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


SOURCE_MAP = [
    {"page": "content/marines/annual-leave.mdx", "sources": [{"id": "MCO 1050.3 J", "ref": "MCO 1050.3J"}]},
    {"page": "content/leader/leave-coaching.mdx", "sources": [{"id": "MCO 1050.3J", "ref": "MCO P1050.3J"}]},
    {"page": "content/marines/bah.mdx", "sources": [{"id": "DODFMR Vol 7A", "ref": "DoD FMR Vol 7A"}]},
    {"page": "content/admin/no-sources.mdx", "sources": []},
]


def msg(mid="MARADMIN 600/26", date="2026-12-01"):
    return (mid, date, "MARADMINS/CY2026/x.pdf", (HERE / "fixtures" / "maradmin-amends.txt").read_text())


def test_message_maps_to_every_page_citing_the_document():
    im = load("new_message_impact")
    report = im.impact([msg()], SOURCE_MAP, since="2026-11-15", last_verified=lambda p: "2026-11-15")
    assert len(report) == 1
    pages = {p["page"] for p in report[0]["pages"]}
    assert pages == {"content/marines/annual-leave.mdx", "content/leader/leave-coaching.mdx"}
    assert report[0]["documents"] == ["MCO 1050.3J"]


def test_messages_on_or_before_since_are_ignored():
    im = load("new_message_impact")
    assert im.impact([msg(date="2026-11-15")], SOURCE_MAP, since="2026-11-15", last_verified=lambda p: "") == []


def test_stale_flag_when_last_verified_predates_message():
    im = load("new_message_impact")
    lv = {"content/marines/annual-leave.mdx": "2026-06-01", "content/leader/leave-coaching.mdx": "2026-12-02"}
    report = im.impact([msg()], SOURCE_MAP, since="2026-11-15", last_verified=lv.get)
    stale = {p["page"]: p["stale"] for p in report[0]["pages"]}
    assert stale == {"content/marines/annual-leave.mdx": True, "content/leader/leave-coaching.mdx": False}
    assert im.exit_code(report) == 1


def test_exit_zero_when_every_impacted_page_is_current():
    im = load("new_message_impact")
    report = im.impact([msg()], SOURCE_MAP, since="2026-11-15", last_verified=lambda p: "2026-12-05")
    assert im.exit_code(report) == 0
    assert im.exit_code([]) == 0


def test_since_reads_last_run_file(tmp_path):
    im = load("new_message_impact")
    f = tmp_path / "last-run.json"
    f.write_text(json.dumps({"date": "2026-11-15"}), encoding="utf-8")
    assert im.read_since(f) == "2026-11-15"


def test_families_collapse_navmc_and_pad_paa():
    im = load("new_message_impact")
    assert im.match_key("NAVMC 1200.1M") == im.match_key("NAVMC 1200.1L") == "NAVMC 1200.1"
    assert im.match_key("PAA 4-25") == im.match_key("PAA 04-25") == "PAA 04-25"
    assert im.match_key("MCO P1050.3J") == "MCO 1050.3"


def test_every_document_in_a_ref_counts():
    im = load("new_message_impact")
    assert im.match_keys("DoDI 1000.04, 3.1.b(1), MCO 1742.1C, par 4b(4)(a)") == ["DODI 1000.04", "MCO 1742.1"]


def test_dodi_change_hits_its_own_base():
    im = load("new_message_impact")
    sm = [{"page": "content/marines/leave.mdx", "sources": [{"ref": "DoDI 1327.06"}]}]
    m = ("DoDI 1327.06 CH 2", "2026-12-01", "DoDI/x.pdf", "This change updates paragraph 3.11.")
    report = im.impact([m], sm, since="2026-11-15", last_verified=lambda p: "2026-06-01")
    assert [p["page"] for p in report[0]["pages"]] == ["content/marines/leave.mdx"]
    assert report[0]["kinds"]["DODI 1327.06"] == "amends"


def test_record_date_is_newest_message_not_wall_clock():
    im = load("new_message_impact")
    idx = {"MCO 1050.3J": [{"id": "MARADMIN 600/26", "date": "2026-11-03", "kind": "amends"}]}
    assert im.record_date(idx, "2026-11-16") == "2026-11-03"
    assert im.record_date({}, "2026-11-16") == "2026-11-16"


def test_bad_since_is_rejected():
    im = load("new_message_impact")
    import pytest
    with pytest.raises(ValueError):
        im.parse_since("11/15/2026")
    assert im.parse_since("2026-11-15") == "2026-11-15"


def test_undated_entries_listed():
    im = load("new_message_impact")
    idx = {"MCO 1050.3J": [{"id": "ALNAV 090/26", "date": "", "file": "ALNAVS/x.pdf", "kind": "amends"}]}
    assert im.undated_entries(idx) == [{"message": "ALNAV 090/26", "file": "ALNAVS/x.pdf"}]
