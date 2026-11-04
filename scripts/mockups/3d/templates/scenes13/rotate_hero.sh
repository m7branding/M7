#!/bin/bash
# Rotate a rendered hero loop so frame 0 sits in the middle of shot 1 (clear of any dissolve); new posters from that frame.
# usage: rotate_hero.sh <case dir with r-hero.mp4 / r-hero-m.mp4>
d=$1; K=${K:-40}
cd "$d" || exit 1
F="[0:v]split[a][b];[a]trim=start_frame=$K,setpts=PTS-STARTPTS[a1];[b]trim=end_frame=$K,setpts=PTS-STARTPTS[b1];[a1][b1]concat=n=2:v=1[out]"
for pair in "r-hero:25:1782579" "r-hero-m:26:943718"; do
  n=${pair%%:*}; rest=${pair#*:}; crf=${rest%%:*}; budget=${rest#*:}
  [ -f $n.mp4 ] || continue
  [ -f .$n.orig.mp4 ] || cp $n.mp4 .$n.orig.mp4
  ffmpeg -y -loglevel error -i .$n.orig.mp4 -vf "select=eq(n\,$K)" -frames:v 1 .$n.poster.png
  for c in $crf $((crf+1)) $((crf+2)) $((crf+3)) $((crf+4)); do
    ffmpeg -y -loglevel error -i .$n.orig.mp4 -filter_complex "$F" -map "[out]" -c:v libx264 -preset slow -crf $c -g 480 -bf 3 \
      -x264-params aq-mode=3 -pix_fmt yuv420p -movflags +faststart -an .$n.new.mp4
    [ $(stat -c%s .$n.new.mp4) -le $budget ] && break
  done
  mv .$n.new.mp4 $n.mp4
  python3 -c "from PIL import Image; Image.open('.$n.poster.png').convert('RGB').save('$n.webp', quality=82, method=6)"
  rm -f .$n.poster.png
  echo "$(basename $d) $n crf$c $(stat -c%s $n.mp4)"
done
