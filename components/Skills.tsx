import React from 'react';
import { SKILLS } from '../constants';
import SkillsRadar from './SkillsRadar';
import { Code2, Database, Shield, Server, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const getIcon = (category: string) => {
  if (category.includes("Machine")) return <Code2 className="text-samurai-red" />;
  if (category.includes("Safety")) return <Shield className="text-red-500" />;
  if (category.includes("MLOps")) return <Server className="text-white" />;
  if (category.includes("Data")) return <Database className="text-red-400" />;
  return <LineChart className="text-samurai-gold" />; // Gold accent for variety
};

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div className="mb-4 group">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-bold text-gray-300 uppercase tracking-wider group-hover:text-samurai-red transition-colors">{name}</span>
      <span className="text-xs text-samurai-red font-mono">{level}%</span>
    </div>
    <div className="w-full bg-gray-800 h-2 rounded-sm overflow-hidden border border-gray-700 relative">
      <div
        className="bg-gradient-to-r from-samurai-blood via-samurai-red to-samurai-gold h-full relative"
        style={{ width: `${level}%` }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-white/20 animate-pulse"></div>
      </div>
    </div>
  </div>
);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-black/50 p-6 rounded-lg border border-samurai-blood shadow-lg hover:shadow-[0_0_20px_#8B0000] transition-all duration-300 backdrop-blur-sm group">
              <h3 className="text-md font-black text-white uppercase tracking-wider mb-6 border-b border-samurai-red pb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-samurai-red rotate-45"></div>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <SkillBar key={sIdx} name={skill} level={85 + (sIdx * 2) % 15} />
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