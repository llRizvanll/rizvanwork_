"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "../Section";
import { useState, useEffect } from "react";
import experienceData from "@/data/experience.json";

export default function Experience() {
  const [filter, setFilter] = useState("all");
  const [animateTimeline, setAnimateTimeline] = useState(false);
  
  const { 
    title, 
    subtitle, 
    experiences, 
    achievements, 
    animation 
  } = experienceData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animation.staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { 
        duration: animation.timelineDuration,
        ease: "easeOut" 
      } 
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };
  
  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200 
      } 
    },
    hover: { 
      scale: 1.1, 
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
      
      // Add timeline animation trigger
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && !animateTimeline) {
          setAnimateTimeline(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateTimeline]);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredExperiences = filter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.tech.includes(filter));
    
  const uniqueTechnologies = [...new Set(experiences.flatMap(exp => exp.tech))];

  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-24 min-h-screen"
    >
      {/* Beautiful layered background */}
      <div className="absolute inset-0 z-0">
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
            repeatType: "reverse",
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
            repeatType: "reverse",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `
          }}
        ></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm24-24h-4v2h4v4h2v-4h4v-2h-4zm0 24h-4v2h4v4h2v-4h4v-2h-4zm0-36h-4v2h4v4h2v-4h4v-2h-4zM12 8V4H8v4H4v2h4v4h2V6h4V4H8zm0 20v-4H8v4H4v2h4v4h2v-4h4v-2h-4zm0 16v-4H8v4H4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="content-wrapper max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
            {title}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-fb-grey/80 max-w-2xl mx-auto mt-4 text-lg">
            {subtitle}
          </p>
        </motion.div>
        
        {/* Technology filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === "all" 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" 
                  : "bg-white/70 backdrop-blur-sm text-blue-600 hover:bg-white/90 border border-blue-200"
              }`}
            >
              All Experience
            </button>
            {uniqueTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === tech 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-white/70 backdrop-blur-sm text-blue-600 hover:bg-white/90 border border-blue-200"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline and experience cards */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/80 via-blue-600/60 to-blue-400/20 
                     transform -translate-x-1/2 md:block hidden"
            variants={timelineVariants}
            initial="hidden"
            animate={animateTimeline ? "visible" : "hidden"}
            style={{ transformOrigin: "top" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="relative space-y-12 md:space-y-24"
            >
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  variants={cardVariants}
                  className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 relative ${
                    index % 2 === 0 ? 'md:text-left' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node for desktop */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white 
                               shadow-lg transform -translate-x-1/2 md:block hidden"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4, type: "spring" }}
                  />

                  {/* Date badge - mobile: top, desktop: centered */}
                  <motion.div 
                    className="md:hidden absolute -top-2 -left-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    {exp.period}
                  </motion.div>

                  {/* Content area */}
                  <motion.div
                    className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl 
                               transition-all duration-500 border border-blue-100
                               transform hover:-translate-y-2 relative
                               md:w-[calc(50%-20px)] w-full p-6 z-10`}
                    whileHover={{ 
                      boxShadow: "0 20px 30px rgba(59,130,246,0.1)",
                    }}
                  >
                    {/* Date badge for desktop */}
                    <motion.div
                      className="hidden md:block absolute top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-1.5 rounded-full shadow-lg z-20"
                      style={index % 2 === 0 ? { right: '-15px' } : { left: '-15px' }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      {exp.period}
                    </motion.div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 mt-2">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        {exp.company}
                        <span className="w-2 h-2 rounded-full bg-blue-500/80 inline-block"></span>
                        <span className="text-gray-500 text-sm font-normal">{exp.location}</span>
                      </h4>
                    </div>

                    <motion.ul 
                      className="space-y-2 mb-6 list-none"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                          }
                        }
                      }}
                    >
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={listItemVariants}
                          className="text-sm leading-relaxed flex items-start gap-2 text-gray-600"
                        >
                          <span className="text-blue-500 mt-1">▹</span> {item}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          variants={techBadgeVariants}
                          whileHover="hover"
                          custom={i}
                          className="px-3 py-1 text-sm bg-blue-50 text-blue-600 
                                   rounded-full hover:bg-gradient-to-r from-blue-600 to-indigo-600 hover:text-white 
                                   transition-colors cursor-pointer border border-blue-100"
                          onClick={() => setFilter(tech)}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <motion.div 
            className="inline-block p-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-medium mb-6 border border-blue-100"
            whileHover={{ 
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            {achievements.title}
          </motion.div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {achievements.subtitle}
          </h3>
          <p className="text-gray-600">
            {achievements.description}
          </p>
          
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Achievement cards */}
            {achievements.stats.map((achievement, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 w-36 h-36 flex flex-col items-center justify-center transition-all hover:shadow-lg border border-blue-50"
                whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 12px 25px rgba(59, 130, 246, 0.1)" }}
              >
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">{achievement.number}</span>
                <span className="text-sm text-gray-600 text-center mt-2">{achievement.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Section>
  );
}
