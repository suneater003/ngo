import React, { useEffect, useRef, useState } from 'react';
import './BackgroundOrbs.css';

interface OrbProps {
  id: number;
  type: 'white' | 'sky' | 'amber';
  size: number;
  top: number;
  left: number;
  animationDuration: number;
}

export const BackgroundOrbs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs] = useState<OrbProps[]>([]);
  
  // Ref to hold the current mouse position
  const mousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Generate static random orbs on mount
    const numOrbs = 15; // Number of orbs
    const types: ('white' | 'sky' | 'amber')[] = ['white', 'sky', 'amber'];
    const generatedOrbs: OrbProps[] = [];

    for (let i = 0; i < numOrbs; i++) {
      generatedOrbs.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.floor(Math.random() * 101) + 50, // 50px to 150px
        top: Math.random() * 100, // 0 to 100%
        left: Math.random() * 100, // 0 to 100%
        animationDuration: Math.floor(Math.random() * 10) + 15, // 15s to 25s
      });
    }
    setOrbs(generatedOrbs);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Repulsion Logic Loop
    const updateOrbs = () => {
      if (containerRef.current) {
        const orbElements = containerRef.current.children;
        const repulseRadius = 200; // Trigger distance

        for (let i = 0; i < orbElements.length; i++) {
          const el = orbElements[i] as HTMLElement;
          const rect = el.getBoundingClientRect();
          
          // Orb center
          const orbX = rect.left + rect.width / 2;
          const orbY = rect.top + rect.height / 2;
          
          const dx = orbX - mousePos.current.x;
          const dy = orbY - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulseRadius && dist > 0) {
            // Calculate repulsion strength (closer = stronger push)
            const strength = (repulseRadius - dist) / repulseRadius;
            const pushX = (dx / dist) * strength * 100; // max push 100px
            const pushY = (dy / dist) * strength * 100;
            
            el.style.transform = `translate(${pushX}px, ${pushY}px)`;
          } else {
            // Return to natural position
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
    <div className="background-orbs-container" ref={containerRef}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`orb orb-${orb.type}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            animation: `drift ${orb.animationDuration}s infinite ease-in-out alternate`
          }}
        />
      ))}
    </div>
  );
};
