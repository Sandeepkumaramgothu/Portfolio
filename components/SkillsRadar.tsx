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
      <h3 className="text-xl font-bold text-white mb-4 text-center uppercase tracking-widest">Proficiency Radar</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#ef4444', fontSize: 11, fontWeight: 'bold' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Sandeep"
            dataKey="A"
            stroke="#D00000"
            strokeWidth={3}
            fill="#D00000"
            fillOpacity={0.4}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#000', borderColor: '#D00000', color: '#fff' }}
            itemStyle={{ color: '#ef4444' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;