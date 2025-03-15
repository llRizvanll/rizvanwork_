"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "../Section";
import { useState, useEffect } from "react";
import experienceData from "../../data/experience.json";

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
      className="bg-gradient-to-b from-white to-fb-blue/5 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(animation.particles)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-fb-blue"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s infinite alternate ease-in-out`
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-fb-blue/20 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-fb-blue/10 to-transparent opacity-20 blur-3xl"></div>
      </div>

      <div className="content-wrapper max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-fb-black mb-6 relative inline-block">
            {title}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-fb-blue"
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "all" 
                  ? "bg-fb-blue text-white shadow-lg shadow-fb-blue/20" 
                  : "bg-fb-grey/10 text-fb-grey hover:bg-fb-grey/20"
              }`}
            >
              All Experience
            </button>
            {uniqueTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech 
                    ? "bg-fb-blue text-white shadow-lg shadow-fb-blue/20" 
                    : "bg-fb-grey/10 text-fb-grey hover:bg-fb-grey/20"
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
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fb-blue/80 via-fb-blue/60 to-fb-blue/20 
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
                    className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-fb-blue rounded-full border-4 border-white 
                               shadow-lg transform -translate-x-1/2 md:block hidden"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4, type: "spring" }}
                  />

                  {/* Date badge - mobile: top, desktop: centered */}
                  <motion.div 
                    className="md:hidden absolute -top-2 -left-2 bg-fb-blue text-white text-xs px-3 py-1 rounded-full shadow-md z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    {exp.period}
                  </motion.div>

                  {/* Content area */}
                  <motion.div
                    className={`bg-white rounded-xl shadow-lg hover:shadow-xl 
                               transition-all duration-500 border border-fb-grey/10
                               transform hover:-translate-y-2 relative
                               md:w-[calc(50%-20px)] w-full p-6 z-10`}
                    whileHover={{ 
                      boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Date badge for desktop */}
                    <motion.div
                      className="hidden md:block absolute top-0 bg-fb-blue/90 text-white text-sm px-4 py-1.5 rounded-full shadow-lg z-20"
                      style={index % 2 === 0 ? { right: '-15px' } : { left: '-15px' }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      {exp.period}
                    </motion.div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-fb-blue mt-2">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-fb-black flex items-center gap-2">
                        {exp.company}
                        <span className="w-2 h-2 rounded-full bg-fb-blue/80 inline-block"></span>
                        <span className="text-fb-grey text-sm font-normal">{exp.location}</span>
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
                          className="text-sm leading-relaxed flex items-start gap-2 text-fb-grey"
                        >
                          <span className="text-fb-blue mt-1">▹</span> {item}
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
                          className="px-3 py-1 text-sm bg-fb-blue/10 text-fb-blue 
                                   rounded-full hover:bg-fb-blue hover:text-white 
                                   transition-colors cursor-pointer"
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
            className="inline-block p-1.5 px-4 rounded-full bg-fb-blue/10 text-fb-blue font-medium mb-6"
            whileHover={{ 
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            {achievements.title}
          </motion.div>
          <h3 className="text-2xl font-semibold text-fb-black mb-4">
            {achievements.subtitle}
          </h3>
          <p className="text-fb-grey">
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
                className="bg-white rounded-xl shadow-md p-5 w-36 h-36 flex flex-col items-center justify-center transition-all hover:shadow-lg"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <span className="text-3xl font-bold text-fb-blue">{achievement.number}</span>
                <span className="text-sm text-fb-grey text-center mt-2">{achievement.text}</span>
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
