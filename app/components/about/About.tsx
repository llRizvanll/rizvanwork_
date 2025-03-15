'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Section from '../Section';
import ProfileImage from './ProfileImage';
import KeyPoint from './KeyPoint';
import StatCard from './StatCard';
import Typewriter from 'typewriter-effect';
import { trackEvent } from '../../GoogleAnalytics';

const About: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowInfo(true), 1000);
    const timer2 = setTimeout(() => setShowStats(true), 2000);
    const timer3 = setTimeout(() => setShowKeyPoints(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Companies Worked", value: "7+" },
    { label: "Mobile Apps", value: "10+" },
  ];

  const keyPoints = [
    {
      title: "Mobile Development Specialist",
      description: "Specialized in Native and React Native mobile applications with a focus on performance and user experience.",
      icon: "📱",
    },
    {
      title: "Full Stack Developer",
      description: "Experienced in both frontend and backend development, creating comprehensive solutions.",
      icon: "💻",
    },
    {
      title: "Mobile DevOps Engineer",
      description: "Mobile with cloud integrated build pipeline management solution engineer.",
      icon: "📱",
    },
  ];

  const handleContactClick = () => {
    trackEvent('click', 'about', 'contact_button');
  };

  const handleDownloadCVClick = () => {
    trackEvent('click', 'about', 'download_cv_button');
  };

  // Binary background pattern
  const binaryPattern = Array(50).fill(0).map(() => 
    Math.random() > 0.5 ? '1' : '0'
  ).join('');

  return (
    <Section id="about" className="bg-black relative overflow-hidden">
      {/* Matrix-like rain animation (CSS overlay) */}
      <div className="matrix-rain absolute inset-0 opacity-10 pointer-events-none"></div>
      
      {/* Circuit board pattern */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-5"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Scanner line effect */}
      <motion.div 
        className="absolute h-[2px] w-full bg-green-500/30 blur-sm z-10"
        animate={{ 
          top: ["0%", "100%", "0%"],
          opacity: [0.1, 0.5, 0.1]
        }}
        transition={{ 
          duration: 10, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />

      {/* Binary code decoration */}
      <div className="absolute top-0 right-0 text-[8px] text-green-600/20 font-mono overflow-hidden h-full pointer-events-none">
        {binaryPattern}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="mb-2 text-green-500 font-mono">
            <Typewriter
              options={{
                strings: ['sys.init("about.module")'],
                autoStart: true,
                loop: false,
                cursor: '▋',
                delay: 50,
              }}
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-green-400">About_<span className="animate-pulse">|</span></h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative border-2 border-green-500/30 rounded-lg p-2 shadow-[0_0_15px_rgba(0,255,0,0.2)] overflow-hidden"
          >
            <ProfileImage />
            <div className="absolute top-0 left-0 right-0 p-2 bg-black/80 text-green-400 font-mono text-xs">
              user_profile.jpg :: encrypted
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/80 text-green-400 font-mono text-xs flex justify-between">
              <span>format: secure</span>
              <span className="animate-pulse">scanning...</span>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-black/80 border border-green-500/30 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.2)]"
          >
            {showInfo && (
              <div className="font-mono">
                <div className="mb-2 text-green-500">
                  <Typewriter
                    options={{
                      strings: ['$ cat user_info.dat'],
                      autoStart: true,
                      loop: false,
                      cursor: '▋',
                      delay: 40,
                    }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  ID: <span className="text-white">Mohammed Rizvan</span>
                </h3>

                <div className="text-green-300 leading-relaxed">
                  <span className="opacity-70">STATUS:</span> 12+ years of experience in application development with Android, Java, Kotlin, and React Native. Respectfully have worked with startups and MNCs, worked on real face-value products that are used by millions of users.
                </div>
              </div>
            )}

            {/* Stats Grid */}
            {showStats && (
              <div>
                <div className="mb-2 text-green-500 font-mono">
                  <Typewriter
                    options={{
                      strings: ['$ run stats.sh --verbose'],
                      autoStart: true,
                      loop: false,
                      cursor: '▋',
                      delay: 40,
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <StatCard label={stat.label} value={stat.value} className="border border-green-500/30 bg-black text-green-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Points */}
            {showKeyPoints && (
              <div>
                <div className="mb-2 text-green-500 font-mono">
                  <Typewriter
                    options={{
                      strings: ['$ cat skills.json | parse'],
                      autoStart: true,
                      loop: false,
                      cursor: '▋',
                      delay: 40,
                    }}
                  />
                </div>
                <div className="space-y-4">
                  {keyPoints.map((point, index) => (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <KeyPoint 
                        title={point.title} 
                        description={point.description} 
                        icon={point.icon} 
                        className="border border-green-500/30 bg-black/80 text-green-400 hover:bg-green-900/20"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="flex gap-4 pt-4 font-mono"
            >
              <div className="mb-2 text-green-500">
                <Typewriter
                  options={{
                    strings: ['$ cmd --options'],
                    autoStart: true,
                    loop: false,
                    cursor: '▋',
                    delay: 40,
                  }}
                />
              </div>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href="#contact"
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent text-green-400 border-2 border-green-500 rounded-lg hover:bg-green-900/20 transition-colors"
                >
                  &gt; Contact_Me
                </motion.a>
                <motion.a
                  href="/assets/rizvan_hawaldar_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDownloadCVClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-green-600/20 text-green-400 border-2 border-green-500 rounded-lg hover:bg-green-700/30 transition-colors"
                >
                  &gt; Download_CV
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add CSS for special effects */}
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
      `}</style>
    </Section>
  );
};

export default About;