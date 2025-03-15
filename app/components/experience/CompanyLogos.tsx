"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "../Section";
import CompanyLogoCard from "./CompanyLogoCard"; 
import Typewriter from 'typewriter-effect';
import { trackEvent } from '../../GoogleAnalytics';
import { useTheme } from '../../context/ThemeContext';

const CompanyLogos: React.FC = () => {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);

  useEffect(() => {
    // Only use loading animation in hacker theme
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800);
      const timer2 = setTimeout(() => setShowCompanies(true), 1500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Immediately show content in default theme
      setLoaded(true);
      setShowCompanies(true);
    }
  }, [isHackerTheme]);

  // Reset component state when theme changes
  useEffect(() => {
    // Any reset logic needed
  }, [theme]);

  const companies = [
    {
      name: "Loop Health",
      logo: "/images/companies/loophealth.png",
      alt: "Loop Health Logo",
      year: "2022-2023",
      location: "Bangalore, India",
    },
    {
      name: "Baker Hughes",
      logo: "/images/companies/bhge.png",
      alt: "Baker Hughes Logo",
      year: "2017-2022",
      location: "Bangalore, India",
    },
    {
      name: "Shaw Academy",
      logo: "/images/companies/shaw_acad.jpg",
      alt: "Shaw Academy Logo",
      year: "2016-2017",
      location: "Bangalore, India",
    },
    {
      name: "Justdial",
      logo: "/images/companies/justdial.jpeg",
      alt: "Justdial Logo",
      year: "2012-2016",
      location: "Bangalore, India",
    },
    {
      name: "Xelp Design and Tech",
      logo: "/images/companies/xelp.png",
      alt: "Xelp Design and Tech Logo",
      year: "2015-2016",
      location: "Bangalore, India",
    },
  ];

  const handleCardClick = (companyName: string) => {
    trackEvent('click', 'company_logos', `company_${companyName.toLowerCase().replace(/\s+/g, '_')}`);
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
            isHackerTheme ? "text-green-400 font-mono glitch-text" : "text-fb-black"
          }`}>
            {isHackerTheme ? "$ scan corporate_entities" : "Companies I've Worked With"}
          </h2>
          <div className={`w-20 h-1 mx-auto ${
            isHackerTheme ? "bg-green-500" : "bg-fb-blue"
          }`}></div>
        </motion.div>

        {!loaded && isHackerTheme ? (
          <div className="font-mono text-green-400 space-y-2 text-center">
            <p>$ exec /bin/identify_corporations</p>
            <p className="text-green-300/70">Scanning corporate entities...</p>
            <div className="loading-dots flex justify-center space-x-2 mt-4">
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showCompanies ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {companies.map((company, index) => (
                <CompanyLogoCard
                  key={company.name}
                  company={company}
                  index={index}
                  onCardClick={() => handleCardClick(company.name)}
                />
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16 max-w-2xl mx-auto"
            >
              <h3 className={`text-2xl font-semibold mb-4 ${
                isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
              }`}>
                {isHackerTheme ? "$ echo \"Global Experience\"" : "Global Experience"}
              </h3>
              <div className={isHackerTheme ? "border border-green-500/30 bg-black/70 p-5 rounded-lg" : ""}>
                <p className={isHackerTheme ? "text-green-300/80 font-mono" : "text-gray-700"}>
                  A decade of experience working with companies across India and the United States,
                  contributing to diverse projects and teams.
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
            content: '$ scan corporate_entities';
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
};

export default CompanyLogos;
