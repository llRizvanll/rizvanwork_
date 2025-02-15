'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CompanyLogoCardProps {
  company: {
    name: string;
    logo: string;
    alt: string;
    year: string;
    location: string;
  };
  index: number;
}

const CompanyLogoCard: React.FC<CompanyLogoCardProps> = ({ company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative w-40 h-20 mb-4 transition-all duration-300 filter">
        <Image
          src={company.logo}
          alt={company.alt}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
      <div className="text-center transition-all duration-300 transform group-hover:scale-105">
        <p className="font-serif text-[#222222] font-medium">{company.name}</p>
        <p className="text-sm text-[#666666] mt-1">{company.year}</p>
        <p className="text-xs text-[#888888] mt-0.5 italic">{company.location}</p>
      </div>
    </motion.div>
  );
};

export default CompanyLogoCard;