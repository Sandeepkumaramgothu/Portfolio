import React from 'react';
import { Download, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-samurai-dark">

      {/* --- PARALLAX BACKGROUND LAYERS --- */}

      {/* Layer 1: Tokyo Skyline Silhouette (Static/Far) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-repeat-x opacity-30 pointer-events-none z-0"
        style={{ backgroundImage: 'linear-gradient(to top, #1A0000 0%, transparent 100%)' }}>
        <div className="absolute bottom-0 w-full h-full bg-[linear-gradient(90deg,#000_2px,transparent_2px),linear-gradient(0deg,#000_2px,transparent_2px)] bg-[length:20px_20px] opacity-20"></div>
      </div>

      {/* Layer 2: Floating Lanterns (Mid) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-12 bg-samurai-red rounded-lg shadow-[0_0_20px_#FF0000] opacity-60"
            initial={{ x: Math.random() * 1000, y: 1000 }}
            animate={{ y: -100, x: `+=${Math.sin(i) * 100}` }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
            style={{ left: `${i * 20}%` }}
          >
            <div className="w-full h-full flex items-center justify-center font-serif text-black text-xs">光</div>
          </motion.div>
        ))}
      </div>

      {/* Layer 3: Cherry Blossom Petals (Close/Interactive) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute w-3 h-3 bg-samurai-red/40 rounded-tl-xl rounded-br-xl"
            initial={{ y: -20, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 20,
              rotate: 360,
              x: `+=${Math.random() * 200 - 100}`
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* --- RED NEON CIRCUIT TORII GATE --- */}
      <motion.div
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none select-none z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Top Lintel (Kasagi) with Neon Glow */}
        <div className="absolute top-0 left-[-50px] w-[900px] h-20 bg-black border-2 border-samurai-red skew-x-12 shadow-[0_0_30px_#FF0000] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,0,0,0.5),transparent)] animate-slash"></div>
        </div>
        {/* Second Lintel (Nuki) */}
        <div className="absolute top-32 left-0 w-[800px] h-12 bg-black border border-samurai-blood shadow-[0_0_15px_#DC143C]"></div>
        {/* Pillars with Circuit Traces */}
        <div className="absolute top-16 left-24 w-24 h-[600px] bg-black border-x-2 border-samurai-red shadow-[0_0_20px_rgba(255,0,0,0.3)]">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent_90%,#FF0000_90%)] bg-[length:100%_50px] opacity-20 animate-pulse-red"></div>
        </div>
        <div className="absolute top-16 right-24 w-24 h-[600px] bg-black border-x-2 border-samurai-red shadow-[0_0_20px_rgba(255,0,0,0.3)]">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent_90%,#FF0000_90%)] bg-[length:100%_50px] opacity-20 animate-pulse-red"></div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title Area */}
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase relative inline-block group">
            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="absolute -inset-1 bg-samurai-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </h1>

          <h2 className="text-xl md:text-3xl text-samurai-crimson font-serif mb-12 tracking-[0.2em] uppercase border-b border-samurai-blood inline-block pb-2">
            Ronin Engineer // <span className="text-white">AI Safety</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-16 leading-relaxed font-light bg-black/60 p-6 border-l-4 border-samurai-red backdrop-blur-sm">
            Specializing in building <span className="text-samurai-red font-bold">Robust</span> & <span className="text-samurai-red font-bold text-shadow-[0_0_8px_#FF0000]">Secure</span> AI systems.
            A warrior in the digital realm, dedicated to research-driven MLOps and safe deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="px-8 py-3 bg-samurai-red hover:bg-white hover:text-samurai-red text-black font-black uppercase tracking-widest shadow-[0_0_20px_#FF0000] transition-all transform hover:-translate-y-1 flex items-center gap-2 clip-path-slant"
            >
              <Download size={20} />
              Resume PDF
            </a>

            {[
              { icon: Linkedin, link: `https://${PERSONAL_INFO.linkedin}`, isExternal: true },
              { icon: Github, link: `https://${PERSONAL_INFO.github}`, isExternal: true },
              { icon: GraduationCap, link: `https://scholar.google.com`, isExternal: true },
              { icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, isExternal: false }
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                target={btn.isExternal ? "_blank" : undefined}
                rel={btn.isExternal ? "noreferrer" : undefined}
                className="w-14 h-14 bg-black border-2 border-samurai-red rounded-full flex items-center justify-center text-samurai-red hover:bg-samurai-red hover:text-white hover:shadow-[0_0_30px_#FF0000] transition-all duration-300 group"
              >
                <btn.icon size={24} className="group-hover:animate-spin" />
              </a>
            ))}
          </div>

          <div className="w-full max-w-4xl mx-auto relative mt-12">
            <div className="relative bg-[#Fdfcf0] p-8 shadow-2xl border-y-8 border-samurai-dark mx-8 text-black"
              style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper.png")' }}>
              <div className="absolute top-0 left-[-20px] h-full w-8 bg-samurai-blood rounded-l-md shadow-lg flex items-center justify-center">
                <div className="w-2 h-3/4 bg-black/20"></div>
              </div>
              <div className="absolute top-0 right-[-20px] h-full w-8 bg-samurai-blood rounded-r-md shadow-lg flex items-center justify-center">
                <div className="w-2 h-3/4 bg-black/20"></div>
              </div>

              <div className="inline-block bg-samurai-red text-white px-8 py-1 mb-6 font-bold uppercase tracking-widest text-sm shadow-lg transform -translate-y-4 clip-path-slant">
                Mission Briefing
              </div>

              <p className="text-gray-900 leading-relaxed text-justify font-serif text-lg">
                {PERSONAL_INFO.role} with a focus on adversarial AI red-teaming and responsible AI governance.
                Developing automated safety frameworks to protect the next generation of intelligence.
              </p>

              <div className="absolute top-4 right-4 text-samurai-red opacity-20 text-6xl font-serif select-none pointer-events-none">
                AI
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;