"use client";

import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface ExperienceData {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceData[];
  animateTimeline: boolean;
  animation: {
    staggerDelay: number;
    timelineDuration: number;
  };
  onTechClick: (tech: string) => void;
}

export default function ExperienceTimeline({ 
  experiences, 
  animateTimeline, 
  animation,
  onTechClick 
}: ExperienceTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animation.staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { 
        duration: animation.timelineDuration,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div 
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/80 via-blue-600/60 to-blue-400/20 
                 transform -translate-x-1/2 md:block hidden"
        variants={timelineVariants}
        initial="hidden"
        animate={animateTimeline ? "visible" : "hidden"}
        style={{ transformOrigin: "top" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="relative space-y-12 md:space-y-24"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={`${exp.company}-${exp.role}`}
              experience={exp}
              index={index}
              onTechClick={onTechClick}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 