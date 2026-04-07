import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const ProjectCanvas: React.FC<{ index: number }> = ({ index }) => {
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
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 500);
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      let mesh: any;

      if (index === 0) {
        const geometry = new THREE.TorusKnotGeometry(25, 8, 100, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true, transparent: true, opacity: 0.6 });
        mesh = new THREE.Mesh(geometry, material);
      } else if (index === 1) {
        const geometry = new THREE.IcosahedronGeometry(35, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true, transparent: true, opacity: 0.6 });
        mesh = new THREE.Mesh(geometry, material);
      } else {
        const geometry = new THREE.OctahedronGeometry(35, 0);
        const material = new THREE.MeshBasicMaterial({ color: 0xF59E0B, wireframe: true, transparent: true, opacity: 0.6 });
        mesh = new THREE.Mesh(geometry, material);
      }
      
      scene.add(mesh);

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.008;
        renderer.render(scene, camera);
      };

      animate();

      cleanupFunc = () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        if (renderer) renderer.dispose();
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
  }, [index]);

  return <canvas ref={canvasRef} className="w-full h-full block opacity-80" />;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 w-full min-h-screen flex flex-col justify-center">
      <div className="w-full mb-12">
        <p className="text-amber-400 text-xs font-mono uppercase tracking-[0.3em] mb-3">FEATURED INITIATIVE</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">The Projects.</h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* Featured Project */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-[#111520] border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden relative"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-start">
                <div className="inline-block px-3 py-1 border border-amber-500/30 text-amber-400 text-[10px] font-mono tracking-widest uppercase rounded-full mb-6 bg-amber-500/5">
                    CASE STUDY 001 / 2025
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                    Automated<br/>Taxonomy-Driven<br/>LLM Framework
                </h3>
                
                <ul className="mb-8 space-y-3">
                    {PROJECTS[0].description.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="text-amber-500 mt-1.5">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-10">
                    {PROJECTS[0].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>

                <a href={PROJECTS[0].link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 text-white font-bold hover:border-amber-500 hover:text-amber-400 uppercase tracking-wider text-sm transition-all">
                    Explore Project Details
                </a>
            </div>

            <div className="relative w-full h-[300px] lg:h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-black/20 border border-white/5">
                <ProjectCanvas index={0} />
                
                <div className="absolute bottom-6 right-6 z-10 glass-card p-4 border-amber-500/20 max-w-[200px]">
                    <p className="text-2xl font-black text-white">20-50<span className="text-amber-400">%</span></p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 leading-tight">ATTACK SUCCESS RATE REDUCTION</p>
                </div>
            </div>
        </motion.div>

        {/* Sub Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(1).map((project, index) => (
                <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card flex flex-col p-6 group hover:border-white/15 transition-all"
                >
                    <div className="w-full h-[140px] rounded-xl mb-6 overflow-hidden bg-black/20 relative">
                        <ProjectCanvas index={index + 1} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description[0]}
                    </p>

                    <div className="mt-auto flex justify-between items-end">
                        <div className="flex w-full flex-wrap gap-2 pr-4">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-full text-[10px] font-medium border border-white/10 text-slate-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-amber-500/10 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-all">
                            →
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;