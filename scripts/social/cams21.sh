#!/bin/bash
# Round 21: new camera angles (portrait 1440x2560) for the 3D scenes, so every project gets its own angles.
# One Blender render at a time (~2-3 min each); cameras that already have a final render are skipped.
S=/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad
PY=$S/r11/venv/bin/python
HERE="$(cd "$(dirname "$0")" && pwd)"
cd $S/r13/scenes
while read -r scene cam loc tgt lens rest; do
  [ -z "$scene" ] || [ "${scene:0:1}" = "#" ] && continue
  [ -f $S/r12/tpl/${scene}__${cam}/still_rgb.exr ] && { echo "skip ${scene}__${cam}"; continue; }
  t0=$(date +%s)
  $PY "$HERE/cam21.py" $scene $cam $loc $tgt $lens $rest 2>&1 | grep -E "\[tmpl\]|Error:|Traceback" | grep -v CUEW
  echo "done ${scene}__${cam} in $(( $(date +%s) - t0 ))s"
done <<'LIST'
d19_studio_front  q1 -0.85,-0.90,0.25  0,0,0.32       27
d19_studio_front  q2 -0.15,-1.15,0.10  0,0,0.34       25
d18_mac_profile   p  0.55,-0.55,0.12   0,0,0.09       28
d18_mac_profile   q1 -0.20,-0.75,0.30  0.02,0.02,0.08 30
d13_macro_mac     p  0.26,-0.24,0.14   0.06,0.06,0.12 26
d13_macro_mac     q1 -0.24,-0.20,0.06  -0.06,0.08,0.10 23
d05_phone_lean    p  0.18,-0.48,0.17   0,0,0.07       30
d04_phone_trio    p  0.12,-0.55,0.16   0,0,0.075      26
d07_phone_stone   p  0.20,-0.38,0.30   -0.02,0,0.03   30
d08_ipad_stand    p  0.36,-0.95,0.34   0,0,0.125      28
d08_ipad_stand    q1 -0.14,-0.78,0.17  0,0,0.13       26
d15_mac_phone_desk p -0.30,-0.95,0.38  -0.02,0.02,0.10 26
d15_mac_phone_desk q1 0.05,-0.58,0.72  0,0.05,0.05    26
d17_ipads_lean    p  0.15,-0.95,0.30   0,0.08,0.11    26
d17_ipads_lean    q1 0.60,-0.62,0.22   0,0.08,0.12    28
f01_mac_float     p  0.18,-1.05,0.42   0,0,0.15       25
f02_phone_float   p  0.12,-0.70,0.22   0,-0.03,0.13   28
f03_studio_float  p  0.15,-1.55,0.40   0.02,0,0.31    23
f04_ipad_float    q1 0.45,-0.62,0.24   0,0,0.12       28
d09_ipad_keyboard q1 0.55,-0.35,0.16   0,0.04,0.11    31
d02_mac_top       q1 -0.28,-0.62,0.55  0.03,0.04,0.06 26
d01_desk_studio   q1 -0.55,-0.85,0.32  -0.02,0.15,0.25 28
d11_ui_panels     q1 0.34,-0.45,0.28   0,0,0.115      27
LIST
echo "CAMS DONE"
