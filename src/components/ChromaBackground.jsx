import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ChromaBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Exact Framer-style Chroma Background GLSL Shader (Diagonal dark metallic pleats with localized chromatic specular highlights)
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      mat2 rotate2D(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // 2D Simplex Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Heightmap function: Parallel diagonal pleats with subtle liquid wave flow
      float getPleatHeight(vec2 st, float t) {
        vec2 p = rotate2D(-0.7) * st;

        float waveDistort = snoise(p * 2.5 + vec2(t * 0.25, -t * 0.2)) * 0.12;
        float microDistort = sin(p.y * 8.0 + t * 0.6) * 0.04;
        
        float xPos = (p.x + waveDistort + microDistort) * 18.0;

        float ridgePattern = abs(sin(xPos));
        float pleatHeight = pow(1.0 - ridgePattern, 1.6);

        float depthMod = snoise(p * 1.2 + t * 0.15) * 0.15;
        return pleatHeight * (0.85 + depthMod);
      }

      // Compute normal map for lighting calculations
      vec3 getNormal(vec2 st, float t) {
        vec2 eps = vec2(0.002, 0.0);
        float h  = getPleatHeight(st, t);
        float hx = getPleatHeight(st + eps.xy, t);
        float hy = getPleatHeight(st + eps.yx, t);

        vec3 tangentX = vec3(eps.x, 0.0, (hx - h) * 1.8);
        vec3 tangentY = vec3(0.0, eps.x, (hy - h) * 1.8);

        return normalize(cross(tangentX, tangentY));
      }

      void main() {
        vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
        float t = uTime * 0.4;

        vec3 N = getNormal(st, t);
        vec3 V = vec3(0.0, 0.0, 1.0);

        // Base dark charcoal tone
        float pleatH = getPleatHeight(st, t);
        vec3 ridgeBaseShade = mix(vec3(0.005, 0.005, 0.008), vec3(0.035, 0.035, 0.045), pleatH);

        // Autonomous Light Spot
        vec2 lightPos1 = vec2(sin(t * 0.5) * 0.5, cos(t * 0.4) * 0.3);
        vec2 lightPos2 = vec2(cos(t * 0.35) * 0.35, sin(t * 0.6) * 0.25);

        float d1 = length(st - lightPos1);
        float d2 = length(st - lightPos2);

        float spotMask1 = smoothstep(0.70, 0.0, d1);
        float spotMask2 = smoothstep(0.55, 0.0, d2) * 0.6;
        float totalSpotMask = clamp(spotMask1 + spotMask2, 0.0, 1.0);

        // Specular Highlights
        vec3 L1 = normalize(vec3(lightPos1 - st, 0.8));
        vec3 H1 = normalize(L1 + V);
        float NdotH1 = max(dot(N, H1), 0.0);

        float specSharp = pow(NdotH1, 48.0) * totalSpotMask * 0.5;
        float specSoft  = pow(NdotH1, 16.0) * totalSpotMask * 0.25;

        // Chromatic Dispersion
        vec2 rotatedSt = rotate2D(-0.7) * st;
        float chromaPhase = (rotatedSt.x * 12.0 + N.x * 3.0 + N.y * 2.0 + t * 0.3);
        vec3 rainbow = 0.5 + 0.5 * cos(6.28318 * (chromaPhase + vec3(0.0, 0.33, 0.67)));
        
        vec3 chromaSpecular = mix(vec3(specSharp), rainbow * specSharp * 1.1, totalSpotMask * 0.7);

        // Ambient sheen
        vec3 L_ambient = normalize(vec3(-0.4, 0.6, 1.0));
        vec3 H_ambient = normalize(L_ambient + V);
        float specAmbient = pow(max(dot(N, H_ambient), 0.0), 28.0) * 0.06;

        // Combine lighting
        vec3 finalColor = ridgeBaseShade;
        finalColor += vec3(specAmbient);
        finalColor += vec3(specSoft * 0.2);
        finalColor += chromaSpecular * 0.6;

        finalColor *= 0.7;

        // Output with 65% opacity
        gl_FragColor = vec4(finalColor, 0.65);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
      },
      transparent: true,
      depthWrite: false,
      depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = (currentTime - startTime) * 0.001;
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      material.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.65 }}
    />
  );
}
