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
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-bold text-slate-700 uppercase">{name}</span>
      <span className="text-xs text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-tech-blue to-cyan-400 h-full rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900 text-white px-12 py-2 rounded-sm clip-path-slant shadow-lg">
            <h2 className="text-2xl font-bold uppercase tracking-widest">Skills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-6 border-b-2 border-tech-blue pb-2 truncate" title={category.category}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  /* Assigning a pseudo-random high level for visual flare since resume has no % */
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