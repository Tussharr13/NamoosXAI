import { useEffect, useRef, useState } from 'react';
import { getDevicePixelRatio } from '../utils/deviceDetection';

type SiriOrbProps = {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
  animSpeed?: number;
  className?: string;
};

export default function SiriOrb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
  animSpeed = 1.0,
  className = ''
}: SiriOrbProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);

  const vert = `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = `
    precision highp float;
    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    uniform float animSpeed;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c){
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y,i,q);
    }
    vec3 yiq2rgb(vec3 c){
      float r = c.x + 0.956*c.y + 0.621*c.z;
      float g = c.x - 0.272*c.y - 0.647*c.z;
      float b = c.x - 1.106*c.y + 1.703*c.z;
      return vec3(r,g,b);
    }
    vec3 adjustHue(vec3 color,float hueDeg){
      float a=hueDeg*3.14159265/180.0; vec3 y=rgb2yiq(color); float ca=cos(a); float sa=sin(a);
      float i=y.y*ca - y.z*sa; float q=y.y*sa + y.z*ca; y.y=i; y.z=q; return yiq2rgb(y);
    }
    vec3 hash33(vec3 p3){ p3=fract(p3*vec3(0.1031,0.11369,0.13787)); p3+=dot(p3,p3.yxz+19.19); return -1.0+2.0*fract(vec3(p3.x+p3.y,p3.x+p3.z,p3.y+p3.z)*p3.zyx);} 
    float snoise3(vec3 p){ const float K1=0.333333333; const float K2=0.166666667; vec3 i=floor(p+(p.x+p.y+p.z)*K1); vec3 d0=p-(i-(i.x+i.y+i.z)*K2); vec3 e=step(vec3(0.0), d0-d0.yzx); vec3 i1=e*(1.0-e.zxy); vec3 i2=1.0-e.zxy*(1.0-e); vec3 d1=d0-(i1-K2); vec3 d2=d0-(i2-K1); vec3 d3=d0-0.5; vec4 h=max(0.6-vec4(dot(d0,d0),dot(d1,d1),dot(d2,d2),dot(d3,d3)),0.0); vec4 n=h*h*h*h*vec4(dot(d0,hash33(i)),dot(d1,hash33(i+i1)),dot(d2,hash33(i+i2)),dot(d3,hash33(i+1.0))); return dot(vec4(31.316),n);} 
    vec4 extractAlpha(vec3 c){ float a=max(max(c.r,c.g),c.b); return vec4(c/(a+1e-5),a);} 

    const vec3 baseColor1=vec3(0.611765,0.262745,0.996078);
    const vec3 baseColor2=vec3(0.298039,0.760784,0.913725);
    const vec3 baseColor3=vec3(0.062745,0.078431,0.600000);
    const float innerRadius=0.6; const float noiseScale=0.65;

    vec4 drawWaves(vec2 uv){
      vec3 c1=adjustHue(baseColor1,hue); vec3 c2=adjustHue(baseColor2,hue); vec3 c3=adjustHue(baseColor3,hue);
      float warp=snoise3(vec3(uv*0.5,iTime*0.6*animSpeed))*0.15; uv.x+=warp; uv.y+=warp*0.5;
      float w1=sin(uv.x*2.0+iTime*10.0*animSpeed)*0.3; float w2=sin(uv.x*1.5-iTime*1.2*animSpeed+10.0)*0.35; float w3=sin(uv.x*2.5+iTime*0.8*animSpeed+10.0)*0.32; float w4=sin(uv.x*1.8+iTime*1.4*animSpeed+10.0)*0.28; float w5=sin(uv.x*2.2-iTime*1.0*animSpeed+10.0)*0.33;
      w1+=snoise3(vec3(uv.x*2.0,uv.y,iTime*1.0*animSpeed))*0.12; w2+=snoise3(vec3(uv.x*1.8,uv.y+1.0,iTime*0.8*animSpeed))*0.15; w3+=snoise3(vec3(uv.x*2.2,uv.y+2.0,iTime*1.2*animSpeed))*0.13; w4+=snoise3(vec3(uv.x*1.9,uv.y+3.0,iTime*0.9*animSpeed))*0.14; w5+=snoise3(vec3(uv.x*2.1,uv.y+4.0,iTime*1.1*animSpeed))*0.11;
      float b1=exp(-abs(uv.y-w1)*8.0)*1.2; float b2=exp(-abs(uv.y-w2)*7.0)*1.1; float b3=exp(-abs(uv.y-w3)*8.5)*1.15; float b4=exp(-abs(uv.y-w4)*7.5)*1.0; float b5=exp(-abs(uv.y-w5)*8.2)*1.05;
      vec3 col=c1*b1 + c2*b2 + mix(c1,c3,0.5)*b3 + mix(c2,c1,0.6)*b4 + mix(c3,c2,0.4)*b5; float glow=(b1+b2+b3+b4+b5)*0.35; col+=glow*mix(c2,c1,0.5); float edge=smoothstep(1.0,0.3,length(uv)); col*=edge; col=clamp(col,0.0,1.0); return extractAlpha(col);
    }

    vec4 drawInnerOrb(vec2 uv){
      vec3 c1=adjustHue(baseColor1,hue); vec3 c2=adjustHue(baseColor2,hue); vec3 c3=adjustHue(baseColor3,hue);
      float len=length(uv); float ang=atan(uv.y,uv.x); float orbSize=0.5; float innerLen=len/orbSize; if(innerLen>1.2) return vec4(0.0);
      vec2 iuv=uv/orbSize; float invLen=innerLen>0.0?1.0/innerLen:0.0;
      float n0=snoise3(vec3(iuv*noiseScale*1.5,iTime*0.6*animSpeed))*0.5+0.5; float r0=mix(0.3,0.8,n0); float d0=distance(iuv,(r0*invLen)*iuv); float v0=1.8/(1.0+d0*12.0); v0*=smoothstep(r0*1.1,r0*0.95,innerLen);
      float a=iTime*1.5*animSpeed; vec2 pos=vec2(cos(a),sin(a))*r0*0.6; float d=distance(iuv,pos); float v1=3.5/(1.0+d*d*8.0); v1*=1.5/(1.0+d0*40.0);
      float cl=cos(ang - iTime*3.0*animSpeed)*0.5+0.5; vec3 col=mix(c2,c1,cl)*1.4; col=mix(c3*2.0,col,v0); col=col+v1*c2*1.5; float core=exp(-innerLen*2.5)*1.2; col+=c1*core; float edge=smoothstep(1.0,0.7,innerLen); col*=edge; col=clamp(col,0.0,1.0); return extractAlpha(col);
    }

    vec4 draw(vec2 uv, vec2 wuv){
      vec3 c1=adjustHue(baseColor1,hue); vec3 c2=adjustHue(baseColor2,hue); vec3 c3=adjustHue(baseColor3,hue);
      float ang=atan(uv.y,uv.x); float len=length(uv); float invLen=len>0.0?1.0/len:0.0; float n0=snoise3(vec3(uv*noiseScale,iTime*0.5*animSpeed))*0.5+0.5; float r0=mix(mix(innerRadius,1.0,0.4),mix(innerRadius,1.0,0.6),n0); float d0=distance(uv,(r0*invLen)*uv); float v0=1.0/(1.0+d0*10.0); v0*=smoothstep(r0*1.05,r0,len); float cl=cos(ang + iTime*2.0*animSpeed)*0.5+0.5; float a=iTime*-1.0*animSpeed; vec2 pos=vec2(cos(a),sin(a))*r0; float d=distance(uv,pos); float v1=1.5/(1.0+d*d*5.0); v1*=1.0/(1.0+d0*50.0); float v2=smoothstep(1.0,mix(innerRadius,1.0,n0*0.5),len); float v3=smoothstep(innerRadius,mix(innerRadius,1.0,0.5),len); vec3 col=mix(c1,c2,cl); col=mix(c3,col,v0); col=(col+v1)*v2*v3; vec4 waves=drawWaves(wuv*1.0); col=col*(1.0 - waves.a*0.85) + waves.rgb*waves.a*1.3; vec4 io=drawInnerOrb(uv); col=col*(1.0-io.a*0.9)+io.rgb*io.a; col=clamp(col,0.0,1.0); return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord){
      vec2 center=iResolution.xy*0.5; float size=min(iResolution.x,iResolution.y); vec2 uv=(fragCoord-center)/size*2.0; vec2 wuv=uv; wuv.x+=hover*hoverIntensity*0.1*sin(wuv.y*10.0+iTime*animSpeed); wuv.y+=hover*hoverIntensity*0.1*sin(wuv.x*10.0+iTime*animSpeed); float angle=rot; float s=sin(angle); float c=cos(angle); uv=vec2(c*uv.x - s*uv.y, s*uv.x + c*uv.y); uv.x+=hover*hoverIntensity*0.1*sin(uv.y*10.0+iTime*animSpeed); uv.y+=hover*hoverIntensity*0.1*sin(uv.x*10.0+iTime*animSpeed); return draw(uv,wuv); }

    void main(){ vec2 fragCoord=vUv*iResolution.xy; vec4 col=mainImage(fragCoord); gl_FragColor=vec4(col.rgb*col.a,col.a); }
  `;

  const [, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const canvas = document.createElement('canvas');
    // Hoisted refs for cleanup safety
    let gl!: WebGLRenderingContext;
    let resize: (() => void) | null = null;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleMouseLeave: (() => void) | null = null;
    let isAnimating = true;
    try {
      const opts = { alpha: true, premultipliedAlpha: false } as WebGLContextAttributes;
      const ctx = (canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts)) as WebGLRenderingContext | null;
      if (!ctx) return;
      gl = ctx;
      glRef.current = gl;
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(canvas);

      const vertShader = gl.createShader(gl.VERTEX_SHADER)!; gl.shaderSource(vertShader, vert); gl.compileShader(vertShader);
      if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) { return; }
      const fragShader = gl.createShader(gl.FRAGMENT_SHADER)!; gl.shaderSource(fragShader, frag); gl.compileShader(fragShader);
      if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) { return; }
      const program = gl.createProgram()!; gl.attachShader(program, vertShader); gl.attachShader(program, fragShader); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { return; }
      gl.useProgram(program);

      const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
      const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);

      const posBuffer = gl.createBuffer()!; gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer); gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      const posLoc = gl.getAttribLocation(program, 'position'); gl.enableVertexAttribArray(posLoc); gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      const uvBuffer = gl.createBuffer()!; gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer); gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
      const uvLoc = gl.getAttribLocation(program, 'uv'); gl.enableVertexAttribArray(uvLoc); gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

      const uniforms = {
        iTime: gl.getUniformLocation(program, 'iTime'),
        iResolution: gl.getUniformLocation(program, 'iResolution'),
        hue: gl.getUniformLocation(program, 'hue'),
        hover: gl.getUniformLocation(program, 'hover'),
        rot: gl.getUniformLocation(program, 'rot'),
        hoverIntensity: gl.getUniformLocation(program, 'hoverIntensity'),
        animSpeed: gl.getUniformLocation(program, 'animSpeed')
      } as const;

      let currentHover = 0; let targetHover = 0; let currentRot = 0; let lastTime = 0;

      const _resize = () => {
        // Use optimized DPR for low-end devices
        const dpr = getDevicePixelRatio(); 
        const width = container.clientWidth; 
        const height = container.clientHeight;
        canvas.width = width * dpr; 
        canvas.height = height * dpr; 
        canvas.style.width = width + 'px'; 
        canvas.style.height = height + 'px';
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform3f(uniforms.iResolution, canvas.width, canvas.height, canvas.width / canvas.height);
      };
      resize = _resize;

      const _handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
        const width = rect.width; const height = rect.height; const size = Math.min(width, height);
        const centerX = width / 2; const centerY = height / 2; const uvX = ((x - centerX) / size) * 2.0; const uvY = ((y - centerY) / size) * 2.0;
        targetHover = Math.sqrt(uvX * uvX + uvY * uvY) < 0.8 ? 1 : 0;
      };
      handleMouseMove = _handleMouseMove;
      const _handleMouseLeave = () => { targetHover = 0; };
      handleMouseLeave = _handleMouseLeave;

      container.addEventListener('mousemove', _handleMouseMove);
      container.addEventListener('mouseleave', _handleMouseLeave);
      window.addEventListener('resize', _resize);
      _resize();

      const update = (t: number) => {
        // Only animate if visible and not paused
        if (!isAnimating) return;
        
        const dt = (t - lastTime) * 0.001; lastTime = t;
        const effectiveHover = forceHoverState ? 1 : targetHover; 
        currentHover += (effectiveHover - currentHover) * 0.1;
        if (rotateOnHover && effectiveHover > 0.5) currentRot += dt * 0.3;
        const speed = currentHover > 0.5 ? 0.7 : (animSpeed ?? 0.6);
        gl.uniform1f(uniforms.animSpeed, speed);
        gl.uniform1f(uniforms.iTime, t * 0.001);
        gl.uniform1f(uniforms.hue, hue);
        gl.uniform1f(uniforms.hover, currentHover);
        gl.uniform1f(uniforms.rot, currentRot);
        gl.uniform1f(uniforms.hoverIntensity, hoverIntensity);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        rafRef.current = requestAnimationFrame(update);
      };
      rafRef.current = requestAnimationFrame(update);

    } catch (_) {
      return;
    }

    return () => {
      isAnimating = false;
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resize) window.removeEventListener('resize', resize);
      if (handleMouseMove) container.removeEventListener('mousemove', handleMouseMove);
      if (handleMouseLeave) container.removeEventListener('mouseleave', handleMouseLeave);
      if (canvas.parentNode) container.removeChild(canvas);
      glRef.current?.getExtension('WEBGL_lose_context')?.loseContext();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState, animSpeed]);

  // Animation runs continuously - visibility tracking kept for future optimization
  // Removed pause/resume logic that was causing glitching

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}


