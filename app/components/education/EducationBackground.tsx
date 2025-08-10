import { motion } from 'framer-motion';

export const EducationBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Animated floating gradients */}
      <motion.div 
        className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[40%] rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute -top-[10%] -right-[5%] w-[40%] h-[30%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/20 blur-3xl"
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
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
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
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
  );
};
