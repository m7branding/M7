#!/bin/bash
# Render templates at full quality, one after another. usage: ./run_tpl.sh t1_gravity t3_plinth ...
cd "$(dirname "$0")"
PY=${R3D_PY:-../../r11/venv/bin/python}; [ -x "$PY" ] || PY=../../venv/bin/python
for s in "$@"; do
  t0=$(date +%s); echo "== $s start $(date +%H:%M:%S)"
  R12_PV=0 $PY "$s.py" 2>&1 | grep --line-buffered -E "\[tmpl\]|Error|Traceback|line [0-9]"
  echo "== $s done in $(( $(date +%s) - t0 ))s"
done
echo "TPL DONE"
