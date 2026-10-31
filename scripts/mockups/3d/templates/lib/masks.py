"""Display masks per device type (white = lit display, black = bezel / island / notch), from r11 screens.py."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); R12 = os.path.dirname(HERE)
_R3D = os.environ.get('R3D_ROOT') or (os.path.join(os.path.dirname(R12), 'r11') if os.path.isdir(os.path.join(os.path.dirname(R12), 'r11')) else os.path.dirname(R12))
sys.path.insert(0, os.path.join(_R3D, 'scenes'))
import screens as SC
from PIL import Image
from lib.spec import IPHONE17PRO, MBP14, STUDIO, IPADPRO13
OUT = os.path.join(R12, 'masks'); os.makedirs(OUT, exist_ok=True)
for name, fn, px in [('iphone', SC.iphone_glass, IPHONE17PRO['px']), ('mac', SC.mac_glass, MBP14['px']),
                     ('ipad', SC.ipad_glass, IPADPRO13['px']), ('studio', SC.studio_glass, STUDIO['px'])]:
    tex = fn(Image.new('RGB', px, (255, 255, 255)))
    tex.split()[3].save(os.path.join(OUT, f'mask-{name}.png')); print(name, tex.size)
