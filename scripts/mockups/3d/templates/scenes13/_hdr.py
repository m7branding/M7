import sys, os, math
_here = os.path.dirname(os.path.abspath(__file__))
for _lib in (os.path.join(os.path.dirname(_here), 'lib'), os.path.join(os.path.dirname(os.path.dirname(_here)), 'r12', 'lib')):
    if os.path.exists(os.path.join(_lib, 'scenekit.py')):
        sys.path.insert(0, _lib); break
import bpy
import scenekit as SK
import tmpl as T
R = SK.R
from mathutils import Vector
MM = 0.001
