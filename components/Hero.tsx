import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient Orbs - Updated to Red/Dark */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-samurai-red/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-px rounded-sm bg-gradient-to-r from-samurai-red to-red-900 mb-6 shadow-[0_0_15px_rgba(208,0,0,0.5)]">
            <div className="bg-black rounded-sm px-4 py-1">
              <span className="text-sm font-bold uppercase tracking-widest text-samurai-red">
                Available for Full-time Roles
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{PERSONAL_INFO.name.split(' ')[0]}</span>{' '}
            <span className="text-slate-500">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-samurai-red font-light mb-8 uppercase tracking-widest border-b-2 border-samurai-red/30 inline-block pb-1">
            {PERSONAL_INFO.role}
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed font-light">
            Specializing in <span className="text-white font-medium border-b border-samurai-red">LLM Security</span>, <span className="text-white font-medium border-b border-samurai-red">MLOps</span>, and <span className="text-white font-medium border-b border-samurai-red">Computer Vision</span>.
            Building production-grade AI systems that are secure, scalable, and robust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sandeep_Kumar_Amgothu_Resume.pdf"
              className="px-8 py-3 rounded-sm bg-samurai-red hover:bg-red-700 text-white font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(208,0,0,0.4)] hover:shadow-[0_0_30px_rgba(208,0,0,0.6)] flex items-center gap-2 border border-red-500 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
            <div className="flex gap-4">
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="p-3 rounded-sm bg-black border border-slate-800 hover:border-samurai-red text-slate-400 hover:text-samurai-red transition-all hover:scale-110 shadow-lg hover:shadow-samurai-red/20">
                <Linkedin size={20} />
              </a>
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="p-3 rounded-sm bg-black border border-slate-800 hover:border-samurai-red text-slate-400 hover:text-samurai-red transition-all hover:scale-110 shadow-lg hover:shadow-samurai-red/20">
                <Github size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-sm bg-black border border-slate-800 hover:border-samurai-red text-slate-400 hover:text-samurai-red transition-all hover:scale-110 shadow-lg hover:shadow-samurai-red/20">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm tracking-wider">
            <MapPin size={16} className="text-samurai-red" />
            {PERSONAL_INFO.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;