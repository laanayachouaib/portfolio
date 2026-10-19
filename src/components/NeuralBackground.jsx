import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralBackground({ className = "pointer-events-none absolute inset-0 h-full w-full" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 240;

    const group = new THREE.Group();
    scene.add(group);

    // Particle nodes configuration
    const particleCount = 85;
    const maxDistance = 75;
    const pulseCount = 18;
    const bound = 160;

    const particles = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const purpleColor = new THREE.Color('#7621B0');
    const magentaColor = new THREE.Color('#B600A8');
    const cyanColor = new THREE.Color('#00F0FF');
    const whiteColor = new THREE.Color('#D7E2EA');

    for (let i = 0; i < particleCount; i++) {
      const p = {
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * bound * 2.2,
          (Math.random() - 0.5) * bound * 1.5,
          (Math.random() - 0.5) * bound * 1.2
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.28,
          (Math.random() - 0.5) * 0.28,
          (Math.random() - 0.5) * 0.28
        )
      };
      particles.push(p);

      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;

      const mixed = purpleColor.clone().lerp(magentaColor, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    // Points mesh
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(pointsMesh);

    // Lines mesh
    const maxLineSegments = particleCount * particleCount;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineColors = new Float32Array(maxLineSegments * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.6
    });
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    // Dynamic signal pulses traveling across connections
    const pulses = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({
        a: 0,
        b: 1,
        t: Math.random(),
        speed: 0.008 + Math.random() * 0.015
      });
    }

    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));

    const pulseMaterial = new THREE.PointsMaterial({
      size: 5.5,
      color: cyanColor,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const pulseMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    group.add(pulseMesh);

    // Mouse interaction & parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Group rotation
      group.rotation.y = time * 0.03 + mouseX * 0.15;
      group.rotation.x = mouseY * 0.1;

      // Update particle positions
      const posArray = pointsGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.pos.add(p.vel);

        // Soft bounce boundaries
        if (Math.abs(p.pos.x) > bound * 1.1) p.vel.x *= -1;
        if (Math.abs(p.pos.y) > bound * 0.8) p.vel.y *= -1;
        if (Math.abs(p.pos.z) > bound * 0.7) p.vel.z *= -1;

        posArray[i * 3] = p.pos.x;
        posArray[i * 3 + 1] = p.pos.y;
        posArray[i * 3 + 2] = p.pos.z;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      // Connect nearby particles
      let lineVertexCount = 0;
      const activeConnections = [];

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const pi = particles[i].pos;
          const pj = particles[j].pos;
          const dist = pi.distanceTo(pj);

          if (dist < maxDistance) {
            const idx = lineVertexCount * 6;
            linePositions[idx] = pi.x;
            linePositions[idx + 1] = pi.y;
            linePositions[idx + 2] = pi.z;
            linePositions[idx + 3] = pj.x;
            linePositions[idx + 4] = pj.y;
            linePositions[idx + 5] = pj.z;

            // Gradient line color based on distance and height
            const alpha = 1 - dist / maxDistance;
            const c = purpleColor.clone().lerp(magentaColor, (pi.y + bound) / (bound * 2));
            c.multiplyScalar(alpha);

            lineColors[idx] = c.r;
            lineColors[idx + 1] = c.g;
            lineColors[idx + 2] = c.b;
            lineColors[idx + 3] = c.r;
            lineColors[idx + 4] = c.g;
            lineColors[idx + 5] = c.b;

            activeConnections.push([i, j]);
            lineVertexCount++;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineVertexCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      // Update signal pulses along connections
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

      // Scroll fade out
      const scrollY = window.scrollY;
      const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.95));
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
