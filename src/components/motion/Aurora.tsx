"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Levende, 'ademende' achtergrondkunst (WebGL).
 * De gelaagde, gladde plooien van ai-waves (per palet vooraf herkleurd, zie
 * AURORA_IMAGES) als textuur, met heel langzame, laagfrequente beweging:
 * de lagen zwellen en zakken als een ademhaling, het licht drijft er traag
 * overheen en de 'camera' zoomt rustig in en uit. Geen ruis, geen aders.
 * Pauzeert buiten beeld; zonder WebGL of bij reduced motion blijft het
 * stilstaande beeld staan (dat is meteen de fallback, dus geen sprong).
 */

export const AURORA_PALETTES = {
  violet: ["#12002e", "#4a12c9", "#9b5cff"],
  teal: ["#00100f", "#08665e", "#3affff"],
  emerald: ["#001006", "#0a6a2a", "#33ff77"],
  sunset: ["#1a0600", "#a3360a", "#ffbe3a"],
  night: ["#020309", "#141a3a", "#3a5bff"],
  brand: ["#000a0a", "#0b4f55", "#2bffc0"],
} as const;
export type AuroraPalette = keyof typeof AURORA_PALETTES;

/**
 * Het beeld per palet: ai-waves.webp is het origineel (paars); de andere zijn
 * daarvan afgeleid door de lichtheid op een kleurverloop van het palet te
 * leggen (zelfde vormen, zelfde licht). Ze dienen als textuur én als fallback.
 * Server-componenten kunnen dit object niet lezen (client-module): die geven
 * het pad zelf mee, /media/bg/ai-waves-<palet>.webp (violet: ai-waves.webp).
 * Opnieuw maken: scripts/aurora/recolor.py.
 */
export const AURORA_IMAGES: Record<AuroraPalette, string> = {
  violet: "/media/bg/ai-waves.webp",
  teal: "/media/bg/ai-waves-teal.webp",
  emerald: "/media/bg/ai-waves-emerald.webp",
  sunset: "/media/bg/ai-waves-sunset.webp",
  night: "/media/bg/ai-waves-night.webp",
  brand: "/media/bg/ai-waves-brand.webp",
};

const IMG = 1800; // ai-waves*.webp zijn 1800×1800

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D uTex;
uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;uniform float uInt;uniform float uSeed;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
  vec2 f=gl_FragCoord.xy/uRes;
  // 'cover' zoals background-size: cover, gecentreerd (beeld y loopt naar beneden)
  float ca=uRes.x/uRes.y;
  vec2 span=ca>1.?vec2(1.,1./ca):vec2(ca,1.);
  vec2 v=vec2(f.x-.5,.5-f.y)*span;
  float t=uTime;
  // camera: trage zoom en drift (zoals de oude pan van het stille beeld), heen en terug in ~52 s
  float ph=.5-.5*cos(t*.12);
  float z=1.06+.06*ph;
  vec2 m=(uMouse-.5)*vec2(.010,-.008);
  vec2 uv=v/z+vec2(.5)+vec2(.016,-.014)*ph+m;
  // ademen: de lagen zwellen en zakken rond het hart van de plooien (rechtsboven)
  vec2 C=vec2(.95,.05);
  vec2 d=uv-C;float r=length(d);float a=atan(d.y,d.x);
  vec2 n=d/max(r,1e-3);vec2 tg=vec2(-n.y,n.x);
  float fade=smoothstep(.02,.3,r);
  float dr=.0085*sin(r*7.5-t*.29+uSeed)*(.65+.35*sin(a*2.2+t*.11+uSeed*1.7))
          +.0045*sin(a*3.1+r*2.4+t*.19+uSeed*2.3);
  float dt=.0055*sin(r*5.2+t*.15+uSeed*.7);
  uv-=(n*dr+tg*dt)*fade;
  vec3 col=texture2D(uTex,uv).rgb;
  // licht dat traag over de plooien drijft: alleen de lichte delen gloeien iets op
  float lum=dot(col,vec3(.299,.587,.114));
  vec2 lp=vec2(.66+.2*sin(t*.071+uSeed),.42+.16*cos(t*.053+uSeed*1.3));
  vec2 dl=(uv-lp)*vec2(1.,1.3);
  float g=exp(-dot(dl,dl)*4.5);
  col*=1.+(.2*g-.06)*smoothstep(.08,.5,lum);
  col*=(.975+.025*sin(t*.31+uSeed))*uInt;
  col+=(h(gl_FragCoord.xy+fract(t*.37))-.5)/255.;
  gl_FragColor=vec4(col,1.);
}`;

export function Aurora({
  palette = "violet",
  intensity = 1,
  fallback,
  className,
}: {
  palette?: AuroraPalette;
  intensity?: number;
  /** Stilstaand beeld voor/zonder WebGL; standaard het beeld van het palet. */
  fallback?: string;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(false);
  // pas als het canvas helemaal is ingefaded verdwijnt het stille beeld (geen donkere dip)
  const [settled, setSettled] = useState(false);
  const src = AURORA_IMAGES[palette];

  useEffect(() => {
    setOn(false);
    setSettled(false);
    // reduced motion: het stille beeld is het eindbeeld, WebGL is dan overbodig
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = canvas.current! as HTMLCanvasElement & { __lose?: number };
    // React StrictMode (dev) draait dit effect twee keer op hetzelfde canvas:
    // het vrijgeven van de context gebeurt pas een tick later en wordt hier geannuleerd.
    window.clearTimeout(cv.__lose);
    const gl = cv.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) return;
    const sh = (type: number, s: string) => {
      const o = gl.createShader(type)!;
      gl.shaderSource(o, s);
      gl.compileShader(o);
      return o;
    };
    const vs = sh(gl.VERTEX_SHADER, VERT);
    const fs = sh(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (k: string) => gl.getUniformLocation(prog, k);
    gl.uniform1f(u("uInt"), intensity);
    gl.uniform1f(u("uSeed"), Math.random() * 6.283);
    gl.uniform1i(u("uTex"), 0);
    const uRes = u("uRes"),
      uTime = u("uTime"),
      uMouse = u("uMouse");

    const tex = gl.createTexture();
    let ready = false,
      dead = false,
      visible = false,
      raf = 0,
      last = 0,
      settleT = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      if (!wrap.current) return;
      // layout-maat (geen transform/scale-animatie van een ouder meegerekend)
      const r = { width: wrap.current.clientWidth, height: wrap.current.clientHeight };
      // niet scherper renderen dan het beeld zelf is (≈1800 px over de 'cover'-as)
      const cssPerTexel = (Math.max(r.width, r.height) / IMG) * 1.06;
      let s = Math.max(0.5, Math.min(dpr, 1.25 / Math.max(cssPerTexel, 1e-3)));
      const px = r.width * r.height * s * s;
      if (px > 2.4e6) s *= Math.sqrt(2.4e6 / px);
      cv.width = Math.max(2, Math.round(r.width * s));
      cv.height = Math.max(2, Math.round(r.height * s));
      gl.viewport(0, 0, cv.width, cv.height);
      gl.uniform2f(uRes, cv.width, cv.height);
      if (ready && !visible) draw(lastT);
    };

    let mx = 0.5,
      my = 0.5,
      tmx = 0.5,
      tmy = 0.5;
    const onMove = (e: PointerEvent) => {
      if (!wrap.current) return;
      const r = wrap.current.getBoundingClientRect();
      tmx = Math.min(1.2, Math.max(-0.2, (e.clientX - r.left) / r.width));
      tmy = Math.min(1.2, Math.max(-0.2, 1 - (e.clientY - r.top) / r.height));
    };

    // tijd begint bij 0 zodat het eerste beeld vrijwel gelijk is aan het stille beeld
    let clock = 0,
      lastT = 0;
    const draw = (t: number) => {
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < 1000 / 30) return; // traag en rustig: 30 fps is ruim genoeg
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      clock += dt;
      lastT = clock;
      mx += (tmx - mx) * 0.03;
      my += (tmy - my) * 0.03;
      draw(clock);
    };
    const run = () => {
      cancelAnimationFrame(raf);
      last = 0;
      if (visible && ready && !dead) raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      run();
    });

    const onLost = (e: Event) => {
      e.preventDefault();
      dead = true;
      cancelAnimationFrame(raf);
      setOn(false);
      setSettled(false);
    };
    cv.addEventListener("webglcontextlost", onLost);

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (dead) return;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      ready = true;
      resize();
      draw(0);
      setOn(true);
      settleT = window.setTimeout(() => setSettled(true), 1800);
      run();
    };
    img.onerror = () => {};
    img.src = src;

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap.current!);
    window.addEventListener("pointermove", onMove, { passive: true });
    io.observe(wrap.current!);

    return () => {
      dead = true;
      img.onload = null;
      cancelAnimationFrame(raf);
      window.clearTimeout(settleT);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      cv.removeEventListener("webglcontextlost", onLost);
      if (!gl.isContextLost()) {
        gl.deleteTexture(tex);
        gl.deleteBuffer(buf);
        gl.deleteProgram(prog);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
      cv.__lose = window.setTimeout(() => gl.getExtension("WEBGL_lose_context")?.loseContext(), 0);
    };
  }, [src, intensity]);

  const still = fallback ?? src;
  return (
    <div ref={wrap} className={`aurora${on ? " is-on" : ""}${className ? " " + className : ""}`} aria-hidden="true">
      {!settled && (
        <div
          className="aurora__fallback"
          style={{
            backgroundImage: `url(${still})`,
            ...(intensity !== 1 ? { filter: `brightness(${intensity})` } : null),
          }}
        />
      )}
      <canvas ref={canvas} style={{ position: "absolute", inset: 0, display: "block" }} />
    </div>
  );
}
