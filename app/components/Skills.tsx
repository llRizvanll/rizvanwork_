"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import skillsData from "@/data/skills.json";
import { SkillsBackground } from "./SkillsBackground";
import { StarRating } from "./StarRating";

interface Skill {
  name: string;
  level: number; // Represents rating out of 5
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface SkillsData {
  heading: string;
  subheading: string;
  skillCategories: SkillCategory[];
  additionalExpertiseHeading: string;
  additionalExpertise: string[];
}

export default function Skills() {
  const { 
    heading, 
    subheading, 
    skillCategories, 
    additionalExpertiseHeading, 
    additionalExpertise 
  }: SkillsData = skillsData;

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
    <Section id="skills" className="relative overflow-hidden py-24">
      <SkillsBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-blue-600 font-medium text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-blue-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)" }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
                  {category.title}
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
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <StarRating rating={skill.level} />
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
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
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            {additionalExpertiseHeading}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalExpertise.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-white border border-blue-100 text-blue-600 rounded-full text-sm font-medium
                         hover:bg-gradient-to-r from-blue-600 to-indigo-600 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}