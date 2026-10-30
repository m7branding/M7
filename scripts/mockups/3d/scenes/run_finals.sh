#!/bin/bash
# Render final stills sequentially (R11_Q=final). usage: ./run_finals.sh s03_phone_card s02_macbook ...
cd "$(dirname "$0")"
for s in "$@"; do
  t0=$(date +%s)
  echo "== $s start $(date +%H:%M:%S)"
  R11_Q=final ../venv/bin/python "$s.py" 2>&1 | grep -E "rendered|Error|Traceback|line [0-9]"
  echo "== $s done in $(( $(date +%s) - t0 ))s"
done
echo "ALL DONE"
