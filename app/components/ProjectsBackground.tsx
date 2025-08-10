import { motion } from 'framer-motion';

// Animation configurations for reusability
const FLOATING_ANIMATIONS = {
  primary: {
    y: [0, 30, 0] as [number, number, number],
    x: [0, 20, 0] as [number, number, number],
    duration: 20,
  },
  secondary: {
    y: [0, -20, 0] as [number, number, number],
    x: [0, -15, 0] as [number, number, number],
    duration: 15,
  },
};

// Decorative element configurations
const DECORATIVE_ELEMENTS = [
  { position: 'top-40 left-20', size: 'w-40 h-40', shape: 'rounded-full' },
  { position: 'bottom-60 right-40', size: 'w-60 h-60', shape: 'rounded-full' },
  { position: 'top-1/3 right-1/4', size: 'w-20 h-20', shape: 'rounded-md rotate-45' },
] as const;

interface FloatingGradientProps {
  className: string;
  animation: keyof typeof FLOATING_ANIMATIONS;
}

const FloatingGradient: React.FC<FloatingGradientProps> = ({ className, animation }) => {
  const config = FLOATING_ANIMATIONS[animation];
  
  return (
    <motion.div 
      className={className}
      animate={{
        y: config.y,
        x: config.x,
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

interface DecorativeElementProps {
  position: string;
  size: string;
  shape: string;
}

const DecorativeElement: React.FC<DecorativeElementProps> = ({ position, size, shape }) => (
  <div className={`absolute ${position} ${size} border border-blue-200 ${shape} opacity-30`} />
);

export const ProjectsBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      
      {/* Animated floating gradients */}
      <FloatingGradient 
        className="absolute -top-[30%] -left-[20%] w-[80%] h-[60%] rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl"
        animation="primary"
      />
      
      <FloatingGradient 
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[60%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/20 blur-3xl"
        animation="secondary"
      />
      
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Decorative elements */}
      {DECORATIVE_ELEMENTS.map((element, index) => (
        <DecorativeElement 
          key={index}
          position={element.position}
          size={element.size}
          shape={element.shape}
        />
      ))}
    </div>
  );
};
