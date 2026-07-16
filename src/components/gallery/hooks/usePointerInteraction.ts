import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function usePointerInteraction() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Use a very soft spring for elegant cinematic movement
  const springX = useSpring(rotateX, { damping: 50, stiffness: 100, mass: 2 });
  const springY = useSpring(rotateY, { damping: 50, stiffness: 100, mass: 2 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position as a percentage of the viewport (-1 to 1)
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;

      // Extremely subtle rotation (max 3 degrees) to complement the internal card 3D effect
      // The internal cards are rotating heavily on Y, so the global container should only gently tilt.
      rotateX.set(normalizedY * -2); 
      rotateY.set(normalizedX * 3);
    };

    // Smooth return to center when mouse leaves viewport
    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [rotateX, rotateY]);

  return { rotateX: springX, rotateY: springY };
}
