import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Add event listener for mouse move
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setShowCursor(true);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { cursorPosition, showCursor };
};
