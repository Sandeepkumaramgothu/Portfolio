import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 w-full flex-col flex justify-center">
      <div className="w-full mb-12">
        <p className="text-amber-400 text-xs font-mono uppercase tracking-[0.3em] mb-3">PROFESSIONAL CHRONICLE</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Experience.</h2>
      </div>
      
      <div className="relative border-l border-white/10 ml-4 md:ml-6 py-4 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 bg-[#0a0f1e] border-2 border-amber-500 rounded-full">
              <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-50"></div>
            </div>

            {/* Content Box */}
            <div className="glass-card p-6 md:p-8 hover:border-amber-500/30 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {exp.role.split(' -- ').join(' ')}
                  </h3>
                  <div className="text-amber-400 font-mono text-xs tracking-wider uppercase mt-2">
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <div className="inline-flex items-center px-4 py-2 border border-white/10 rounded-full bg-white/5 text-slate-300 text-sm font-medium whitespace-nowrap">
                  <Briefcase size={14} className="mr-2 text-amber-500 opacity-60" />
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.points.map((pt, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed text-sm">
                        <span className="text-amber-500 mt-1.5 opacity-50">•</span>
                        <span>{pt}</span>
                    </li>
                ))}
              </ul>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;