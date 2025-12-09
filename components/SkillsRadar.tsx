import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const data = [
  { subject: 'LLM & GenAI', A: 95, fullMark: 100 },
  { subject: 'MLOps', A: 90, fullMark: 100 },
  { subject: 'AI Safety', A: 95, fullMark: 100 },
  { subject: 'Data Eng', A: 85, fullMark: 100 },
  { subject: 'Cloud (AWS)', A: 88, fullMark: 100 },
  { subject: 'Visualization', A: 80, fullMark: 100 },
];

const SkillsRadar: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-slate-800/50 rounded-2xl p-4 border border-slate-700 shadow-xl backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Technical Proficiency</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Sandeep"
            dataKey="A"
            stroke="#06b6d4"
            strokeWidth={2}
            fill="#06b6d4"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
            itemStyle={{ color: '#22d3ee' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;