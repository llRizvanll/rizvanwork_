"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const techSkills = [
    { name: "A-I", logo: "/images/tech/ai_banner.webp" },
    { name: "React Native", logo: "/images/tech/rn_banner.png" },
    { name: "Kotlin", logo: "/images/tech/kt_banner.png" },
    { name: "Mobile DevOps", logo: "/images/tech/md_banner.png" },
    { name: "AI+ML", logo: "/images/tech/ai_plus_banner.jpg" },
    { name: "Ts/Js", logo: "/images/tech/jt_banner.webp" },
    { name: "Java", logo: "/images/tech/jv_banner.png" },
    { name: "Python", logo: "/images/tech/py_banner.png" },
  ];

  const mobile = window.innerWidth < 950;
  const easeMotion = "linear"
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Animated Film Banner */}
      <div className="absolute inset-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600 rounded-full blur opacity-20 animate-pulse"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: mobile ? 0.6 : 0.8, ease: easeMotion }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative leading-relaxed tracking-tight"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ 
              delay: 0.2, 
              duration: mobile ? 0.6 : 0.8,
              ease: 'easeOut'      
            }}
          >
            MOHAMMEDRIZVAN HAWALDAR
          </motion.h1>

          <div className="max-w-2xl mx-auto">
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.5,
                duration: mobile ? 0.7 : 0.8,
                ease: 'easeOut'
              }}
            >
              Software Engineer | Mobile App Specialist | Mobile DevOps Engineer
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: mobile ? 10 : 0
              }}
              transition={{ 
                delay: 0.8,
                duration: mobile ? 1 : 1.2  
              }}
            >
              <motion.a
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 touch-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/assets/rizvan_hawaldar_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 md:px-6 md:py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 touch-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Animated underline effect */}
            <div className="relative mt-4">
              <div className="absolute bottom-1 left-0 right-0 h-1 bg-gray-200 origin-left animate-fade-in-out"></div>
            </div>
          </div>
        </motion.div>

        {/* Auto-scrolling Tech Logos Banner */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex items-center space-x-8 py-10"
            initial={{ x: "0%" }}
            animate={{
              x: mobile? ["-10%", "0%", "-600%"] : ["-10%", "0%", "-100%"],
              scale: [1.5, 1, 0.9]
            }}
            transition={{
              duration: mobile ? 20 : 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`flex-shrink-0 ${index % 2 === 0 ? "opacity-100" : "opacity-50"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  delay: Math.random() * 2 + (index % 4 === 0 ? 1 : 0)
                }}
              >
                <div className="w-72 h-72 relative">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fixed Scroll Indicator */}
        <div className="relative inset-x-0 bottom-6 flex justify-center mt-30">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: mobile ? 1 : 2,
              ease: "linear",
              repeat: Infinity
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
