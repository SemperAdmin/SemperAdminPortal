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
