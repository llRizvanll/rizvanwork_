'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Section from '../Section';
import CourseCard from './CourseCard';
import Typewriter from 'typewriter-effect';
import { trackEvent } from '../../GoogleAnalytics';

const Education: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLoaded(true), 500);
    const timer2 = setTimeout(() => setShowEducation(true), 1200);
    const timer3 = setTimeout(() => setShowCourses(true), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const education = [
    {
      degree: "M.Tech - Master's Degree in Computing Systems and Infrastructure",
      school: "Birla Institute of Technology & Science, Pilani",
      year: "2018 - 2020",
      icon: "🎓",
      description: "Focused on advanced computing systems and infrastructure management"
    },
    {
      degree: "B.E - Bachelor's Degree in Computer Science Engineering",
      school: "Visvesvaraya Technological University (VTU)",
      year: "2007 - 2011",
      icon: "🎓",
      description: "Core computer science fundamentals and engineering principles"
    }
  ];

  const courses = [
    {
      name: "Kotlin for Java developers by Jetbrains",
      period: "May 2020 — Jun 2020",
      provider: "Coursera/kotlin.org",
      icon: "⚡",
      certificate: "https://www.coursera.org/account/accomplishments/verify/PJTTHNLZQ5KS?utm_campaign=copybutton_certificate&utm_medium=certificate&utm_source=link",
      description: "Advanced Kotlin programming and Android development"
    },
    {
      name: "Deep Learning Nanodegree Foundation Course",
      period: "Jun 2017 — Oct 2017",
      provider: "Udacity.com",
      icon: "🧠",
      certificate: "https://drive.google.com/file/d/0B4R0clK0nq8GOVJXejlkaHlhRVE/view?resourcekey=0-VaTH9zueUISSjRNE7XeFnw",
      description: "Neural networks and deep learning fundamentals"
    },
    {
      name: "C3 Advanced Application Development by C3.ai",
      period: "Mar 2020 — Mar 2020",
      provider: "Coursera/C3.ai",
      icon: "💻",
      certificate: "https://www.coursera.org/account/accomplishments/verify/QPS5FRKYFRXZ?utm_campaign=copybutton_certificate&utm_medium=certificate&utm_source=link",
      description: "Enterprise-scale application development"
    },
    {
      name: "Become a React Native Developer",
      period: "May 2020 — Sep 2020",
      provider: "Linkedin Learning",
      icon: "📱",
      certificate: "https://www.linkedin.com/learning/certificates/0eac55e29fa7aefb745ed0c5fcf86c5c7956b69cc0567eeb42e5adbf2c4b54de?trk=backfilled_certificate",
      description: "Cross-platform mobile app development"
    }
  ];

  return (
    <Section id="education" className="bg-black relative">
      {/* Matrix-like rain animation (CSS overlay) */}
      <div className="matrix-rain absolute inset-0 opacity-10 pointer-events-none"></div>
      
      {/* Circuit board pattern */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-5"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-green-400 mb-4">
            <Typewriter
              options={{
                strings: ['EDUCATION RECORDS'],
                autoStart: true,
                loop: false,
                cursor: '▌',
              }}
            />
          </h2>
          <div className="w-24 h-1 bg-green-500/50 mx-auto"></div>
          
          {!loaded && (
            <div className="mt-8 text-green-400 font-mono animate-pulse">
              Loading neural network training data...
            </div>
          )}
        </motion.div>

        {loaded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Formal Education */}
            <motion.div className="space-y-6">
              {showEducation && (
                <>
                  <div className="font-mono text-green-400 space-y-1 mb-6">
                    <p>$ cat formal_education.dat</p>
                    <div className="w-full h-0.5 bg-green-500/30"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-8 text-green-400 flex items-center font-mono">
                    <span className="text-3xl mr-2">{education[0].icon}</span>
                    Academic Records
                  </h3>
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/70 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-500/30"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-green-400 font-mono">{edu.degree}</h4>
                          <p className="text-green-300">{edu.school}</p>
                          <p className="text-green-400/60 text-sm mt-1 font-mono">{edu.year}</p>
                          <p className="text-green-300/80 mt-2">{edu.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>

            {/* Certifications */}
            <motion.div className="space-y-6">
              {showCourses && (
                <>
                  <div className="font-mono text-green-400 space-y-1 mb-6">
                    <p>$ cat certifications.json</p>
                    <div className="w-full h-0.5 bg-green-500/30"></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-8 text-green-400 flex items-center font-mono">
                    <span className="text-3xl mr-2">📜</span>
                    Certification Array
                  </h3>
                  <div className="flex flex-col gap-6">
                    {courses.map((course, index) => (
                      <CourseCard
                        key={index}
                        name={course.name}
                        period={course.period}
                        provider={course.provider}
                        icon={course.icon}
                        certificate={course.certificate}
                        description={course.description}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-8 font-mono">Continuous Learning Protocol</h3>
          <p className="text-green-300/80 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
            $ echo "Committed to continuous professional development through online courses,
            workshops, and industry certifications to stay current with the latest
            technologies and best practices."
          </p>
        </motion.div>
      </div>

      {/* Styling for effects */}
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
          content: '$ cat education.log';
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
    </Section>
  );
};

export default Education;