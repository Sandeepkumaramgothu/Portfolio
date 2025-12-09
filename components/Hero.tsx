import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden bg-slate-100">

      {/* Light Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      {/* --- BLUE TECH TORII GATE --- */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-10 pointer-events-none select-none">
        {/* Top Lintel (Kasagi) */}
        <div className="absolute top-0 left-[-50px] w-[800px] h-16 bg-gradient-to-r from-tech-blue to-cyan-400 skew-x-12 shadow-2xl rounded-sm"></div>
        {/* Second Lintel (Nuki) */}
        <div className="absolute top-32 left-0 w-[700px] h-10 bg-sky-200"></div>
        {/* Left Pillar */}
        <div className="absolute top-16 left-24 w-20 h-[500px] bg-slate-300 border-r-4 border-slate-400"></div>
        {/* Right Pillar */}
        <div className="absolute top-16 right-24 w-20 h-[500px] bg-slate-300 border-l-4 border-slate-400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-slate-800 uppercase drop-shadow-sm">
            {PERSONAL_INFO.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-12 tracking-wide">
            {PERSONAL_INFO.role} &nbsp;-&nbsp; <span className="text-tech-blue font-bold">AI Safety & MLOps</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-16 leading-relaxed font-light">
            Specializing in building <span className="font-bold text-slate-800">robust, secure, and scalable</span> AI systems.
            Passionate about research-driven MLOps and ensuring the safe deployment of machine learning technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-20 relative z-50">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sandeep_Kumar_Amgothu_Resume.pdf"
              className="px-8 py-3 bg-tech-blue hover:bg-cyan-500 text-white font-black uppercase tracking-widest shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 flex items-center gap-2 rounded-sm"
            >
              <Download size={20} />
              Download Resume
            </a>

            {/* Tech Hexagon Buttons */}
            {[
              { name: 'LinkedIn', icon: Linkedin, link: `https://${PERSONAL_INFO.linkedin}`, color: 'bg-sky-700' },
              { name: 'GitHub', icon: Github, link: `https://${PERSONAL_INFO.github}`, color: 'bg-slate-800' },
              { name: 'Scholar', icon: GraduationCap, link: `https://scholar.google.com`, color: 'bg-blue-600' },
              { name: 'Email', icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, color: 'bg-cyan-600' }
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                target="_blank"
                rel="noreferrer"
                className={`relative group px-1 py-1 ${btn.color} hover:scale-105 transition-transform duration-300 shadow-md`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
              >
                <div className="px-6 py-3 bg-opacity-100 flex items-center gap-3 w-40 justify-center">
                  <btn.icon size={20} className="text-white" />
                  <span className="text-white font-bold uppercase tracking-wider text-xs">{btn.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full max-w-4xl mx-auto relative mt-12 group">
            {/* SCROLL CONTAINER (About Section in a Scroll) */}
            <div className="relative bg-white p-8 shadow-xl border-y-8 border-slate-300 mx-8">
              <div className="absolute top-0 left-[-20px] h-full w-8 bg-gradient-to-r from-slate-400 to-slate-200 rounded-l-lg shadow-lg"></div>
              <div className="absolute top-0 right-[-20px] h-full w-8 bg-gradient-to-l from-slate-400 to-slate-200 rounded-r-lg shadow-lg"></div>

              <div className="inline-block bg-slate-800 text-white px-8 py-1 mb-6 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg transform -translate-y-4">
                About Me
              </div>

              <p className="text-slate-700 leading-relaxed text-justify font-serif">
                Professional with expertise in building secure and scalable AI systems. Passionate about research-driven MLOps and ensuring the safe deployment of machine learning technologies. Previous experience includes <span className="font-bold text-tech-blue">synthetic data generation</span>, and rigorous testing of LLM security.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;