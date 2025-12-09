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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Machine Learning */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-6 border-b-2 border-tech-blue pb-2">
              Machine Learning
            </h3>
            <SkillBar name="Machine Learning" level={95} />
            <SkillBar name="Bayesian" level={85} />
            <SkillBar name="Neural Networks" level={92} />
            <SkillBar name="Bootstrap" level={80} />
            <SkillBar name="Regosting" level={88} />
          </div>

          {/* Column 2: MLOps */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-6 border-b-2 border-tech-blue pb-2">
              MLOps
            </h3>
            <SkillBar name="MLOps" level={90} />
            <SkillBar name="Pipeline" level={95} />
            <SkillBar name="Conservator" level={85} />
            <SkillBar name="Ricon" level={80} />
            <SkillBar name="Bontime" level={82} />
          </div>

          {/* Column 3: Languages */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-6 border-b-2 border-tech-blue pb-2">
              Languages
            </h3>
            <SkillBar name="Code" level={98} />
            <SkillBar name="Python" level={95} />
            <SkillBar name="SQL" level={90} />
            <SkillBar name="JSON" level={95} />
            <SkillBar name="HTML/CSS" level={85} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;