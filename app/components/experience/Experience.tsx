"use client";

import { motion } from "framer-motion";
import Section from "../Section";
import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import { trackEvent } from '../../GoogleAnalytics';
import { useTheme } from '../../context/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    // Only show loading effect in hacker theme
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800);
      const timer2 = setTimeout(() => setShowExperience(true), 1500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Immediately show content in default theme
      setLoaded(true);
      setShowExperience(true);
    }
  }, [isHackerTheme]);

  // Reset component state when theme changes
  useEffect(() => {
    setActiveExp(0);
  }, [theme]);

  const experiences = [
    {
      role: "Software Engineer III",
      company: "Loop Health",
      period: "August 2022 - November 2024",
      location: "Bangalore, India",
      description: [
        "Leading the development of Native and React Native mobile applications for healthcare and insurance industry",
        "Implementing real-time consultation features and insurance claim processing",
        "Collaborating with Product Managers and stakeholders to enhance mobile app functionality",
        "Mentoring junior developers and conducting code reviews",
      ],
      tech: ["React Native", "Android", "iOS", "TypeScript", "Redux"],
    },
    {
      role: "Staff Software Engineer",
      company: "Baker Hughes",
      period: "Jun 2017 - August 2022",
      location: "Bangalore, India",
      description: [
        "Led AI Visualization Framework development and Business Intelligence mobile apps",
        "Architected and implemented cross-platform mobile solutions",
        "Managed team of 5 developers and coordinated with global stakeholders",
        "Improved app performance by 40% through optimization techniques",
      ],
      tech: ["Kotlin", "Java", "React Native", "Python", "TensorFlow"],
    },
    {
      role: "Senior Software Engineer",
      company: "Shaw Academy",
      period: "Dec 2016 - May 2017",
      location: "Bangalore, India",
      description: [
        "Spearheaded the development of inaugural Android App",
        "Integrated Live webinars, Video recordings, and Chat functionality",
        "Implemented payment gateway and subscription management",
        "Achieved 100K+ downloads within first three months",
      ],
      tech: ["Android", "Java", "Firebase", "WebRTC"],
    },
    {
      period: "2015 - 2016",
      role: "Project Lead",
      company: "Xelp Design and Tech",
      location: "Bangalore, India",
      description: [
        "Led Android team at startup incubator, overseeing logistics, fintech, and real estate applications.",
        "Managed multiple client projects in logistics, fintech, and real estate domains",
        "Led technical architecture decisions for Android applications",
        "Mentored junior developers and implemented best practices",
      ],
      tech: ["Android", "Java", "Firebase", "WebRTC"],
    },
    {
      period: "2012 - 2016",
      role: "Team Lead - Software Engineer",
      company: "Justdial Limited",
      description: [
        "Led development of scalable native Android app for multiple countries and managed team of 4-5 members.",
        "Scaled app to serve millions of users across multiple countries",
        "Implemented agile methodologies and improved team productivity",
        "Reduced app crash rate by 60% through robust error handling",
        "Mentored and managed a team of 4-5 developers",
      ],
      location: "Bangalore, India",
      tech: ["Android", "Java", "Firebase", "WebRTC"],
    },
    {
      role: "Software Engineer - Contract",
      company: "US Clients",
      period: "Present",
      location: "Remote",
      description: [
        "Implementing Insurance and finance based work for mobile apps",
        "Collaborating with Product Managers and stakeholders to enhance mobile app functionality",
        "Lets discuss over a phone call for more details if required...",
      ],
      tech: [
        "React Native",
        "Android",
        "iOS",
        "TypeScript",
        "Redux",
        "Kotlin",
        "Java",
      ],
    },
  ];

  const showNextExp = () => {
    setActiveExp((prev) => (prev < experiences.length - 1 ? prev + 1 : prev));
    trackEvent('click', 'experience', 'next_experience');
  };

  const showPrevExp = () => {
    setActiveExp((prev) => (prev > 0 ? prev - 1 : prev));
    trackEvent('click', 'experience', 'prev_experience');
  };

  return (
    <Section id="experience" className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 matrix-rain"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      
      <div className="content-wrapper max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono glitch-text">
            $ cat work_experience.log
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {!loaded ? (
          <div className="font-mono text-green-400 space-y-2 text-center">
            <p>$ loading career_data --decrypt</p>
            <p className="text-green-300/70">Decrypting professional experience...</p>
            <div className="w-full h-1 bg-green-900/30 rounded overflow-hidden mt-2">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {showExperience && (
              <>
                <div className="font-mono text-green-400 space-y-1 mb-6">
                  <p>$ ls -la /home/rizvan/career/</p>
                  <div className="w-full h-0.5 bg-green-500/30"></div>
                </div>
                
                <div className="border border-green-500/30 rounded-lg bg-black/70 shadow-lg overflow-hidden">
                  {/* Navigation controls */}
                  <div className="flex justify-between items-center px-4 py-2 bg-green-900/20 border-b border-green-500/30">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      career@rizvan:~$ cat job_{activeExp + 1}.txt
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={showPrevExp}
                        disabled={activeExp === 0}
                        className={`px-2 py-1 rounded border border-green-500/30 
                                  ${activeExp === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-900/30'}`}
                      >
                        ◀
                      </button>
                      <button 
                        onClick={showNextExp}
                        disabled={activeExp === experiences.length - 1}
                        className={`px-2 py-1 rounded border border-green-500/30
                                  ${activeExp === experiences.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-900/30'}`}
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                  
                  {/* Experience content */}
                  <motion.div 
                    key={activeExp}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-green-400 font-mono">
                        {experiences[activeExp].role}
                      </h3>
                      <h4 className="text-lg font-mono text-green-300">
                        {experiences[activeExp].company}
                      </h4>
                      <p className="text-green-300/70 font-mono">
                        <span className="text-green-500">&gt;</span> {experiences[activeExp].period} | {experiences[activeExp].location}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-green-400 font-mono mb-2">$ ./view_responsibilities</p>
                      <ul className="space-y-2 text-green-300/80 font-mono">
                        {experiences[activeExp].description.map((item, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm leading-relaxed flex items-start"
                          >
                            <span className="text-green-500 mr-2">&gt;</span> {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <p className="text-green-400 font-mono w-full mb-2">$ ./list_technologies</p>
                      {experiences[activeExp].tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 text-sm bg-green-900/20 text-green-400 border border-green-500/30
                                   rounded-md font-mono hover:bg-green-800/40 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="text-center mt-2 text-green-300/60 text-sm font-mono">
                  <p>[{activeExp + 1}/{experiences.length}] - Use arrow controls to navigate between experiences</p>
                </div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono">
                $ cat /achievements.txt
              </h3>
              <div className="border border-green-500/30 bg-black/70 p-5 rounded-lg">
                <p className="text-green-300/80 font-mono">
                  Successfully delivered 10+ mobile applications, led multiple
                  development teams, and implemented innovative solutions that
                  improved user engagement and business metrics.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      
      {/* CSS for effects - only applied in hacker theme */}
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
            content: '$ cat work_experience.log';
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
    </Section>
  );
}
