import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-b-4 border-samurai-red pb-2">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line - Red */}
          <div className="absolute left-8 md:left-1/2 w-0.5 h-full bg-red-900/50 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 w-0.5 h-full bg-red-900/50 transform -translate-x-1/2 block md:hidden" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Timeline Dot - Diamond Shape (Samurai) */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-black border-2 border-samurai-red transform -translate-x-1/2 flex items-center justify-center z-10 rotate-45 shadow-[0_0_10px_#D00000]">
                <div className="w-2 h-2 bg-samurai-red"></div>
              </div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className={`bg-neutral-900/80 backdrop-blur-sm p-6 border-l-4 border-samurai-red shadow-lg ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} hover:shadow-[0_0_20px_rgba(208,0,0,0.2)] transition-all duration-300 group`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-samurai-red group-hover:scale-110 transition-transform" />
                    <span className="text-samurai-red text-sm font-bold tracking-widest uppercase">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{exp.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-4 uppercase text-xs tracking-wider">{exp.company}</h4>

                  <ul className="space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-slate-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-2 w-1.5 h-1.5 bg-samurai-red rotate-45 flex-shrink-0 group-hover:bg-red-400 transition-colors"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;