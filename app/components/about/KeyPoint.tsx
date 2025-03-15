'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface KeyPointProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const KeyPoint: React.FC<KeyPointProps> = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div 
      className={`flex items-start p-4 rounded-lg ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-2xl mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-mono mb-1">{title}</h4>
        <p className="text-green-300/80 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default KeyPoint;