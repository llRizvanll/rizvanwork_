'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../GoogleAnalytics';
import { useTheme } from '../context/ThemeContext';

const repositories = [
  {
    name: "CliqApp",
    description: "An e-commerce app built with React Native that runs on Android & iOS.",
    stars: 111,
    url: "https://github.com/llRizvanll/CliqApp",
    tech: ["React Native", "Redux", "Firebase"]
  },
  {
    name: "RN-Scalable-Rental-App",
    description: "A sample app showcasing clean architecture and scalability with solid principles.",
    stars: 40,
    url: "https://github.com/llRizvanll/RN-Scalable-Rental-App",
    tech: ["React Native", "TypeScript", "Clean Architecture"]
  },
  {
    name: "Rocket.Chat.ReactNative",
    description: "Official mobile client for Rocket.Chat communication platform.",
    stars: 1600,
    url: "https://github.com/llRizvanll/Rocket.Chat.ReactNative",
    tech: ["React Native", "JavaScript", "Communication"]
  },
  {
    name: "Covid19-Tracker-App",
    description: "A real-time COVID-19 tracker app built with React Native.",
    stars: 30,
    url: "https://github.com/llRizvanll/Covid19-Tracker-App",
    tech: ["React Native", "API Integration", "Data Visualization"]
  },
  {
    name: "DatingApp",
    description: "A dating app concept built with React Native.",
    stars: 25,
    url: "https://github.com/llRizvanll/DatingApp",
    tech: ["React Native", "UI/UX", "Firebase"]
  }
];

const GitHubRepos: React.FC = () => {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, isHackerTheme ? 1500 : 500);
    
    return () => clearTimeout(timer);
  }, [isHackerTheme]);

  const handleRepoClick = (repoName: string) => {
    trackEvent('click', 'projects', `repo_${repoName.toLowerCase()}`);
  };

  return (
    <div className={`w-full ${isHackerTheme ? "" : "py-4"}`}>
      <div className="max-w-5xl mx-auto">
        {loading ? (
          <div className={`text-center py-10 ${isHackerTheme ? "text-green-400 font-mono" : "text-gray-600"}`}>
            {isHackerTheme ? (
              <>
                <p>$ /bin/git fetch origin</p>
                <p className="text-green-300/70 mt-2">Scanning repositories...</p>
                <div className="loading-dots flex justify-center space-x-2 mt-4">
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
                </div>
              </>
            ) : (
              <>
                <p>Loading repositories...</p>
                <div className="flex justify-center mt-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-fb-blue"></div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <h3 className={`text-xl font-semibold mb-6 ${
              isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
            } text-center`}>
              {isHackerTheme ? "$ git ls-remote github.com:llRizvanll" : "GitHub Repositories"}
            </h3>
            
            {repositories && repositories.length > 0 ? (
              <div className={isHackerTheme ? "p-2" : ""}>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {repositories.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`p-5 rounded-lg ${
                        isHackerTheme 
                          ? "bg-black/80 border border-green-500/30 hover:border-green-400" 
                          : "bg-white shadow-md hover:shadow-lg"
                      } transition-all`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className={`font-bold mb-2 ${
                          isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
                        }`}>
                          {isHackerTheme ? `/${repo.name}` : repo.name}
                        </h4>
                        <div className={`flex items-center ${
                          isHackerTheme ? "text-green-400" : "text-yellow-500"
                        }`}>
                          <span className={isHackerTheme ? "font-mono" : ""}>
                            {repo.stars}
                          </span>
                          {isHackerTheme ? (
                            <span className="ml-1 font-mono">★</span>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      <p className={`text-sm mb-4 ${
                        isHackerTheme ? "text-green-300/80 font-mono" : "text-gray-600"
                      }`}>
                        {repo.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.tech.map(tech => (
                          <span 
                            key={tech} 
                            className={`text-xs px-2 py-1 rounded ${
                              isHackerTheme 
                                ? "bg-green-900/30 text-green-400 border border-green-500/30 font-mono" 
                                : "bg-fb-blue/10 text-fb-blue"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 inline-flex items-center gap-2 ${
                          isHackerTheme 
                            ? "text-green-400 hover:text-green-300 font-mono" 
                            : "text-fb-blue hover:text-fb-blue-dark"
                        } transition-colors text-sm`}
                        onClick={() => handleRepoClick(repo.name)}
                      >
                        {isHackerTheme ? (
                          <>$ git clone {repo.name} <span className="animate-pulse">▌</span></>
                        ) : (
                          <>View Repository <span>→</span></>
                        )}
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className={isHackerTheme ? "text-green-400 animate-pulse" : "text-gray-600"}>
                  {isHackerTheme ? "Parsing repository data..." : "No repositories found"}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GitHubRepos;