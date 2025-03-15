'use client'

import React from 'react';
import { motion } from 'framer-motion';
import repoData from '@/data/githubrepo.json';

const GitHubRepos: React.FC = () => {
  const { heading, repositories } = repoData;
  
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <motion.div
              key={repo.name}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-700 mb-4">{repo.description}</p>
              <p className="text-gray-500">⭐ {repo.stars} Stars</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;