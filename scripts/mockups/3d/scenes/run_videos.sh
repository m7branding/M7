#!/bin/bash
# Render both hero videos (resumable: existing frames are skipped). usage: ./run_videos.sh [v_a_desk v_b_card]
cd "$(dirname "$0")"
for v in ${@:-v_a_desk v_b_card}; do
  t0=$(date +%s); echo "== $v start $(date +%H:%M:%S)"
  R11_Q=final ../venv/bin/python "$v.py" 2>&1 | grep -E "\[anim\]|Error|Traceback|line [0-9]"
  echo "== $v done in $(( $(date +%s) - t0 ))s"
done
echo "VIDEOS DONE"
