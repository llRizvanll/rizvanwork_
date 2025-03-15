'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, className = '' }) => {
  return (
    <motion.div 
      className={`text-center p-4 rounded-lg ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold font-mono">{value}</h3>
      <p className="text-sm text-green-300/70 mt-1 font-mono">{label}</p>
    </motion.div>
  );
};

export default StatCard;