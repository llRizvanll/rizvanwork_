import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs text-fb-blue mb-2 opacity-80 font-medium">Scroll Down</span>
      <motion.div
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
        className="w-6 h-10 border-2 border-fb-blue rounded-full flex justify-center p-1"
      >
        <motion.div 
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
          className="w-1.5 h-3 bg-fb-blue rounded-full"
        />
      </motion.div>
    </motion.div>
  );
} 