#!/bin/bash
# Full-quality render queue: ./run_q.sh scene1 scene2 ...  (each scene renders all its cameras)
cd "$(dirname "$0")"
for s in "$@"; do
  t0=$(date +%s); echo "== $s start $(date +%H:%M:%S)"
  R12_PV=0 ../../r11/venv/bin/python "$s.py" 2>&1 | grep --line-buffered -E "\[tmpl\]|Error|rror:|Traceback|line [0-9]"
  echo "== $s done in $(( $(date +%s) - t0 ))s"
done
echo "QUEUE DONE"
