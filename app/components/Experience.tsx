"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useState, useEffect } from "react";

export default function Experience() {
  
  const experiences = [
    {
      role: "Software Engineer III",
      company: "Loop Health",
      period: "August 2022 - Present",
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
      year: "2015 - 2016",
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
      year: "2012 - 2016",
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId : any) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="experience" className="bg-gradient-to-b from-white to-fb-blue/5">
      <div className="content-wrapper max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fb-black mb-4">
            Professional Experience
          </h2>
          <p className="text-fb-grey max-w-2xl mx-auto">
            A decade of expertise in mobile development and technical leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl 
                       transition-all duration-300 border border-fb-grey/10
                       transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-fb-blue">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-fb-black">
                    {exp.company}
                  </h4>
                  <p className="text-fb-grey">
                    {exp.period} | {exp.location}
                  </p>
                </div>

                <ul className="list-disc list-inside text-fb-grey space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-fb-blue/10 text-fb-blue 
                               rounded-full hover:bg-fb-blue hover:text-white 
                               transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-fb-black mb-4">
            Key Achievements
          </h3>
          <p className="text-fb-grey">
            Successfully delivered 10+ mobile applications, led multiple
            development teams, and implemented innovative solutions that
            improved user engagement and business metrics.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
