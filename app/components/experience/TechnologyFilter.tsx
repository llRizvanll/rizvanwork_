'use client';

import { motion } from 'framer-motion';

interface TechnologyFilterProps {
  technologies: string[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function TechnologyFilter({
  technologies,
  currentFilter,
  onFilterChange,
}: TechnologyFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            currentFilter === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/70 backdrop-blur-sm text-blue-600 hover:bg-white/90 border border-blue-200'
          }`}
        >
          All Experience
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => onFilterChange(tech)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              currentFilter === tech
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/70 backdrop-blur-sm text-blue-600 hover:bg-white/90 border border-blue-200'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
