import { useEffect, useRef } from 'react';

function Orb({ hue = 0, hoverIntensity = 0.2, rotateOnHover = true, forceHoverState = false, animSpeed = 1.0 }) {
  const ctnDom = useRef(null);
  const rafRef = useRef(null);
  const glRef = useRef(null);

  const vert = /* glsl */ `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = /* glsl */ `
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    uniform float animSpeed;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }
    
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 drawWaves(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float warpAmount = snoise3(vec3(uv * 0.5, iTime * 0.6 * animSpeed)) * 0.15;
      uv.x += warpAmount;
      uv.y += warpAmount * 0.5;
      
      float wave1 = sin(uv.x * 2.0 + iTime * 10.0 * animSpeed) * 0.3;
      float wave2 = sin(uv.x * 1.5 - iTime * 1.2 * animSpeed + 10.0) * 0.35;
      float wave3 = sin(uv.x * 2.5 + iTime * 0.8 * animSpeed + 10.0) * 0.32;
      float wave4 = sin(uv.x * 1.8 + iTime * 1.4 * animSpeed + 10.0) * 0.28;
      float wave5 = sin(uv.x * 2.2 - iTime * 1.0 * animSpeed + 10.0) * 0.33;

      wave1 += snoise3(vec3(uv.x * 2.0, uv.y, iTime * 1.0 * animSpeed)) * 0.12;
      wave2 += snoise3(vec3(uv.x * 1.8, uv.y + 1.0, iTime * 0.8 * animSpeed)) * 0.15;
      wave3 += snoise3(vec3(uv.x * 2.2, uv.y + 2.0, iTime * 1.2 * animSpeed)) * 0.13;
      wave4 += snoise3(vec3(uv.x * 1.9, uv.y + 3.0, iTime * 0.9 * animSpeed)) * 0.14;
      wave5 += snoise3(vec3(uv.x * 2.1, uv.y + 4.0, iTime * 1.1 * animSpeed)) * 0.11;
      
      float dist1 = abs(uv.y - wave1);
      float dist2 = abs(uv.y - wave2);
      float dist3 = abs(uv.y - wave3);
      float dist4 = abs(uv.y - wave4);
      float dist5 = abs(uv.y - wave5);
      
      float band1 = exp(-dist1 * 8.0) * 1.2;
      float band2 = exp(-dist2 * 7.0) * 1.1;
      float band3 = exp(-dist3 * 8.5) * 1.15;
      float band4 = exp(-dist4 * 7.5) * 1.0;
      float band5 = exp(-dist5 * 8.2) * 1.05;
      
      vec3 waveColor1 = color1 * band1;
      vec3 waveColor2 = color2 * band2;
      vec3 waveColor3 = mix(color1, color3, 0.5) * band3;
      vec3 waveColor4 = mix(color2, color1, 0.6) * band4;
      vec3 waveColor5 = mix(color3, color2, 0.4) * band5;
      
      vec3 col = waveColor1 + waveColor2 + waveColor3 + waveColor4 + waveColor5;
      
      float glow = (band1 + band2 + band3 + band4 + band5) * 0.35;
      col += glow * mix(color2, color1, 0.5);
      
      float edgeFade = smoothstep(1.0, 0.3, length(uv));
      col *= edgeFade;
      
      col = clamp(col, 0.0, 1.0);
      return extractAlpha(col);
    }
    
    vec4 drawInnerOrb(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float len = length(uv);
      float ang = atan(uv.y, uv.x);
      
      // Bigger orb size
      float orbSize = 0.5;
      float innerLen = len / orbSize;
      
      if (innerLen > 1.2) {
        return vec4(0.0);
      }
      
      vec2 innerUv = uv / orbSize;
      float invLen = innerLen > 0.0 ? 1.0 / innerLen : 0.0;
      
      // Animated noise with more intensity
      float n0 = snoise3(vec3(innerUv * noiseScale * 1.5, iTime * 0.6 * animSpeed)) * 0.5 + 0.5;
      float r0 = mix(0.3, 0.8, n0);
      float d0 = distance(innerUv, (r0 * invLen) * innerUv);
      float v0 = light1(1.8, 12.0, d0);
      v0 *= smoothstep(r0 * 1.1, r0 * 0.95, innerLen);
      
      // Brighter rotating highlight
      float a = iTime * 1.5 * animSpeed;
      vec2 pos = vec2(cos(a), sin(a)) * r0 * 0.6;
      float d = distance(innerUv, pos);
      float v1 = light2(3.5, 8.0, d);
      v1 *= light1(1.5, 40.0, d0);
      
      // Brighter color mixing
      float cl = cos(ang - iTime * 3.0 * animSpeed) * 0.5 + 0.5;
      vec3 col = mix(color2, color1, cl) * 1.4;
      col = mix(color3 * 2.0, col, v0);
      col = col + v1 * color2 * 1.5;
      
      // Add core glow
      float coreGlow = exp(-innerLen * 2.5) * 1.2;
      col += color1 * coreGlow;
      
      // Smooth edges
      float edge = smoothstep(1.0, 0.7, innerLen);
      col *= edge;
      
      col = clamp(col, 0.0, 1.0);
      return extractAlpha(col);
    }
    
    vec4 draw(vec2 uv, vec2 waveUv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;
      
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5 * animSpeed)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0 * animSpeed) * 0.5 + 0.5;
      
      float a = iTime * -1.0 * animSpeed;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);
      
      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
      
      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      
      vec4 waves = drawWaves(waveUv * 1.0);
      col = col * (1.0 - waves.a * 0.85) + waves.rgb * waves.a * 1.3;
      
      // Add inner orb in front of waves
      vec4 innerOrb = drawInnerOrb(uv);
      col = col * (1.0 - innerOrb.a * 0.9) + innerOrb.rgb * innerOrb.a;
      
      col = clamp(col, 0.0, 1.0);
      
      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      
      // Store original UV for waves (not rotated)
      vec2 waveUv = uv;
      waveUv.x += hover * hoverIntensity * 0.1 * sin(waveUv.y * 10.0 + iTime * animSpeed);
      waveUv.y += hover * hoverIntensity * 0.1 * sin(waveUv.x * 10.0 + iTime * animSpeed);
      
      // Rotate UV for orb only
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime * animSpeed);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime * animSpeed);
      
      return draw(uv, waveUv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    
    glRef.current = gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(canvas);

    const vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vert);
    gl.compileShader(vertShader);

    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, frag);
    gl.compileShader(fragShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(program, 'uv');
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      hue: gl.getUniformLocation(program, 'hue'),
      hover: gl.getUniformLocation(program, 'hover'),
      rot: gl.getUniformLocation(program, 'rot'),
      hoverIntensity: gl.getUniformLocation(program, 'hoverIntensity'),
      animSpeed: gl.getUniformLocation(program, 'animSpeed')
    };

    let currentHover = 0;
    let targetHover = 0;
    let currentRot = 0;
    let lastTime = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform3f(uniforms.iResolution, canvas.width, canvas.height, canvas.width / canvas.height);
    }

    const handleMouseMove = e => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const size = Math.min(width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const uvX = ((x - centerX) / size) * 2.0;
      const uvY = ((y - centerY) / size) * 2.0;

      if (Math.sqrt(uvX * uvX + uvY * uvY) < 0.8) {
        targetHover = 1;
      } else {
        targetHover = 0;
      }
    };

    const handleMouseLeave = () => {
      targetHover = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    resize();

    const update = (t) => {
      const dt = (t - lastTime) * 0.001;
      lastTime = t;

      const effectiveHover = forceHoverState ? 1 : targetHover;
      currentHover += (effectiveHover - currentHover) * 0.1;

      if (rotateOnHover && effectiveHover > 0.5) {
        currentRot += dt * 0.3;
      }

      // Animation speed: normal (1.0) or extremely fast (0.7) when hovered
      const animSpeed = currentHover > 0.5 ? 0.7 : 0.6;
      gl.uniform1f(uniforms.animSpeed, animSpeed);
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

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (canvas.parentNode) {
        container.removeChild(canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState, animSpeed, vert, frag]);

  return <div ref={ctnDom} className="w-full h-full" />;
}

export default Orb;
