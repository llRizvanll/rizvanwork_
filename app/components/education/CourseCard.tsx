'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  name: string;
  period: string;
  provider: string;
  icon: string;
  certificate: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  period,
  provider,
  icon,
  certificate,
  description,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-xl font-bold ml-4">{name}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500 text-sm mt-2">{provider}</p>
        <p className="text-gray-500 text-sm">{period}</p>
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
};

export default CourseCard;