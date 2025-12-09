import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-samurai-dark text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-20 text-white uppercase tracking-[0.3em] drop-shadow-[0_0_10px_#FF0000]">
          Battle History
        </h2>

        <div className="max-w-5xl mx-auto relative pl-8">
          {/* Vertical Blade Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-gray-300 via-white to-gray-400 border border-gray-500 shadow-[0_0_15px_rgba(255,255,255,0.3)] ml-[-3px]"></div>

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-16 pl-16 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Blade Node (Tsuba/Guard Marker) */}
              <div className="absolute left-0 top-6 w-16 h-16 flex items-center justify-center -ml-8 z-10">
                <div className="w-6 h-6 bg-samurai-red rotate-45 border-2 border-white shadow-[0_0_10px_#FF0000] relative">
                  <div className="absolute inset-0 animate-ping opacity-75 bg-red-500"></div>
                </div>
              </div>

              {/* Hanging Scroll Card (Kakemono) */}
              <div className="bg-[#Fdfcf0] relative border-y-8 border-samurai-charcoal shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                {/* Top Rod */}
                <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
                {/* Hanging String visual */}
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-red-800"></div>

                <div className="p-8 relative z-10 text-black">
                  {/* Red Watermark Seal */}
                  <div className="absolute top-4 right-4 text-red-900/10 text-8xl font-black font-serif select-none pointer-events-none">
                    職
                  </div>

                  <span className="inline-block px-3 py-1 bg-samurai-red text-white text-xs font-bold uppercase tracking-widest mb-3 rounded-sm">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 font-serif text-gray-900 group-hover:text-samurai-red transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-red-800 font-bold uppercase tracking-wider text-sm mb-6">
                    <span>@ {exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                        <span className="text-samurai-red mt-1.5 text-xs">◆</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Rod Weight */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-black rounded-b-lg"></div>
                {/* Red Tassels */}
                <div className="absolute -bottom-4 left-10 w-2 h-8 bg-samurai-red rounded-full shadow-md animate-float"></div>
                <div className="absolute -bottom-4 right-10 w-2 h-8 bg-samurai-red rounded-full shadow-md animate-float" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;