import React, { useEffect, useRef, useState } from 'react';
import './ProjectOrbs.css';

interface OrbProps {
  id: number;
  type: 'savoy' | 'morning';
  size: number;
  top: number;
  left: number;
  animationDuration: number;
}

export const ProjectOrbs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs] = useState<OrbProps[]>([]);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Generate static random orbs on mount (8-12 orbs)
    const numOrbs = Math.floor(Math.random() * 5) + 8; 
    const types: ('savoy' | 'morning')[] = ['savoy', 'morning'];
    const generatedOrbs: OrbProps[] = [];

    for (let i = 0; i < numOrbs; i++) {
      generatedOrbs.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.floor(Math.random() * 101) + 50, // 50px to 150px
        top: Math.random() * 80 + 10, // 10% to 90% (keep inside bounds)
        left: Math.random() * 80 + 10,
        animationDuration: Math.floor(Math.random() * 10) + 15,
      });
    }
    setOrbs(generatedOrbs);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateOrbs = () => {
      if (containerRef.current) {
        // We calculate bounds to properly apply repulsion scoped to the section
        const orbElements = containerRef.current.children;
        const repulseRadius = 200;

        for (let i = 0; i < orbElements.length; i++) {
          const el = orbElements[i] as HTMLElement;
          const rect = el.getBoundingClientRect();
          
          const orbX = rect.left + rect.width / 2;
          const orbY = rect.top + rect.height / 2;
          
          const dx = orbX - mousePos.current.x;
          const dy = orbY - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulseRadius && dist > 0) {
            const strength = (repulseRadius - dist) / repulseRadius;
            const pushX = (dx / dist) * strength * 80;
            const pushY = (dy / dist) * strength * 80;
            
            // Constrain pushing from sending orb way off screen/container
            el.style.transform = `translate(${pushX}px, ${pushY}px)`;
          } else {
            el.style.transform = `translate(0px, 0px)`;
          }
        }
      }
      requestRef.current = requestAnimationFrame(updateOrbs);
    };

    requestRef.current = requestAnimationFrame(updateOrbs);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [orbs]);

  return (
    <div className="project-orbs-container" ref={containerRef}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`project-orb project-orb-${orb.type}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            animation: `project-drift ${orb.animationDuration}s infinite ease-in-out alternate`
          }}
        />
      ))}
    </div>
  );
};
