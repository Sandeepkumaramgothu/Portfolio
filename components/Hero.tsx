import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animFrameId: number;
    let renderer: any;
    let cleanupFunc: () => void = () => {};

    const initThreeJS = () => {
      if (!canvasRef.current || !window.THREE) return;
      const THREE = window.THREE;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 300;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      // GEOMETRY 1 — Central Crystal
      const centralGeo = new THREE.IcosahedronGeometry(80, 2);
      const centralMat = new THREE.MeshPhongMaterial({
        color: 0x0D1B3E,
        emissive: 0x0A2540,
        specular: 0x06B6D4,
        shininess: 100,
        transparent: true,
        opacity: 0.85,
        wireframe: false
      });
      const centralCrystal = new THREE.Mesh(centralGeo, centralMat);
      scene.add(centralCrystal);

      // GEOMETRY 2 — Wireframe overlay
      const wireGeo = new THREE.IcosahedronGeometry(82, 2);
      const wireMat = new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true, transparent: true, opacity: 0.15 });
      const wireOverlay = new THREE.Mesh(wireGeo, wireMat);
      centralCrystal.add(wireOverlay);

      // GEOMETRY 3 — Orbiting small crystals
      const smallCrystals: any[] = [];
      const orbitRadius = 130;
      for(let i=0; i<5; i++) {
        const geo = new THREE.IcosahedronGeometry(8, 0);
        const mat = new THREE.MeshPhongMaterial({ color: 0xF59E0B, emissive: 0xD97706, shininess: 80 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.userData = { offset: i * Math.PI * 2 / 5 };
        scene.add(mesh);
        smallCrystals.push(mesh);
      }

      // GEOMETRY 4 — Particle field
      const particleCount = 200;
      const particlesGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for(let i=0; i<particleCount * 3; i+=3) {
        // Random positions within sphere radius 250
        const r = 250 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        posArray[i] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i+1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i+2] = r * Math.cos(phi);
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMat = new THREE.PointsMaterial({ color: 0x94A3B8, size: 1.5, transparent: true, opacity: 0.6 });
      const particleField = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particleField);

      // LIGHTS
      scene.add(new THREE.AmbientLight(0x0A1628, 1.0));
      
      const cyanLight = new THREE.PointLight(0x06B6D4, 2, 400);
      cyanLight.position.set(100, 100, 100);
      scene.add(cyanLight);
      
      const amberLight = new THREE.PointLight(0xF59E0B, 1.5, 300);
      amberLight.position.set(-100, -50, 80);
      scene.add(amberLight);
      
      const topLight = new THREE.PointLight(0xFFFFFF, 0.5, 200);
      topLight.position.set(0, 200, 0);
      scene.add(topLight);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
      };
      window.addEventListener('mousemove', onMouseMove);

      const clock = new THREE.Clock();

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Parallax lerp
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
        scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

        // Core animation
        centralCrystal.rotation.x += 0.003;
        centralCrystal.rotation.y += 0.005;
        particleField.rotation.y += 0.0005;

        // Orbit update
        smallCrystals.forEach(mesh => {
            const offset = mesh.userData.offset;
            mesh.position.x = Math.cos(time * 0.5 + offset) * orbitRadius;
            mesh.position.y = Math.sin(time * 0.3 + offset) * 50;
            mesh.position.z = Math.sin(time * 0.5 + offset) * orbitRadius;
            mesh.rotation.x += 0.02;
            mesh.rotation.y += 0.02;
        });

        renderer.render(scene, camera);
      };

      animate();

      cleanupFunc = () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        if (renderer) renderer.dispose();
        window.removeEventListener('mousemove', onMouseMove);
      };
    };

    if (!window.__THREE_LOADED__) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        window.__THREE_LOADED__ = true;
        initThreeJS();
      };
      document.head.appendChild(script);
    } else {
      initThreeJS();
    }

    return () => cleanupFunc();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.05) 0%, transparent 60%)' }}></div>
      
      <div className="container mx-auto px-4 w-full flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* LEFT COLUMN */}
        <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col items-start w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {PERSONAL_INFO.availability}
          </div>

          <div className="text-2xl text-slate-300 font-medium mb-3">Hi, I'm {PERSONAL_INFO.name}</div>
          <h1 className="leading-tight tracking-tight mb-6">
            <div className="text-5xl md:text-7xl font-black text-white">Architecting</div>
            <div className="text-5xl md:text-7xl font-black text-amber-400">Intelligence.</div>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10">
            {PERSONAL_INFO.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a 
                href="#projects"
                className="px-8 py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] text-sm uppercase tracking-widest"
            >
                View Projects
            </a>
            <a 
                href={`${import.meta.env.BASE_URL}${PERSONAL_INFO.resumeUrl}`} download
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:border-amber-500/60 hover:text-amber-400 transition-all text-sm uppercase tracking-widest flex items-center gap-2"
            >
                <Download size={16} /> Resume
            </a>
            <a 
                href={`${import.meta.env.BASE_URL}${PERSONAL_INFO.coverLetterUrl}`} download
                className="px-8 py-4 border border-white/10 text-slate-400 font-bold rounded-lg hover:border-amber-500/40 hover:text-amber-400 transition-all text-sm uppercase tracking-widest flex items-center gap-2"
            >
                <FileText size={16} /> Cover Letter
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Linkedin size={20} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.scholar} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <GraduationCap size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-amber-500/60 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full h-[500px] lg:h-[600px] mt-12 lg:mt-0"
        >
            <canvas ref={canvasRef} className="absolute inset-0 rounded-2xl overflow-hidden w-full h-full" />
            
            {/* Stat Badge */}
            <div className="absolute bottom-8 left-4 z-10 animate-float glass-card p-4 min-w-[160px] border-amber-500/20">
                <p className="text-3xl font-black text-amber-400">{PERSONAL_INFO.stat.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{PERSONAL_INFO.stat.label}</p>
                <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">{PERSONAL_INFO.stat.sublabel}</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;