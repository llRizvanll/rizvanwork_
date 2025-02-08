"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

interface Skill {
  name: string;
  level: number; // Now represents rating out of 5
  icon?: string;
}

export default function Skills() {
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
    <Section id="skills" className="bg-gradient-to-b from-white to-fb-blue/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fb-black mb-4">Technical Skills</h2>
          <p className="text-fb-grey max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different technologies and platforms.
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
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-fb-grey/10"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-fb-blue">
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
                      <span className="text-fb-black font-medium">{skill.name}</span>
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
          <h3 className="text-2xl font-semibold text-center text-fb-black mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Jenkins", "Firebase", "Redux", "GraphQL", "REST APIs",
              "Unit Testing", "Agile", "Scrum", "Team Leadership", "Jest", "Performance improvements","Migration native to react native",
              "Migration react native to native","OneSignal", "Huewai apps management","Push Notifications","Github actions","fastlane"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-fb-blue/10 text-fb-blue rounded-full text-sm font-medium
                         hover:bg-fb-blue hover:text-white transition-all cursor-pointer"
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