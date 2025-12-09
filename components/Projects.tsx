import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Key Projects</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Showcasing work in LLM Security, UAV Detection, and Data Analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >

              {/* Placeholder image using picsum for aesthetics - deterministic based on index */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/${index + 12}/800/600`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                </div>

                <p className="text-xs text-cyan-400 mb-4 font-mono">{project.period}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.slice(0, 2).map((desc, dIdx) => (
                    <li key={dIdx} className="text-slate-300 text-sm line-clamp-3">
                      • {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {/* Simulated Links - Only show if valid */}
                  <a href="#" className="flex items-center gap-1 text-sm text-white hover:text-cyan-400 transition-colors">
                    <Github size={16} /> Code
                  </a>
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-cyan-400 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;