'use client';

import React from 'react';
import { motion } from 'framer-motion';
import repoData from '@/data/githubrepo.json';

const GitHubRepos: React.FC = () => {
  const { heading, repositories } = repoData;

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>

        {/* Animated floating gradients */}
        <motion.div
          className="absolute -top-[10%] right-[20%] w-[40%] h-[30%] rounded-full bg-gradient-to-br from-blue-200/10 to-indigo-200/5 blur-3xl"
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)
            `,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)' }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-blue-100 transition-all transform"
            >
              <h3 className="text-xl font-semibold mb-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1">
                  <span>⭐</span> {repo.stars} Stars
                </span>
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center gap-1"
                  whileHover={{ x: 3 }}
                >
                  View Repo <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
