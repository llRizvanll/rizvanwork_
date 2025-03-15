'use client'

import { trackEvent } from '../GoogleAnalytics'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';

  const handleFooterLinkClick = (linkName: string) => {
    trackEvent('click', 'footer', `link_${linkName.toLowerCase()}`);
  };

  return (
    <footer className={`py-8 ${isHackerTheme ? "bg-black text-green-400 border-t border-green-500/30" : "bg-gray-100 text-gray-600"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={isHackerTheme ? "font-mono" : ""}>
              © {new Date().getFullYear()} {isHackerTheme ? "RZV::TERMINAL" : "Rizvan Hawaldar"}. {isHackerTheme ? "All_rights_reserved." : "All rights reserved."}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://linkedin.com/in/rizvanhawaldar"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isHackerTheme ? "text-green-400 hover:text-green-300 font-mono" : "text-gray-600 hover:text-fb-blue"} transition-colors`}
              whileHover={{ y: -2 }}
              onClick={() => handleFooterLinkClick('linkedin')}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/llRizvanll"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isHackerTheme ? "text-green-400 hover:text-green-300 font-mono" : "text-gray-600 hover:text-fb-blue"} transition-colors`}
              whileHover={{ y: -2 }}
              onClick={() => handleFooterLinkClick('github')}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://twitter.com/llrizvanll"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isHackerTheme ? "text-green-400 hover:text-green-300 font-mono" : "text-gray-600 hover:text-fb-blue"} transition-colors`}
              whileHover={{ y: -2 }}
              onClick={() => handleFooterLinkClick('twitter')}
            >
              Twitter
            </motion.a>
          </div>
        </div>
        
        {isHackerTheme && (
          <div className="mt-4 border-t border-green-500/20 pt-4 text-center">
            <p className="text-green-300/60 text-sm font-mono">
              $ echo "Built with Next.js, Framer Motion and Tailwind CSS"
            </p>
            <div className="mt-2 flex justify-center space-x-1">
              <span className="inline-block w-3 h-3 bg-green-500 animate-pulse"></span>
              <span className="inline-block w-3 h-3 bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="inline-block w-3 h-3 bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
} 