'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'
import Typewriter from 'typewriter-effect'

export default function About() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800);
      const timer2 = setTimeout(() => setShowContent(true), 1500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setLoaded(true);
      setShowContent(true);
    }
  }, [isHackerTheme]);

  return (
    <>
      <Navbar />
      <main className={`pt-24 min-h-screen ${isHackerTheme ? "bg-black text-green-400 relative overflow-hidden" : ""}`}>
        {isHackerTheme && (
          <>
            <div className="absolute inset-0 matrix-rain"></div>
            <div className="absolute inset-0 grid-pattern"></div>
          </>
        )}
        
        <div className={`container mx-auto px-4 py-12 ${isHackerTheme ? "relative z-10" : ""}`}>
          {!loaded && isHackerTheme ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-green-400 font-mono">
              <p>$ loading about_page.bin</p>
              <p className="text-green-300/70 mt-2">Decrypting personal data...</p>
              <div className="loading-dots flex justify-center space-x-2 mt-4">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl font-bold mb-8 ${isHackerTheme ? "text-green-500 font-mono glitch-text" : ""}`}>
                {isHackerTheme ? (
                  "$ whoami"
                ) : (
                  "About Me"
                )}
              </h1>
              
              <div className="max-w-3xl">
                <div className={`mb-8 ${isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : ""}`}>
                  <h2 className={`text-2xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                    {isHackerTheme ? "$ cat profile.txt" : "My Journey"}
                  </h2>
                  <div className={isHackerTheme ? "text-green-300/90 font-mono space-y-4" : "text-gray-700 space-y-4"}>
                    <p>I'm a passionate Mobile Software Engineer with a deep expertise in React Native, Kotlin, and iOS development.</p>
                    <p>With over 8 years of software development experience, I've worked across various domains, creating robust and scalable mobile applications.</p>
                    <p>My journey began with Android development, which later expanded to cross-platform solutions with React Native. I've also worked extensively with AI/ML integrations, enhancing mobile applications with intelligent features.</p>
                  </div>
                </div>
                
                <div className={`mb-8 ${isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : ""}`}>
                  <h2 className={`text-2xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                    {isHackerTheme ? "$ grep 'skills' /usr/bin/tech" : "Technical Expertise"}
                  </h2>
                  <div className={isHackerTheme ? "text-green-300/90 font-mono space-y-4" : "text-gray-700 space-y-4"}>
                    <p>My core expertise lies in mobile development, with a strong focus on creating smooth, intuitive user experiences. I believe in writing clean, maintainable code and implementing efficient architectures.</p>
                    <p>I'm always exploring new technologies and approaches. Recently, I've been focusing on AI/ML integrations in mobile apps, enhancing user experiences with intelligent features.</p>
                  </div>
                </div>
                
                <div className={isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : ""}>
                  <h2 className={`text-2xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                    {isHackerTheme ? "$ echo $INTERESTS" : "Beyond Coding"}
                  </h2>
                  <div className={isHackerTheme ? "text-green-300/90 font-mono space-y-4" : "text-gray-700 space-y-4"}>
                    <p>When I'm not coding, I enjoy exploring the latest tech trends, reading about AI advancements, and contributing to open-source projects.</p>
                    <p>I'm also passionate about mentoring junior developers and sharing knowledge through tech communities.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        {isHackerTheme && (
          <style jsx>{`
            .matrix-rain {
              background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,255,0,0.05) 100%);
              background-size: 100% 100%;
              animation: rain 5s linear infinite;
            }
            
            .grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px);
              background-size: 20px 20px;
            }
            
            @keyframes rain {
              0% { background-position: 0 0; }
              100% { background-position: 0 100%; }
            }
            
            .glitch-text {
              position: relative;
            }
            
            .glitch-text::before {
              content: '$ whoami';
              position: absolute;
              left: -2px;
              text-shadow: 2px 0 #00ff00;
              top: 0;
              color: #00ff00;
              background: black;
              overflow: hidden;
              clip: rect(0, 900px, 0, 0);
              animation: glitch-anim 3s infinite linear alternate-reverse;
            }
            
            @keyframes glitch-anim {
              0% {
                clip: rect(0, 900px, 5px, 0);
              }
              20% {
                clip: rect(0, 900px, 5px, 0);
              }
              21% {
                clip: rect(0, 900px, 0, 0);
              }
              49% {
                clip: rect(0, 900px, 0, 0);
              }
              50% {
                clip: rect(0, 900px, 5px, 0);
              }
              100% {
                clip: rect(0, 900px, 0, 0);
              }
            }
          `}</style>
        )}
      </main>
      <Footer />
    </>
  )
} 