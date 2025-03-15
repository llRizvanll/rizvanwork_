'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceData {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
  onTechClick: (tech: string) => void;
}

export default function ExperienceCard({ experience: exp, index, onTechClick }: ExperienceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };
  
  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200 
      } 
    },
    hover: { 
      scale: 1.1, 
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 relative ${
        index % 2 === 0 ? 'md:text-left' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline node for desktop */}
      <motion.div 
        className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white 
                   shadow-lg transform -translate-x-1/2 md:block hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 + (index * 0.1), duration: 0.4, type: "spring" }}
      />

      {/* Date badge - mobile: top, desktop: centered */}
      <motion.div 
        className="md:hidden absolute -top-2 -left-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + (index * 0.1) }}
      >
        {exp.period}
      </motion.div>

      {/* Content area */}
      <motion.div
        className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl 
                   transition-all duration-500 border border-blue-100
                   transform hover:-translate-y-2 relative
                   md:w-[calc(50%-20px)] w-full p-6 z-10`}
        whileHover={{ 
          boxShadow: "0 20px 30px rgba(59,130,246,0.1)",
        }}
      >
        {/* Date badge for desktop */}
        <motion.div
          className="hidden md:block absolute top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-1.5 rounded-full shadow-lg z-20"
          style={index % 2 === 0 ? { right: '-15px' } : { left: '-15px' }}
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + (index * 0.1) }}
        >
          {exp.period}
        </motion.div>

        <div className="mb-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 mt-2">{exp.role}</h3>
          <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            {exp.company}
            <span className="w-2 h-2 rounded-full bg-blue-500/80 inline-block"></span>
            <span className="text-gray-500 text-sm font-normal">{exp.location}</span>
          </h4>
        </div>

        <motion.ul 
          className="space-y-2 mb-6 list-none"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {exp.description.map((item, i) => (
            <motion.li 
              key={i} 
              variants={listItemVariants}
              className="text-sm leading-relaxed flex items-start gap-2 text-gray-600"
            >
              <span className="text-blue-500 mt-1">▹</span> {item}
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {exp.tech.map((tech, i) => (
            <motion.span
              key={i}
              variants={techBadgeVariants}
              whileHover="hover"
              custom={i}
              className="px-3 py-1 text-sm bg-blue-50 text-blue-600 
                       rounded-full hover:bg-gradient-to-r from-blue-600 to-indigo-600 hover:text-white 
                       transition-colors cursor-pointer border border-blue-100"
              onClick={() => onTechClick(tech)}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}