import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080C14] border-t border-white/5 py-12 px-6 w-full relative z-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center flex-wrap gap-6">
        
        <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-lg">{PERSONAL_INFO.name}</span>
            <span className="text-slate-500 text-sm">{PERSONAL_INFO.role}</span>
        </div>
        
        <div className="flex gap-8 items-center">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                <Github size={16} /> GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
            </a>
            <a href={PERSONAL_INFO.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                <GraduationCap size={16} /> Scholar
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                <Mail size={16} /> Email
            </a>
        </div>

        <div className="text-slate-600 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Sandeep Kumar Amgothu.<br/>
            STEM OPT Eligible.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;