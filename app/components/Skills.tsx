"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import skillsData from "@/data/skills.json";

interface Skill {
  name: string;
  level: number; // Represents rating out of 5
  icon?: string;
}

export default function Skills() {
  const { 
    heading, 
    subheading, 
    skillCategories, 
    additionalExpertiseHeading, 
    additionalExpertise 
  } = skillsData;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar 
          key={`full-${i}`} 
          className="text-yellow-400 w-4 h-4"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FaStarHalf 
          key="half" 
          className="text-yellow-400 w-4 h-4"
        />
      );
    }

    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar 
          key={`empty-${i}`} 
          className="text-yellow-400 w-4 h-4"
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
    <Section id="skills" className="relative overflow-hidden py-24">
      {/* Beautiful layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        {/* Animated floating gradients */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[40%] rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/10 blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute -bottom-[10%] -left-[5%] w-[50%] h-[30%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/10 blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `
          }}
        ></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
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
                      <div className="flex space-x-1">
                        {renderStars(skill.level)}
                      </div>
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