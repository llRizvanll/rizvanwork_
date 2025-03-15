'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface Company {
  name: string;
  logo: string;
  alt: string;
  year: string;
  location: string;
}

interface CompanyLogoCardProps {
  company: Company;
  index: number;
  onCardClick: () => void;
}

const CompanyLogoCard: React.FC<CompanyLogoCardProps> = ({ company, index, onCardClick }) => {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isHackerTheme 
          ? "0 0 15px rgba(0, 255, 0, 0.3)" 
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`${
        isHackerTheme 
          ? "bg-black/70 border border-green-500/30 rounded-lg p-5" 
          : "bg-white rounded-lg p-5 shadow-lg"
      } cursor-pointer overflow-hidden`}
      onClick={onCardClick}
    >
      <div className="relative flex flex-col items-center">
        {isHackerTheme && (
          <div className="w-full flex justify-between items-center mb-4 pb-2 border-b border-green-500/30">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-green-400/70 font-mono">company-scan.sh</div>
          </div>
        )}
        
        <div className={`relative w-24 h-24 mb-4 flex items-center justify-center ${
          isHackerTheme 
            ? "border border-green-500/20 rounded-lg overflow-hidden bg-white/10 p-2" 
            : ""
        }`}>
          {isHackerTheme && <div className="absolute inset-0 bg-grid-green opacity-20"></div>}
          <Image
            src={company.logo}
            alt={company.alt}
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        
        <h3 className={`text-lg font-bold text-center mb-1 ${
          isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
        }`}>
          {company.name}
        </h3>
        <div className="text-center mt-2 space-y-1">
          <p className={isHackerTheme ? "text-green-300/80 text-sm font-mono" : "text-gray-600 text-sm"}>
            {company.year}
          </p>
          <p className={isHackerTheme ? "text-green-300/60 text-sm font-mono" : "text-gray-500 text-sm"}>
            {company.location}
          </p>
        </div>
        
        {isHackerTheme && (
          <div className="mt-4 text-sm text-green-400 font-mono">
            $ cat {company.name.toLowerCase().replace(/\s+/g, '_')}.log <span className="animate-pulse">▌</span>
          </div>
        )}
      </div>
      
      {/* CSS for background grid effect */}
      {isHackerTheme && (
        <style jsx>{`
          .bg-grid-green {
            background-image: 
              linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px);
            background-size: 8px 8px;
          }
        `}</style>
      )}
    </motion.div>
  );
};

export default CompanyLogoCard;