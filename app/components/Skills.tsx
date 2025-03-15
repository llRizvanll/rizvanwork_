"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Section from "./Section";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

interface Skill {
  name: string;
  level: number; // Now represents rating out of 5
  icon?: string;
}

export default function Skills() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    // Only use loading animation in hacker theme
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800);
      const timer2 = setTimeout(() => setShowSkills(true), 1500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Immediately show content in default theme
      setLoaded(true);
      setShowSkills(true);
    }
  }, [isHackerTheme]);

  // Reset component state when theme changes
  useEffect(() => {
    // Any reset logic needed when theme changes
  }, [theme]);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Kotlin", level: 4.5 },
        { name: "Java", level: 5 },
        { name: "React Native", level: 4 },
        { name: "iOS Development", level: 4 }
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 4.5 },
        { name: "TypeScript", level: 4.5 },
        { name: "JavaScript", level: 5 },
        { name: "HTML/CSS", level: 4.5 }
      ]
    },
    {
      title: "Backend & DevOps",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "CI/CD", level: 4 },
        { name: "Python", level: 3.5 },
        { name: "Cloud Services", level: 4 }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar 
          key={`full-${i}`} 
          className={isHackerTheme ? "text-green-400" : "text-yellow-400"} 
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FaStarHalf 
          key="half" 
          className={isHackerTheme ? "text-green-400" : "text-yellow-400"} 
        />
      );
    }

    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar 
          key={`empty-${i}`} 
          className={isHackerTheme ? "text-green-400/30" : "text-gray-300"} 
        />
      );
    }

    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section className={isHackerTheme ? "bg-black relative overflow-hidden" : ""}>
      {isHackerTheme && (
        <>
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="absolute inset-0 grid-pattern"></div>
        </>
      )}
      
      <div className={`max-w-6xl mx-auto px-4 ${isHackerTheme ? "relative z-10" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            isHackerTheme 
              ? "text-green-400 font-mono glitch-text" 
              : "text-fb-black"
          }`}>
            {isHackerTheme ? "$ profile --skills" : "Skills & Expertise"}
          </h2>
          <div className={`w-20 h-1 mx-auto ${
            isHackerTheme ? "bg-green-500" : "bg-fb-blue"
          }`}></div>
        </motion.div>

        {!loaded && isHackerTheme ? (
          <div className="font-mono text-green-400 space-y-2 text-center">
            <p>$ scanning /usr/local/skills</p>
            <p className="text-green-300/70">Loading skill database...</p>
            <div className="loading-dots flex justify-center space-x-2 mt-4">
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showSkills ? 1 : 0, y: showSkills ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-lg ${
                    isHackerTheme 
                      ? "bg-black/70 border border-green-500/30" 
                      : "bg-white shadow-lg"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h3 className={`text-xl font-semibold ${
                      isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
                    }`}>
                      {isHackerTheme ? `$ ${category.title.toLowerCase().replace(/\s+/g, '_')}` : category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className={isHackerTheme ? "text-green-300 font-mono" : "text-fb-black font-medium"}>
                            {skill.name}
                          </span>
                          <div className="flex space-x-1">
                            {renderStars(skill.level)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <h3 className={`text-2xl font-semibold text-center mb-8 ${
                isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
              }`}>
                {isHackerTheme ? "$ ls additional_expertise/" : "Additional Expertise"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Git", "Jenkins", "Firebase", "Redux", "GraphQL", "REST APIs",
                  "Unit Testing", "Agile", "Scrum", "Team Leadership", "Jest", "Performance improvements","Migration native to react native",
                  "Migration react native to native","OneSignal", "Huewai apps management","Push Notifications","Github actions","fastlane","gradle"
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
                      isHackerTheme 
                        ? "bg-green-900/20 text-green-400 border border-green-500/30 hover:bg-green-800/40 hover:border-green-400 font-mono" 
                        : "bg-fb-blue/10 text-fb-blue hover:bg-fb-blue hover:text-white"
                    } transition-all`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </>
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
            content: '$ profile --skills';
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