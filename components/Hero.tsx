import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black">

      {/* --- TECH TORII GATE --- */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-[600px] h-[500px] opacity-20 pointer-events-none select-none">
        {/* Top Lintel (Kasagi) */}
        <div className="absolute top-0 left-[-50px] w-[700px] h-12 bg-black border-2 border-samurai-red skew-x-12 shadow-[0_0_20px_#D00000]"></div>
        {/* Second Lintel (Nuki) */}
        <div className="absolute top-24 left-0 w-[600px] h-8 bg-black border border-red-900"></div>
        {/* Left Pillar */}
        <div className="absolute top-12 left-20 w-16 h-[500px] bg-gradient-to-b from-black to-red-950 border-r border-red-900"></div>
        {/* Right Pillar */}
        <div className="absolute top-12 right-20 w-16 h-[500px] bg-gradient-to-b from-black to-red-950 border-l border-red-900"></div>

        {/* Neon Kanji/Tech Decorations */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-9xl text-red-900 opacity-30 font-black writing-vertical-rl">
          侍
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-6 py-2 bg-black border border-samurai-red mb-8 relative group overflow-hidden">
            <div className="absolute inset-0 bg-samurai-red/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-white relative z-10">
              System Online
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            {PERSONAL_INFO.name.split(' ')[0]}
            <span className="text-samurai-red">.</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 font-mono mb-10 tracking-widest uppercase">
            {PERSONAL_INFO.role} &nbsp;//&nbsp; <span className="text-samurai-red">AI SAFETY</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12 leading-relaxed font-light border-l-2 border-samurai-red pl-6 text-left bg-black/50 p-4">
            Forging <span className="text-white font-bold">Secure AI</span> systems in the fires of production.
            I specialize in <span className="text-red-400">LLM Security</span>, <span className="text-red-400">MLOps</span>, and <span className="text-red-400">Computer Vision</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sandeep_Kumar_Amgothu_Resume.pdf"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
              className="px-10 py-4 bg-samurai-red hover:bg-white hover:text-black text-white font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(208,0,0,0.5)] flex items-center gap-3 group"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              Download Resume
            </a>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, link: `https://${PERSONAL_INFO.linkedin}` },
                { icon: Github, link: `https://${PERSONAL_INFO.github}` },
                { icon: Mail, link: `mailto:${PERSONAL_INFO.email}` }
              ].map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noreferrer"
                  style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)' }}
                  className="w-16 h-14 bg-neutral-900 border-2 border-neutral-800 hover:border-samurai-red hover:bg-neutral-800 text-slate-400 hover:text-samurai-red flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-500 font-mono text-xs uppercase tracking-widest">
            <MapPin size={14} className="text-samurai-red" />
            {PERSONAL_INFO.location}
            <span className="text-samurai-red">|</span>
            Lat: 34.0522° N
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;