'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <motion.div
      className="text-center p-4 bg-white rounded-lg shadow-lg border border-fb-grey/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h4 className="text-3xl font-bold text-fb-blue">{value}</h4>
      <p className="text-fb-grey text-sm">{label}</p>
    </motion.div>
  );
};

export default StatCard;
