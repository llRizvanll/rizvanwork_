'use client'

import React from 'react';
import { motion } from 'framer-motion';

const repositories = [
  {
    name: "CliqApp",
    description: "An e-commerce app built with React Native that runs on Android & iOS.",
    stars: 111,
    url: "https://github.com/llRizvanll/CliqApp",
  },
  {
    name: "RN-Scalable-Rental-App",
    description: "A sample app showcasing clean architecture and scalability with solid principles.",
    stars: 40,
    url: "https://github.com/llRizvanll/RN-Scalable-Rental-App",
  },
  {
    name: "InshortApp",
    description: "Demo app similar to Inshorts.",
    stars: 28,
    url: "https://github.com/llRizvanll/InshortApp",
  },
];

const GitHubRepos: React.FC = () => {
  return (
    <section className="py-16 bg-airbnb-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-airbnb-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-6 px-4">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.name}
                className="bg-white p-8 rounded-xl shadow-lg min-w-[320px] flex-shrink-0 border border-airbnb-grey hover:border-airbnb-red transition-colors"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-airbnb-dark">
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-airbnb-red transition-colors"
                  >
                    {repo.name}
                  </a>
                </h3>
                <p className="text-airbnb-light mb-6">{repo.description}</p>
                <div className="flex items-center text-airbnb-light">
                  <span className="mr-2">⭐</span>
                  <span>{repo.stars} Stars</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;