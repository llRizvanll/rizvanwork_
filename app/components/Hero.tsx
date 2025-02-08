"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // List of technologies you work with
  const techSkills = [
    { name: "React Native", logo: "/images/tech/rn_banner.png" },
    { name: "AI+ML", logo: "/images/tech/ai_plus_banner.jpg" },
    { name: "Ts/Js", logo: "/images/tech/jt_banner.webp" },
    { name: "Kotlin", logo: "/images/tech/kt_banner.png" },
    { name: "Java", logo: "/images/tech/jv_banner.png" },
    { name: "A-I", logo: "/images/tech/ai_banner.webp" },
    { name: "Python", logo: "/images/tech/py_banner.png" },
    { name: "Mobile DevOps", logo: "/images/tech/md_banner.png" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          MOHAMMEDRIZVAN HAWALDAR
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Software Engineer | Mobile App Specialist | Mobile DevOps Engineer
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Auto-scrolling Tech Logos Banner */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex items-center space-x-12 py-10"
          initial={{ x: "0%" }}
          animate={{ x: ["20%", "20%", "-20%"] }}
          transition={{
            duration: 120,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {techSkills.map((skill) => (
            <div key={skill.name} className="flex-shrink-0">
              <div className="w-28 h-28 relative">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Fixed Scroll Indicator */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
