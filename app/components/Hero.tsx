"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { trackEvent } from "../GoogleAnalytics";
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';

  const techSkills = [
    { name: "A-I", logo: "/images/tech/ai_banner.webp" },
    { name: "React Native", logo: "/images/tech/rn_banner.png" },
    { name: "Kotlin", logo: "/images/tech/kt_banner.png" },
    { name: "Mobile DevOps", logo: "/images/tech/md_banner.png" },
    { name: "AI+ML", logo: "/images/tech/ai_plus_banner.jpg" },
    { name: "Ts/Js", logo: "/images/tech/jt_banner.webp" },
    { name: "Java", logo: "/images/tech/jv_banner.png" },
    { name: "Python", logo: "/images/tech/py_banner.png" },
  ];

  const [mobile, setIsMobile] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for mobile viewport width after component mounts
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 950);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Add event listener for mouse move
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Show terminal after a delay
    setTimeout(() => {
      setShowTerminal(true);
    }, 500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    trackEvent('click', 'hero', 'contact_button');
  };

  const handleResumeClick = () => {
    trackEvent('click', 'hero', 'resume_download');
  };

  const handleSkillClick = (skill: string) => {
    trackEvent('click', 'skill', skill);
  };

  // Binary background pattern
  const binaryPattern = Array(100).fill(0).map(() => 
    Math.random() > 0.5 ? '1' : '0'
  ).join('');

  return (
    <section className={`relative min-h-screen flex items-center ${
      isHackerTheme ? "bg-black text-green-400 overflow-hidden" : ""
    }`}>
      {isHackerTheme && (
        <>
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="absolute inset-0 grid-pattern"></div>
        </>
      )}
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        isHackerTheme ? "relative z-10" : ""
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isHackerTheme ? "text-green-500 font-mono" : "text-fb-black"
            }`}>
              {isHackerTheme ? (
                <span className="glitch-text">RIZVAN_HAWALDAR.SYS</span>
              ) : (
                "Rizvan Hawaldar"
              )}
            </h1>
            
            <h2 className={`text-xl md:text-2xl lg:text-3xl mb-6 ${
              isHackerTheme ? "text-green-400 font-mono" : "text-fb-blue"
            }`}>
              <Typewriter
                options={{
                  strings: [
                    'Mobile Software Engineer',
                    'React Native Expert',
                    'AI Engineering Enthusiast',
                    'Android & iOS Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h2>
            
            <p className={`text-lg mb-8 ${
              isHackerTheme ? "text-green-300/80 font-mono" : "text-gray-600"
            }`}>
              {isHackerTheme ? (
                <>Building mobile experiences with code and creativity. Specializing in cross-platform solutions and AI/ML integrations.</>
              ) : (
                <>I build exceptional mobile experiences with code and creativity. Specializing in cross-platform solutions and AI/ML integrations.</>
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-md text-lg font-medium ${
                  isHackerTheme
                    ? "bg-green-900/30 text-green-400 border border-green-500 hover:bg-green-800/40 font-mono"
                    : "bg-fb-blue text-white hover:bg-fb-blue-dark"
                } transition-colors`}
                onClick={handleContactClick}
              >
                {isHackerTheme ? "$ init_contact" : "Get In Touch"}
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-md text-lg font-medium ${
                  isHackerTheme
                    ? "bg-black text-green-400 border border-green-500/70 hover:border-green-400 font-mono"
                    : "bg-white text-fb-blue border border-fb-blue hover:bg-fb-blue/10"
                } transition-colors`}
                onClick={handleResumeClick}
              >
                {isHackerTheme ? "$ cat resume.pdf" : "View Resume"}
              </motion.a>
            </div>
            
            {isHackerTheme && (
              <div className="mt-8 font-mono text-green-400/70 text-sm">
                <p>$ whoami</p>
                <p className="text-green-300/60">user: rizvan_hawaldar</p>
                <p className="text-green-300/60">status: available_for_opportunities</p>
                <p className="text-green-300/60">location: bangalore_india</p>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-5/12"
          >
            <div className={`relative ${isHackerTheme ? "hexagon-container" : "rounded-full overflow-hidden"}`}>
              {isHackerTheme ? (
                <>
                  <div className="hexagon">
                    <div className="hexagon-content">
                      <Image
                        src="/images/profile.jpg"
                        alt="Rizvan Hawaldar"
                        width={500}
                        height={500}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="scan-line"></div>
                </>
              ) : (
                <Image
                  src="/images/profile.jpg"
                  alt="Rizvan Hawaldar"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for the hacker theme effects */}
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
          
          .hexagon-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
          }
          
          .hexagon {
            position: absolute;
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: rgba(0, 255, 0, 0.2);
            border: 2px solid rgba(0, 255, 0, 0.5);
            overflow: hidden;
          }
          
          .hexagon:before {
            content: "";
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: linear-gradient(45deg, rgba(0, 255, 0, 0.1) 0%, transparent 100%);
          }
          
          .hexagon-content {
            position: absolute;
            top: 3px;
            left: 3px;
            right: 3px;
            bottom: 3px;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            overflow: hidden;
          }
          
          .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 10px;
            background: rgba(0, 255, 0, 0.3);
            animation: scan 2s linear infinite;
            z-index: 10;
          }
          
          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }
          
          .glitch-text {
            position: relative;
          }
          
          .glitch-text::before {
            content: 'RIZVAN_HAWALDAR.SYS';
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
    </section>
  );
}
