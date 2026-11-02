#!/bin/bash
# Restart-proof launcher for the social render jobs: removes half-written videos, then (re)starts the workers.
# Finished outputs are skipped by run.py, so this can be run again after any container restart.
R=/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18
P=$R/venv/bin/python
cd "$(dirname "$0")"
find $R/out/reels -name '*.mp4' 2>/dev/null | while read f; do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f" 2>/dev/null)
  [ -z "$d" ] && { echo "remove broken $f"; rm -f "$f"; }
done
rm -rf $R/work-1/frames $R/work-2/frames $R/work-3/frames
N=${N:-3}
for i in $(seq 1 $N); do
  (SOCIAL_WORK=$R/work-$i nohup nice -n 5 sh -c "$P run.py clean --part $i/$N; $P run.py dynamic --part $i/$N; $P run.py services --part $i/$N; $P run.py calm --part $i/$N; $P run.py m7 --part $i/$N" > $R/worker-$i.out 2>&1 &)
done
pgrep -f 'pusher\.s[h]' >/dev/null || (nohup $R/pusher.sh > /dev/null 2>&1 &)
echo "started $N workers (+ pusher)"
