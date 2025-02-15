'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  location,
  description,
  tech,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-fb-grey/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-fb-blue">{role}</h3>
      <h4 className="text-lg font-semibold text-fb-black">{company}</h4>
      <p className="text-fb-grey">{period} | {location}</p>
      <ul className="list-disc list-inside text-fb-grey space-y-2 mt-4">
        {description.map((item, index) => (
          <li key={index} className="text-sm leading-relaxed">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((techItem, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-fb-blue/10 text-fb-blue rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;