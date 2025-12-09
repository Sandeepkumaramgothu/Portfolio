import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-samurai-dark relative overflow-hidden">
      {/* Background Tessellation Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#FF0000_1px,transparent_1px)] bg-[length:30px_30px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <div className="bg-black border-2 border-samurai-red px-12 py-3 clip-path-slant shadow-[0_0_15px_rgba(255,0,0,0.4)]">
            <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="text-samurai-red text-3xl">⚔️</span>
              Combat Skills
              <span className="text-samurai-red text-3xl">⚔️</span>
            </h2>
          </div>
        </div>

        {/* Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-black/40 p-1 rounded-lg border-l-4 border-samurai-red relative">
              {/* Category Title */}
              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 pl-4 pt-2 flex items-center gap-2">
                {category.category}
              </h3>

              {/* Hex Grid */}
              <div className="flex flex-wrap gap-4 pl-4 pb-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative w-24 h-28 flex items-center justify-center group cursor-pointer"
                  >
                    {/* Hexagon Shape */}
                    <div className="absolute inset-0 bg-gray-900 border-2 border-gray-700 transition-all duration-300 group-hover:bg-samurai-red group-hover:border-samurai-crimson group-hover:shadow-[0_0_15px_#FF0000]"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    </div>

                    {/* Inner Hexagon (active fill simulation) */}
                    <div className="absolute inset-1 bg-black/50 transition-all duration-300 group-hover:bg-transparent"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    </div>

                    {/* Text */}
                    <span className="relative z-10 text-[10px] font-bold text-center text-gray-300 leading-tight uppercase tracking-wider px-2 break-words group-hover:text-white">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;