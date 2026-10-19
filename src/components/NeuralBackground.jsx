import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralBackground({ className = "pointer-events-none absolute inset-0 h-full w-full" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 220;

    const group = new THREE.Group();
    scene.add(group);

    // Subtle refined particles
    const particleCount = 75;
    const maxDistance = 65;
    const bound = 150;

    const particles = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#38BDF8');
    const emeraldColor = new THREE.Color('#34D399');
    const whiteColor = new THREE.Color('#F1F5F9');

    for (let i = 0; i < particleCount; i++) {
      const p = {
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * bound * 2.4,
          (Math.random() - 0.5) * bound * 1.5,
          (Math.random() - 0.5) * bound * 1.2
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.16,
          (Math.random() - 0.5) * 0.16,
          (Math.random() - 0.5) * 0.16
        )
      };
      particles.push(p);

      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;

      const c = cyanColor.clone().lerp(whiteColor, Math.random() * 0.7);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(pointsMesh);

    // Thin elegant connecting lines
    const maxLines = particleCount * particleCount;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.25
    });
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    // Subtle pulses
    const pulseCount = 12;
    const pulses = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({ a: 0, b: 1, t: Math.random(), speed: 0.006 + Math.random() * 0.009 });
    }

    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));

    const pulseMaterial = new THREE.PointsMaterial({
      size: 4,
      color: emeraldColor,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const pulseMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    group.add(pulseMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      group.rotation.y = time * 0.02 + mouseX * 0.1;
      group.rotation.x = mouseY * 0.08;

      const posArray = pointsGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.pos.add(p.vel);

        if (Math.abs(p.pos.x) > bound * 1.2) p.vel.x *= -1;
        if (Math.abs(p.pos.y) > bound * 0.8) p.vel.y *= -1;
        if (Math.abs(p.pos.z) > bound * 0.7) p.vel.z *= -1;

        posArray[i * 3] = p.pos.x;
        posArray[i * 3 + 1] = p.pos.y;
        posArray[i * 3 + 2] = p.pos.z;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      let lineCount = 0;
      const activeConnections = [];

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const pi = particles[i].pos;
          const pj = particles[j].pos;
          const dist = pi.distanceTo(pj);

          if (dist < maxDistance) {
            const idx = lineCount * 6;
            linePositions[idx] = pi.x;
            linePositions[idx + 1] = pi.y;
            linePositions[idx + 2] = pi.z;
            linePositions[idx + 3] = pj.x;
            linePositions[idx + 4] = pj.y;
            linePositions[idx + 5] = pj.z;

            const alpha = (1 - dist / maxDistance) * 0.35;
            const c = cyanColor.clone().multiplyScalar(alpha);

            lineColors[idx] = c.r;
            lineColors[idx + 1] = c.g;
            lineColors[idx + 2] = c.b;
            lineColors[idx + 3] = c.r;
            lineColors[idx + 4] = c.g;
            lineColors[idx + 5] = c.b;

            activeConnections.push([i, j]);
            lineCount++;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      if (activeConnections.length > 0) {
        const pulsePos = pulseGeometry.attributes.position.array;
        for (let i = 0; i < pulseCount; i++) {
          const pulse = pulses[i];
          pulse.t += pulse.speed;

          if (pulse.t >= 1 || pulse.a >= particleCount || pulse.b >= particleCount) {
            pulse.t = 0;
            const randConn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
            pulse.a = randConn[0];
            pulse.b = randConn[1];
          }

          const pa = particles[pulse.a].pos;
          const pb = particles[pulse.b].pos;
          pulsePos[i * 3] = pa.x + (pb.x - pa.x) * pulse.t;
          pulsePos[i * 3 + 1] = pa.y + (pb.y - pa.y) * pulse.t;
          pulsePos[i * 3 + 2] = pa.z + (pb.z - pa.z) * pulse.t;
        }
        pulseGeometry.attributes.position.needsUpdate = true;
      }

      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9));
      canvas.style.opacity = String(fade);

      if (fade > 0.01) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
