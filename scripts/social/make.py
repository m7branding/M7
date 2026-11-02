"""Render a reel (spec + meta) with matching audio."""
import sys
from pathlib import Path
import audio, lib


def reel(spec, meta, out: Path, seed=1, key=None):
    wav = lib.WORK / "audio" / (out.stem + ".wav")
    wav.parent.mkdir(parents=True, exist_ok=True)
    x = audio.song(spec["duration"], meta["style"], cuts=meta.get("cuts", []), outro=meta.get("outro"), hits=meta.get("hits", []), seed=seed, key=key)
    audio.write(wav, x)
    lib.render(spec, out, audio=wav)
    wav.unlink(missing_ok=True)
    return out
