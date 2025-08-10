'use client';

import { motion } from 'framer-motion';

interface Achievement {
  number: string;
  text: string;
}

interface AchievementsData {
  title: string;
  subtitle: string;
  description: string;
  stats: Achievement[];
}

interface AchievementsSectionProps {
  achievements: AchievementsData;
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center mt-20 max-w-2xl mx-auto"
    >
      <motion.div
        className="inline-block p-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-medium mb-6 border border-blue-100"
        whileHover={{
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          transition: { duration: 0.3 },
        }}
      >
        {achievements.title}
      </motion.div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {achievements.subtitle}
      </h3>
      <p className="text-gray-600">
        {achievements.description}
      </p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Achievement cards */}
        {achievements.stats.map((achievement, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 w-36 h-36 flex flex-col items-center justify-center transition-all hover:shadow-lg border border-blue-50"
            whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: '0 12px 25px rgba(59, 130, 246, 0.1)' }}
          >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">{achievement.number}</span>
            <span className="text-sm text-gray-600 text-center mt-2">{achievement.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
