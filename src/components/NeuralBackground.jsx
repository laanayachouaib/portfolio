import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralBackground({ className = "pointer-events-none fixed inset-0 z-0 h-full w-full" }) {
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
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1500);
    camera.position.z = 240;

    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 100;
    const maxDistance = 65;
    const boundX = 220;
    const boundY = 140;
    const boundZ = 120;

    const particles = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#00F0FF');
    const emeraldColor = new THREE.Color('#10B981');
    const whiteColor = new THREE.Color('#F1F5F9');

    for (let i = 0; i < particleCount; i++) {
      const p = {
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * boundX * 2,
          (Math.random() - 0.5) * boundY * 2,
          (Math.random() - 0.5) * boundZ * 2
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.16
        )
      };
      particles.push(p);

      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;

      const rnd = Math.random();
      const c = rnd > 0.6 ? cyanColor : (rnd > 0.3 ? emeraldColor : whiteColor);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 3.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(pointsMesh);

    const maxLines = (particleCount * 8) + 30;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.35
    });
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    const pulseCount = 18;
    const pulses = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({ a: 0, b: 1, t: Math.random(), speed: 0.007 + Math.random() * 0.012 });
    }

    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));

    const pulseMaterial = new THREE.PointsMaterial({
      size: 5,
      color: cyanColor,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const pulseMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    group.add(pulseMesh);

    let targetRotX = 0, targetRotY = 0;
    let curRotX = 0, curRotY = 0;
    const mouseWorld = new THREE.Vector3(0, 0, -9999);
    let hasMouseMoved = false;

    const handleMouseMove = (e) => {
      hasMouseMoved = true;
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotX = ndcY * 0.15;
      targetRotY = ndcX * 0.22;

      const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      mouseWorld.copy(camera.position).add(dir.multiplyScalar(dist));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;

      curRotX += (targetRotX - curRotX) * 0.04;
      curRotY += (targetRotY - curRotY) * 0.04;

      group.rotation.y = time * 0.015 + curRotY;
      group.rotation.x = curRotX;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollFrac = (window.scrollY / maxScroll) * 80;
      group.position.y += ((scrollFrac - 40) - group.position.y) * 0.04;

      const posArray = pointsGeometry.attributes.position.array;
      const mouseInteractRadius = 80;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.pos.add(p.vel);

        if (Math.abs(p.pos.x) > boundX) p.vel.x *= -1;
        if (Math.abs(p.pos.y) > boundY) p.vel.y *= -1;
        if (Math.abs(p.pos.z) > boundZ) p.vel.z *= -1;

        if (hasMouseMoved) {
          const dToMouse = p.pos.distanceTo(mouseWorld);
          if (dToMouse < mouseInteractRadius && dToMouse > 0.1) {
            const repulse = (1 - dToMouse / mouseInteractRadius) * 1.2;
            p.pos.x += ((p.pos.x - mouseWorld.x) / dToMouse) * repulse;
            p.pos.y += ((p.pos.y - mouseWorld.y) / dToMouse) * repulse;
          }
        }

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

          if (dist < maxDistance && lineCount < maxLines - 10) {
            const idx = lineCount * 6;
            linePositions[idx] = pi.x;
            linePositions[idx + 1] = pi.y;
            linePositions[idx + 2] = pi.z;
            linePositions[idx + 3] = pj.x;
            linePositions[idx + 4] = pj.y;
            linePositions[idx + 5] = pj.z;

            const alpha = (1 - dist / maxDistance) * 0.38;
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

        if (hasMouseMoved) {
          const dToMouse = particles[i].pos.distanceTo(mouseWorld);
          if (dToMouse < 85 && lineCount < maxLines - 1) {
            const idx = lineCount * 6;
            linePositions[idx] = particles[i].pos.x;
            linePositions[idx + 1] = particles[i].pos.y;
            linePositions[idx + 2] = particles[i].pos.z;
            linePositions[idx + 3] = mouseWorld.x;
            linePositions[idx + 4] = mouseWorld.y;
            linePositions[idx + 5] = mouseWorld.z;

            const alpha = (1 - dToMouse / 85) * 0.75;
            const c = emeraldColor.clone().multiplyScalar(alpha);

            lineColors[idx] = c.r;
            lineColors[idx + 1] = c.g;
            lineColors[idx + 2] = c.b;
            lineColors[idx + 3] = c.r;
            lineColors[idx + 4] = c.g;
            lineColors[idx + 5] = c.b;

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

      renderer.render(scene, camera);
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
