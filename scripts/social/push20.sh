#!/bin/bash
# Pushes finished round-20 reels (not the .tmp.mp4 still being written) every 10 minutes, until $R/STOP-PUSHER exists.
S=/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad
R=$S/r20
cd "$(dirname "$0")"
while [ ! -f $R/STOP-PUSHER ]; do
  files=$(cd $R/out && find reels-v2 -name '*.mp4' ! -name '*.tmp.mp4' -mmin +1 2>/dev/null | sort)
  if [ -n "$files" ]; then
    SOCIAL_OUT=$R/out $S/r18/venv/bin/python push_batch.py $files --msg "Add clean round-20 reels" >> $R/pusher.log 2>&1
  fi
  sleep 600
done
