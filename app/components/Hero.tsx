"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { trackEvent } from "../GoogleAnalytics";

export default function Hero() {
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
  const [showCursor, setShowCursor] = useState(false);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 pb-12 px-4">
      {/* Custom cursor (only shows on desktop) */}
      {!mobile && (
        <motion.div
          className="custom-cursor hidden md:block"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            opacity: showCursor ? 1 : 0,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: showCursor ? 1 : 0,
            x: cursorPosition.x - 12,
            y: cursorPosition.y - 12,
          }}
          transition={{ duration: 0.15 }}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-fb-black">
              Rizvan Hawaldar
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-fb-blue">
              <Typewriter
                options={{
                  strings: [
                    'Mobile Software Engineer',
                    'Mobile DevOps Engineer',
                    'Mobile AI Engineer',
                    'Performance Engineer for Mobile',
                    'React Native Migration',
                    'Mobile Security Engineer',
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
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 mx-auto md:mx-0 max-w-md text-gray-600">
              I build exceptional mobile experiences with code and creativity. Specializing in cross-platform solutions and AI/ML integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium bg-fb-blue text-white hover:bg-fb-blue-dark transition-colors"
                onClick={handleContactClick}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/assets/rizvan_hawaldar_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium bg-white text-fb-blue border border-fb-blue hover:bg-fb-blue/10 transition-colors"
                onClick={handleResumeClick}
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-3/4 sm:w-2/3 md:w-5/12 max-w-xs sm:max-w-sm md:max-w-none"
          >
            <div className="relative rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Rizvan Hawaldar"
                width={500}
                height={500}
                className="rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs text-fb-blue mb-2 opacity-80 font-medium">Scroll Down</span>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
          className="w-6 h-10 border-2 border-fb-blue rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
            className="w-1.5 h-3 bg-fb-blue rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* CSS for custom cursor */}
      <style jsx global>{`
        /* ... existing styles ... */
      `}</style>
    </section>
  );
}
