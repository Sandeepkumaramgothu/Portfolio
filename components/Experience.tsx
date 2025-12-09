import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 w-0.5 h-full bg-slate-700 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 w-0.5 h-full bg-slate-700 transform -translate-x-1/2 block md:hidden" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-cyan-500 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className={`bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} hover:border-cyan-500/50 transition-colors`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>

                  <ul className="space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-slate-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-500 rounded-full flex-shrink-0"></span>
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