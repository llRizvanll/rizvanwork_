import { useState, useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  elementId: string, 
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.75, triggerOnce = true } = options;
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element || (triggerOnce && isAnimated)) return;

      const rect = element.getBoundingClientRect();
      const shouldAnimate = rect.top <= window.innerHeight * threshold;

      if (shouldAnimate) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId, threshold, triggerOnce, isAnimated]);

  return { isAnimated, animateTimeline: isAnimated };
};
