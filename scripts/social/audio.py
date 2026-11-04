"""Original, synthesised music and sound design for M7 reels (no samples, no licences).

style: "clean" (soft pulse, pad, plucks), "dynamic" (four-on-the-floor, bass, risers, hits),
       "calm" (pad + slow bells, no drums). Cuts get a whoosh, the outro gets the M7 stinger
       (deep boom + shimmer + bell chord) on the moment the ring closes.
"""
import subprocess
import numpy as np
from scipy import signal

SR = 48000
rng0 = np.random.default_rng(7)

def mtof(m):
    return 440.0 * 2 ** ((m - 69) / 12)

PROGS = {
    # (root offsets relative to key, chord tones as semitone offsets from chord root)
    "dream": [(9, [0, 3, 7, 10, 14]), (5, [0, 4, 7, 11, 14]), (0, [0, 4, 7, 14]), (7, [0, 4, 7, 9])],   # vi IV I V
    "deep": [(2, [0, 3, 7, 10, 14]), (10, [0, 4, 7, 11]), (5, [0, 4, 7, 11, 14]), (0, [0, 4, 7, 14])],  # ii bVII IV I
    "lift": [(0, [0, 4, 7, 11, 14]), (9, [0, 3, 7, 10]), (5, [0, 4, 7, 11, 14]), (7, [0, 5, 7, 10])],   # I vi IV Vsus
}


def env_adsr(n, a, d, s, r, sr=SR):
    a, d, r = int(a * sr), int(d * sr), int(r * sr)
    e = np.ones(n) * s
    a = min(a, n); e[:a] = np.linspace(0, 1, a, endpoint=False) if a else e[:a]
    d2 = min(d, max(0, n - a)); e[a:a + d2] = np.linspace(1, s, d2, endpoint=False) if d2 else e[a:a + d2]
    if r and n > r:
        e[-r:] *= np.linspace(1, 0, r)
    return e


def lowpass(x, fc, order=2):
    sos = signal.butter(order, min(fc, SR * 0.45), "low", fs=SR, output="sos")
    return signal.sosfilt(sos, x, axis=-1)


def highpass(x, fc, order=2):
    sos = signal.butter(order, fc, "high", fs=SR, output="sos")
    return signal.sosfilt(sos, x, axis=-1)


def bandpass(x, lo, hi, order=2):
    sos = signal.butter(order, [lo, min(hi, SR * 0.45)], "band", fs=SR, output="sos")
    return signal.sosfilt(sos, x, axis=-1)


def saw(f, n, phase=0.0):
    t = np.arange(n) / SR
    return 2 * np.mod(f * t + phase, 1.0) - 1


def reverb_ir(sec=2.4, damp=3500, seed=3):
    r = np.random.default_rng(seed)
    n = int(sec * SR)
    t = np.arange(n) / SR
    decay = np.exp(-t * 6.9 / sec)
    ir = np.stack([r.standard_normal(n), r.standard_normal(n)]) * decay
    ir = lowpass(ir, damp, 1)
    ir[:, : int(0.012 * SR)] *= np.linspace(0, 1, int(0.012 * SR))
    return ir / np.sqrt((ir ** 2).sum(axis=1, keepdims=True))


IR_BIG = None
IR_ROOM = None


def verb(x, mix=0.3, big=True):
    global IR_BIG, IR_ROOM
    if IR_BIG is None:
        IR_BIG = reverb_ir(2.8, 4200, 3)
        IR_ROOM = reverb_ir(0.9, 6000, 5)
    ir = IR_BIG if big else IR_ROOM
    if x.ndim == 1:
        x = np.stack([x, x])
    wet = np.stack([signal.fftconvolve(x[0], ir[0])[: x.shape[1]], signal.fftconvolve(x[1], ir[1])[: x.shape[1]]])
    return x * (1 - mix * 0.5) + wet * mix


def pan(x, p):
    p = (p + 1) / 2
    return np.stack([x * np.cos(p * np.pi / 2), x * np.sin(p * np.pi / 2)])


def place(buf, x, t, gain=1.0):
    i = int(t * SR)
    if i >= buf.shape[1]:
        return
    if x.ndim == 1:
        x = np.stack([x, x])
    m = min(x.shape[1], buf.shape[1] - max(0, i))
    if i < 0:
        x = x[:, -i:]; m = min(x.shape[1], buf.shape[1]); i = 0
    buf[:, i:i + m] += x[:, :m] * gain


# ---------- instruments ----------
def pad_chord(notes, dur, bright=1800, detune=0.12, seed=0):
    n = int(dur * SR)
    r = np.random.default_rng(seed)
    out = np.zeros((2, n))
    for k, m in enumerate(notes):
        f = mtof(m)
        for v in range(3):
            cents = (v - 1) * detune * 100 / 12
            ff = f * 2 ** (cents / 1200 * 12)
            w = saw(ff, n, r.random()) * 0.5 + saw(ff * 1.002, n, r.random()) * 0.3
            out += pan(w, (v - 1) * 0.6 + (k % 2 - 0.5) * 0.3) / len(notes)
    lfo = 0.5 + 0.5 * np.sin(np.arange(n) / SR * 2 * np.pi * 0.11)
    out = lowpass(out, bright, 2) * (0.75 + 0.25 * lfo)
    out *= env_adsr(n, min(0.8, dur * 0.3), 0.5, 0.85, min(0.8, dur * 0.3))
    return out


def fm_bell(f, dur=1.4, ratio=3.5, index=2.6, decay=2.2):
    n = int(dur * SR)
    t = np.arange(n) / SR
    idx = index * np.exp(-t * 4)
    x = np.sin(2 * np.pi * f * t + idx * np.sin(2 * np.pi * f * ratio * t))
    return x * np.exp(-t * decay) * np.minimum(1, t / 0.004)


def pluck(f, dur=0.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = saw(f, n) * 0.6 + np.sin(2 * np.pi * f * t) * 0.6
    x = lowpass(x, 2600, 2)
    return x * np.exp(-t * 7) * np.minimum(1, t / 0.003)


def kick(punch=1.0):
    n = int(0.5 * SR)
    t = np.arange(n) / SR
    f = 46 + 110 * np.exp(-t * 32)
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = np.sin(ph) * np.exp(-t * 6.5) * punch
    click = highpass(rng0.standard_normal(n), 3000) * np.exp(-t * 400) * 0.25
    return np.tanh((x + click) * 1.6) * 0.9


def clap():
    n = int(0.35 * SR)
    t = np.arange(n) / SR
    nz = bandpass(rng0.standard_normal(n), 900, 3500)
    e = np.zeros(n)
    for k, o in enumerate([0, 0.011, 0.022]):
        i = int(o * SR)
        e[i:] += np.exp(-(t[: n - i]) * 90) * (0.7 if k < 2 else 1.0)
    e += np.exp(-t * 14) * 0.25
    return nz * e * 0.8


def hat(open_=False):
    n = int((0.25 if open_ else 0.06) * SR)
    t = np.arange(n) / SR
    x = highpass(rng0.standard_normal(n), 7500, 2)
    return x * np.exp(-t * (14 if open_ else 70)) * 0.35


def sub(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    # plucky bass: sine + soft second harmonic + a little filtered saw for presence on phones
    x = np.sin(2 * np.pi * f * t) + 0.25 * np.sin(4 * np.pi * f * t) + 0.18 * lowpass(saw(f * 2, n), 900, 2)
    e = np.exp(-t * 3.2) * np.minimum(1, t / 0.006)
    r = min(int(0.04 * SR), n)
    e[-r:] *= np.linspace(1, 0, r)
    return x * e


def whoosh(dur=0.7, strength=1.0, seed=1):
    r = np.random.default_rng(seed)
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    nz = r.standard_normal(n)
    out = np.zeros(n)
    bands = [(200, 600), (600, 1500), (1500, 4000), (4000, 9000)]
    for k, (lo, hi) in enumerate(bands):
        c = 0.35 + k * 0.12
        e = np.exp(-((t - c) / 0.18) ** 2)
        out += bandpass(nz, lo, hi) * e * (1.0 - k * 0.12)
    out = out / (np.abs(out).max() + 1e-9) * 0.5 * strength
    pp = np.linspace(-0.6, 0.6, n)
    return np.stack([out * np.cos((pp + 1) * np.pi / 4), out * np.sin((pp + 1) * np.pi / 4)])


def riser(dur=1.6, seed=2):
    r = np.random.default_rng(seed)
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    nz = highpass(r.standard_normal(n), 1200)
    f = 300 * 2 ** (t * 3)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.15
    e = t ** 2.2
    return (nz * 0.25 + tone) * e


def boom(dur=2.4):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = 32 + 40 * np.exp(-t * 6)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 1.6)
    nz = lowpass(rng0.standard_normal(n), 400) * np.exp(-t * 9) * 0.6
    return np.tanh((x + nz) * 1.3) * 0.9


def sparkle(dur=1.6, density=26, seed=4, lo=72, hi=96, scale=(0, 2, 4, 7, 9)):
    r = np.random.default_rng(seed)
    n = int(dur * SR)
    out = np.zeros((2, n))
    for _ in range(int(density * dur)):
        o = r.integers(lo // 12, hi // 12 + 1) * 12
        m = o + scale[r.integers(0, len(scale))]
        m = min(max(m, lo), hi)
        x = fm_bell(mtof(m), 0.7, ratio=2.0, index=1.2, decay=6) * (0.12 + 0.1 * r.random())
        place(out, pan(x, r.uniform(-0.9, 0.9)), r.uniform(0, dur * 0.85))
    return out * np.linspace(0.3, 1, n)


# ---------- songs ----------
def song(duration, style="clean", cuts=(), outro=None, hits=(), seed=1, key=None, bpm=None):
    """Return a stereo float array. cuts: times of shot changes (whoosh); outro: start of the M7 outro;
    hits: times of punchline words (dynamic)."""
    r = np.random.default_rng(seed)
    key = key if key is not None else int(r.choice([45, 48, 50, 41, 43]))  # A2, C3, D3, F2, G2
    prog = PROGS[r.choice(list(PROGS))] if style != "calm" else PROGS["dream"]
    bpm = bpm or {"clean": 100, "dynamic": 124, "calm": 76}[style]
    beat = 60 / bpm
    bar = beat * 4
    n = int((duration + 0.5) * SR)
    mix = {k: np.zeros((2, n)) for k in ("pad", "bass", "drums", "fx", "bells", "stinger")}
    # chords: 1 bar each (dynamic), 2 bars (clean/calm)
    chord_len = bar * (1 if style == "dynamic" else 2)
    t = 0.0
    ci = 0
    end_music = (outro + 0.9) if outro else duration
    while t < end_music:
        root, tones = prog[ci % len(prog)]
        rootm = key + 12 + root
        notes = [rootm + x for x in tones]
        notes = [m if m < key + 31 else m - 12 for m in notes]
        dur = min(chord_len, end_music - t) + 0.6
        place(mix["pad"], pad_chord(notes, dur + 0.8, bright=1700 if style == "calm" else 2800, seed=ci + seed), t - 0.4, {"calm": 0.2, "clean": 0.26, "dynamic": 0.4}[style])
        if style == "calm":
            # warm, soft root under the pad
            place(mix["bass"], pad_chord([key + root - (12 if key + root > 52 else 0)], dur, bright=300, seed=ci), t, 0.22)
        if style != "calm":
            # bass on the beat (clean: half notes)
            step = beat if style == "dynamic" else beat * 2
            bt = t
            while bt < t + chord_len - 1e-6 and bt < end_music:
                place(mix["bass"], pan(sub(mtof(key + root - (12 if key + root > 52 else 0)), step * 0.92), 0), bt, 0.2 if style == "clean" else 0.15)
                bt += step
        # bells / plucks arpeggio
        arp = [rootm + 12 + x for x in tones[:4]]
        stepa = beat / (2 if style == "dynamic" else 1)
        at = t
        k = 0
        while at < t + chord_len - 1e-6 and at < end_music:
            m = arp[[0, 2, 1, 3, 2, 1][k % 6] % len(arp)]
            if style == "calm":
                if k % 2 == 0:
                    place(mix["bells"], pan(fm_bell(mtof(m), 2.2, ratio=2.0, index=1.0, decay=1.4), r.uniform(-0.5, 0.5)), at, 0.22)
            else:
                place(mix["bells"], pan(pluck(mtof(m), 0.5) if style == "dynamic" else fm_bell(mtof(m), 1.0, 3.0, 1.5, 3.2), (-0.4 if k % 2 else 0.4)), at, 0.3 if style == "dynamic" else 0.1)
            at += stepa
            k += 1
        t += chord_len
        ci += 1
    # drums
    if style in ("clean", "dynamic"):
        bt = 0.0
        i = 0
        intro = bar if style == "dynamic" else bar * 2
        while bt < (outro or duration):
            if style == "dynamic":
                if bt >= intro * 0.5:
                    place(mix["drums"], kick(), bt, 0.5)
                if i % 4 in (1, 3):
                    place(mix["drums"], clap(), bt, 0.6)
                place(mix["drums"], pan(hat(), 0.3), bt + beat / 2, 0.85)
                if i % 2 == 1:
                    place(mix["drums"], pan(hat(), -0.3), bt + beat * 0.75, 0.25)
            else:
                if bt >= intro:
                    place(mix["drums"], kick(0.7), bt, 0.42 if i % 2 == 0 else 0.0)
                place(mix["drums"], pan(hat(), 0.25), bt + beat / 2, 0.3)
                if i % 4 == 3:
                    place(mix["drums"], pan(hat(True), -0.2), bt + beat / 2, 0.18)
            bt += beat
            i += 1
        # sidechain pump on pad + bass
        env = np.ones(n)
        bt = 0.0
        while bt < duration:
            i0 = int(bt * SR)
            L = int(beat * SR * 0.9)
            seg = 1 - 0.55 * np.exp(-np.arange(L) / SR * 9)
            env[i0:i0 + L] = np.minimum(env[i0:i0 + L], seg[: max(0, min(L, n - i0))])
            bt += beat
        if style == "dynamic":
            mix["pad"] *= env
            mix["bass"] *= env
        else:
            mix["pad"] *= 1 - (1 - env) * 0.4
    # transitions
    for k, c in enumerate(cuts):
        place(mix["fx"], whoosh(0.8, 0.9 if style != "calm" else 0.45, seed + k), c - 0.4, 0.55)
    for k, h in enumerate(hits):
        place(mix["fx"], pan(fm_bell(mtof(key + 36 + [0, 7, 12, 4][k % 4]), 1.0, 2.0, 2.0, 4), 0), h, 0.12)
        if style == "dynamic":
            place(mix["drums"], clap(), h, 0.2)
    # intro sparkle (magic)
    place(mix["fx"], sparkle(1.4, 22, seed), 0.0, 0.5 if style != "dynamic" else 0.35)
    # outro: riser → boom on the ring → shimmer + bell chord
    if outro is not None:
        hit = outro + 0.95  # ring closing in the outro animation
        place(mix["fx"], riser(1.5, seed), hit - 1.5, 0.22 if style != "calm" else 0.12)
        place(mix["stinger"], boom(2.6), hit, 0.9 if style != "calm" else 0.6)
        chord = [key + 24, key + 31, key + 36, key + 40, key + 43]
        for j, m in enumerate(chord):
            place(mix["stinger"], pan(fm_bell(mtof(m), 3.0, 2.0, 1.6, 1.1), (j - 2) * 0.3), hit + j * 0.035, 0.12)
        place(mix["stinger"], sparkle(1.6, 30, seed + 9, lo=79, hi=100), hit + 0.7, 0.6)  # sheen
        # duck the music under the stinger, then let it ring out
        fade = np.ones(n)
        i0 = int(hit * SR)
        if i0 < n:
            fade[i0:] = np.maximum(0.0, 1 - (np.arange(n - i0) / SR) / 1.4) * 0.55
        for kk in ("pad", "bass", "drums", "bells"):
            mix[kk] *= fade
    # mix
    out = (verb(mix["pad"], 0.35) * 0.9 + mix["bass"] * 0.9 + verb(mix["drums"], 0.08, big=False) +
           verb(mix["bells"], 0.45) + verb(mix["fx"], 0.35) + verb(mix["stinger"], 0.55))
    out = highpass(out, 28, 2)
    # master fade in/out
    fi = int(0.05 * SR)
    out[:, :fi] *= np.linspace(0, 1, fi)
    fo = int(0.6 * SR)
    m = int(duration * SR)
    out = out[:, :m]
    out[:, -fo:] *= np.linspace(1, 0, fo) ** 2
    # gentle bus glue: soft knee instead of hard squashing
    out = np.tanh(out * 0.9) / 0.9
    out /= np.abs(out).max() + 1e-9
    return out * 0.89


def write(path, x, lufs=-14):
    raw = str(path) + ".raw.wav"
    from scipy.io import wavfile
    wavfile.write(raw, SR, (x.T * 32767).astype(np.int16))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-af", f"loudnorm=I={lufs}:TP=-1.0:LRA=9", "-ar", str(SR), str(path)], check=True)
    import os
    os.remove(raw)
    return path
