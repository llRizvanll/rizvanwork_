import { motion } from 'framer-motion';

interface CustomCursorProps {
  cursorPosition: { x: number; y: number };
  showCursor: boolean;
}

export default function CustomCursor({ cursorPosition, showCursor }: CustomCursorProps) {
  return (
    <motion.div
      className="custom-cursor hidden md:block"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        opacity: showCursor ? 1 : 0,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: showCursor ? 1 : 0,
        x: cursorPosition.x - 12,
        y: cursorPosition.y - 12,
      }}
      transition={{ duration: 0.15 }}
    />
  );
}
