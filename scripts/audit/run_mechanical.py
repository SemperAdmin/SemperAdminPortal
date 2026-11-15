"""Run both mechanical checks. One entry so npm needs no shell chaining (PowerShell 5.1 safe).

Run: python -I scripts/audit/run_mechanical.py
"""
import importlib.util, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent


def _load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules.setdefault(name, mod)
    spec.loader.exec_module(mod)
    return mod


if __name__ == "__main__":
    code_s = _load("superseded_refs").main([])
    code_c = _load("contradictions").main()
    sys.exit(max(code_s, code_c))
