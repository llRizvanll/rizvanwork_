'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import ProfileImage from './ProfileImage';
import KeyPoint from './KeyPoint';
import StatCard from './StatCard';
import aboutData from '@/data/about.json';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Hook
function useCountUp(end: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let raf: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return count;
}

const About: React.FC = () => {
  const { stats, keyPoints } = aboutData;

  // Call useCountUp hooks at the top level for each stat individually
  const stat1Count = useCountUp(Number(stats[0]?.value) || 0);
  const stat2Count = useCountUp(Number(stats[1]?.value) || 0);
  const stat3Count = useCountUp(Number(stats[2]?.value) || 0);
  const stat4Count = useCountUp(Number(stats[3]?.value) || 0);

  // Create animated stats array with pre-computed values
  const animatedStats = stats.map((stat, index) => {
    const isNumber = !isNaN(Number(stat.value));
    let animatedValue;

    if (isNumber) {
      switch (index) {
      case 0: animatedValue = stat1Count; break;
      case 1: animatedValue = stat2Count; break;
      case 2: animatedValue = stat3Count; break;
      case 3: animatedValue = stat4Count; break;
      default: animatedValue = stat.value;
      }
    } else {
      animatedValue = stat.value;
    }

    return {
      ...stat,
      animatedValue,
    };
  });

  // Parallax effect for background
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    // Only enable on desktop
    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <Section id="about" className="relative overflow-hidden py-28 min-h-screen">
      {/* Layered background with parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300"
        ref={bgRef}
        aria-hidden
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        {/* Animated floating gradients */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[50%] rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `,
          }}
        ></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        ></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-blue-200 rounded-md opacity-30 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 px-4 py-1 bg-blue-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Discover My Story
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-gray-800 tracking-tight leading-tight">
            About <span className="text-blue-600">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Profile with modern frame */}
            <div className="flex items-center lg:justify-start justify-center mb-8 w-full">
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-300 blur-sm opacity-60 scale-110 z-0"></div>
                {/* Profile image */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                  <ProfileImage />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-3 right-1/2 translate-x-1/2 lg:right-[-1rem] lg:translate-x-0 bg-white text-blue-600 font-bold py-1.5 px-4 rounded-full shadow-md border border-blue-100 text-xs sm:text-sm z-20 whitespace-nowrap">
                  12+ Years Experience
                </div>
              </div>
            </div>
            {/* Stats with animated counters */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {animatedStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-3xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {stat.animatedValue}
                  </h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)' }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-blue-100/80 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Hello, I'm <span className="text-blue-600">Mohammed Rizvan</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-10 font-light">
                12+ years of experience in application development with Android, Java, Kotlin, and React Native. Respectfully have worked with startups and MNCs, worked on real face-value products that are used by millions of users.
              </p>
              {/* Key Points */}
              <div className="space-y-8 mt-12">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + 0.1 * index, duration: 0.6 }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl text-blue-500 shadow-sm border border-blue-100">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Call to Action */}
              <div className="flex flex-wrap gap-6 pt-12">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                  tabIndex={0}
                  aria-label="Contact Me"
                >
                  <FaEnvelope className="text-lg" />
                  Contact Me
                </motion.a>
                <motion.a
                  href="/assets/rizvan_hawaldar_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-blue-400 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                  tabIndex={0}
                  aria-label="Download CV"
                >
                  <FaDownload className="text-lg" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* CSS for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </Section>
  );
};

export default About;
