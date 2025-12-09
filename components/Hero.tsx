import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
            <div className="bg-slate-900 rounded-full px-4 py-1">
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Available for Full-time Roles
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">{PERSONAL_INFO.name.split(' ')[0]}</span>{' '}
            <span className="text-slate-400">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-cyan-400 font-light mb-8">
            {PERSONAL_INFO.role}
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
            Specializing in <span className="text-white font-medium">LLM Security</span>, <span className="text-white font-medium">MLOps</span>, and <span className="text-white font-medium">Computer Vision</span>.
            Building production-grade AI systems that are secure, scalable, and robust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/Portfolio/resume.pdf"
              download="Sandeep_Kumar_Amgothu_Resume.pdf"
              className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
            <div className="flex gap-4">
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} />
            {PERSONAL_INFO.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;