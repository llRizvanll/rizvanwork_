'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface KeyPointProps {
  title: string;
  description: string;
  icon: string;
}

const KeyPoint: React.FC<KeyPointProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-fb-grey/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="text-lg font-semibold text-fb-blue">{title}</h4>
        <p className="text-fb-grey text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default KeyPoint;