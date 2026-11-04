#!/bin/bash
# Round 20: restart-proof launcher for the clean reels. Removes half-written videos, then starts N workers and a pusher
# that moves finished reels to the private delivery repo (m7-assets-inbox, branch social-pack) every 10 minutes.
# Finished and pushed reels are skipped, so this can simply be run again after a container restart.
S=/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad
R=$S/r20
P=$S/r18/venv/bin/python
cd "$(dirname "$0")"
find $R/out/reels-v2 -name '*.tmp.mp4' -delete 2>/dev/null
N=${N:-3}
for i in $(seq 1 $N); do
  (SOCIAL_WORK=$R/work-$i nohup nice -n 5 $P clean20.py reels --part $i/$N > $R/worker-$i.out 2>&1 &)
done
# pusher: tracked by pid file (a pgrep pattern can match the very shell that runs this script)
if ! { [ -f $R/pusher.pid ] && kill -0 "$(cat $R/pusher.pid)" 2>/dev/null; }; then
  nohup bash ./push20.sh > /dev/null 2>&1 &
  echo $! > $R/pusher.pid
fi
echo "started $N workers (+ pusher)"
