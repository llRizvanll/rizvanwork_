'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { useTheme } from '../context/ThemeContext'

export default function AnyOtherPage() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), isHackerTheme ? 1000 : 0);
    return () => clearTimeout(timer);
  }, [isHackerTheme]);
  
  return (
    <PageLayout title={isHackerTheme ? "$ other_page.sh" : "Page Title"}>
      {!loaded && isHackerTheme ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-green-400 font-mono">
          <p>$ loading content</p>
          <p className="text-green-300/70 mt-2">Processing data...</p>
          <div className="loading-dots flex justify-center space-x-2 mt-4">
            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : ""}
        >
          <p className={isHackerTheme ? "text-green-300/90 font-mono" : "text-gray-700"}>
            This is an example of how to use the PageLayout component to wrap any page content.
            It provides consistent theme styling across all pages.
          </p>
        </motion.div>
      )}
    </PageLayout>
  )
} 