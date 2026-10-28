"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Levende, 'ademende' achtergrondkunst (WebGL).
 * Zijdezachte, langzaam golvende banen in de merkkleuren die heel
 * subtiel op de muis reageren. Pauzeert buiten beeld en valt terug
 * op een statische afbeelding/gradient zonder WebGL of bij reduced motion.
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

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAG = `
precision mediump float;
uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;
uniform vec3 uC1;uniform vec3 uC2;uniform vec3 uC3;uniform float uInt;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<4;i++){v+=a*n(p);p=m*p;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;vec2 p=uv;p.x*=uRes.x/uRes.y;
  float t=uTime*.035;vec2 m=(uMouse-.5)*.35;
  vec2 q=vec2(fbm(p*1.1+t),fbm(p*1.1-t+3.1));
  vec2 r=vec2(fbm(p*1.4+q*1.7+m+vec2(1.7,9.2)+t*.7),fbm(p*1.4+q*1.7-m+vec2(8.3,2.8)-t*.5));
  float f=fbm(p+r*1.25);
  float band=sin((p.x*1.25+p.y*1.9+r.x*2.4+f*1.4)*3.14159-uTime*.12);
  float silk=smoothstep(-.35,1.,band);
  vec3 col=mix(uC1,uC2,clamp(f*1.35+.05,0.,1.));
  col=mix(col,uC3,silk*.55*(.6+.4*f));
  float hl=pow(1.-abs(band),7.)*.32;
  col+=hl*mix(uC3,vec3(1.),.35);
  float breath=.88+.12*sin(uTime*.32);
  float v=smoothstep(1.35,.15,length(uv-.5-m*.4));
  col*=mix(.5,1.,v)*breath*uInt;
  col+=(h(gl_FragCoord.xy+fract(uTime))-.5)/255.;
  gl_FragColor=vec4(col,1.);
}`;

const hex = (c: string) => {
  const v = parseInt(c.slice(1), 16);
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
};

export function Aurora({
  palette = "violet",
  intensity = 1,
  fallback,
  className,
}: {
  palette?: AuroraPalette;
  intensity?: number;
  /** Afbeelding als fallback (bv. /media/bg/ai-waves.webp). */
  fallback?: string;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cv = canvas.current! as HTMLCanvasElement & { __lose?: number };
    // React StrictMode (dev) draait dit effect twee keer op hetzelfde canvas:
    // het vrijgeven van de context gebeurt pas een tick later en wordt hier geannuleerd.
    window.clearTimeout(cv.__lose);
    const gl = cv.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) {
      setFailed(true);
      return;
    }
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (k: string) => gl.getUniformLocation(prog, k);
    const [c1, c2, c3] = AURORA_PALETTES[palette].map(hex);
    gl.uniform3fv(u("uC1"), c1);
    gl.uniform3fv(u("uC2"), c2);
    gl.uniform3fv(u("uC3"), c3);
    gl.uniform1f(u("uInt"), intensity);
    const uRes = u("uRes"),
      uTime = u("uTime"),
      uMouse = u("uMouse");

    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.55;
    const resize = () => {
      if (!wrap.current) return;
      const r = wrap.current.getBoundingClientRect();
      cv.width = Math.max(2, Math.round(r.width * scale));
      cv.height = Math.max(2, Math.round(r.height * scale));
      gl.viewport(0, 0, cv.width, cv.height);
      gl.uniform2f(uRes, cv.width, cv.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap.current!);

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
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = false,
      raf = 0,
      last = 0;
    const start = performance.now() - Math.random() * 20000;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < 1000 / 40) return; // ~40fps is ruim genoeg voor 'slow & premium'
      last = now;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const draw1 = () => {
      gl.uniform1f(uTime, 12.0);
      gl.uniform2f(uMouse, 0.5, 0.5);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(frame);
    });
    io.observe(wrap.current!);
    draw1();
    setOn(true);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      cv.__lose = window.setTimeout(() => gl.getExtension("WEBGL_lose_context")?.loseContext(), 0);
    };
  }, [palette, intensity]);

  return (
    <div ref={wrap} className={`aurora${on ? " is-on" : ""}${className ? " " + className : ""}`} aria-hidden="true">
      {(failed || !on) && (
        <div
          className="aurora__fallback"
          style={{
            backgroundImage: fallback
              ? `url(${fallback})`
              : `radial-gradient(80% 90% at 70% 30%, ${AURORA_PALETTES[palette][2]}55, transparent 60%), radial-gradient(90% 90% at 20% 80%, ${AURORA_PALETTES[palette][1]}, ${AURORA_PALETTES[palette][0]})`,
          }}
        />
      )}
      <canvas ref={canvas} />
    </div>
  );
}
