import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900 text-white px-12 py-2 rounded-sm skew-x-[-12deg] shadow-lg">
            <h2 className="text-2xl font-bold uppercase tracking-widest skew-x-[12deg]">Experience</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative pl-8">
          {/* Circuit Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-tech-blue/30 ml-[-2px]"></div>

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Circuit Node */}
              <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center -ml-8">
                <div className="w-4 h-4 bg-tech-blue rounded-full border-4 border-white shadow-md relative z-10"></div>
                {/* Decorative horizontal trace */}
                <div className="absolute left-8 top-1/2 w-8 h-0.5 bg-tech-blue/50"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-r-xl border-l-4 border-tech-blue shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                <div className="text-tech-blue font-bold text-sm uppercase tracking-wider mb-2">{exp.role}</div>
                <div className="text-slate-400 text-xs font-mono mb-4">{exp.period}</div>
                <ul className="space-y-1">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-600 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 text-tech-blue">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;