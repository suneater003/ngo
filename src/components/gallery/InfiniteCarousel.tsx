import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GalleryCard } from './GalleryCard';
import { type GalleryItem } from './galleryData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InfiniteCarouselProps {
  items: GalleryItem[];
  onCardClick: (item: GalleryItem) => void;
  isLightboxOpen: boolean;
}

export function InfiniteCarousel({ items, onCardClick, isLightboxOpen }: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [layoutMeasurements, setLayoutMeasurements] = useState({ blockWidth: 0, viewportCenter: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardBaseOffsets = useRef<number[]>([]);

  // Interaction State (Using Refs to prevent re-renders that cancel Framer Motion click gestures!)
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const hasDragged = useRef(false); 
  const dragStartX = useRef(0);
  const dragStartTargetX = useRef(0);

  // Physics Engine
  const targetX = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 120, damping: 25, mass: 1 }); 
  
  const wrappedX = useTransform(x, (val) => {
    if (!layoutMeasurements.blockWidth) return 0;
    const width = layoutMeasurements.blockWidth;
    return ((val % width) - width) % width;
  });

  const speed = 1.2;

  // Measure layout once using transform-stripping for perfect coords
  useEffect(() => {
    if (!blockRef.current || !containerRef.current || !trackRef.current) return;
    const updateMeasurements = () => {
      // 1. Strip transforms to get raw DOM geometry
      const originalTrackTransform = trackRef.current!.style.transform;
      trackRef.current!.style.transform = 'none';
      
      const originalCardTransforms = cardRefs.current.map(c => c ? c.style.transform : '');
      cardRefs.current.forEach(c => { if (c) c.style.transform = 'none'; });

      // 2. Measure perfectly
      const containerRect = containerRef.current!.getBoundingClientRect();
      const blockWidth = blockRef.current!.offsetWidth;
      setLayoutMeasurements({ blockWidth, viewportCenter: window.innerWidth / 2 });

      cardRefs.current.forEach((card, i) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          // absolute base offset relative to container's left edge
          cardBaseOffsets.current[i] = rect.left - containerRect.left + (rect.width / 2);
        }
      });

      // 3. Restore transforms immediately
      trackRef.current!.style.transform = originalTrackTransform;
      cardRefs.current.forEach((c, i) => { if (c) c.style.transform = originalCardTransforms[i]; });
    };
    
    // Initial measurement
    updateMeasurements();
    
    const observer = new ResizeObserver(updateMeasurements);
    observer.observe(blockRef.current);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) return;
      const cardWidth = cardRefs.current[0]?.offsetWidth || 300;
      if (e.key === 'ArrowRight') {
        targetX.set(targetX.get() - cardWidth - 32); 
      } else if (e.key === 'ArrowLeft') {
        targetX.set(targetX.get() + cardWidth + 32);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetX, isLightboxOpen]);

  // Native Non-Passive Wheel Listener to lock page scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (isLightboxOpen) return; 
      e.preventDefault(); 
      targetX.set(targetX.get() - e.deltaY - e.deltaX);
    };

    el.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleNativeWheel);
  }, [targetX, isLightboxOpen]);

  // Auto-play loop & True Cover Flow Geometry
  useAnimationFrame((_time, delta) => {
    if (!layoutMeasurements.blockWidth || !containerRef.current) return;
    
    // Auto-scroll logic: Pause if hovered, dragging, or lightbox open
    if (!isHoveredRef.current && !isDraggingRef.current && !isLightboxOpen) {
      targetX.set(targetX.get() - speed * (delta / 16.66));
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const currentX = wrappedX.get();

    cardRefs.current.forEach((card, i) => {
      if (!card || cardBaseOffsets.current[i] === undefined) return;
      
      const currentCardCenter = containerRect.left + currentX + cardBaseOffsets.current[i];
      const distanceFromCenter = currentCardCenter - layoutMeasurements.viewportCenter;
      
      const normalized = Math.max(-2.5, Math.min(2.5, distanceFromCenter / 450));
      
      const rotateY = normalized * -18; 
      const translateZ = Math.abs(normalized) * -160; 
      
      const grayscale = Math.abs(normalized) * 0.4;
      const brightness = 1 - Math.abs(normalized) * 0.2;
      const opacity = 1 - Math.abs(normalized) * 0.05; 
      const zIndex = Math.round(100 - Math.abs(normalized) * 100);

      card.style.transform = `perspective(1500px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
      card.style.opacity = opacity.toString();
      card.style.filter = `grayscale(${grayscale}) brightness(${brightness})`;
      card.style.zIndex = zIndex.toString();
    });
  });

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isLightboxOpen) return;
    isDraggingRef.current = true;
    containerRef.current?.classList.add('is-dragging');
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    dragStartTargetX.current = targetX.get();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || isLightboxOpen) return;
    const delta = e.clientX - dragStartX.current;
    
    if (Math.abs(delta) > 5) {
      hasDragged.current = true;
    }
    
    targetX.set(dragStartTargetX.current + delta * 1.5);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    containerRef.current?.classList.remove('is-dragging');
  };

  // Click-to-Center Logic
  const handleCardClick = (item: GalleryItem, absoluteIdx: number) => {
    console.log("Card clicked in InfiniteCarousel.tsx:", item.title, "Index:", absoluteIdx);
    console.log("hasDragged.current:", hasDragged.current);

    if (hasDragged.current) {
      console.log("Click ignored: hasDragged is true");
      return;
    }

    const containerRect = containerRef.current!.getBoundingClientRect();
    const currentCardCenter = containerRect.left + wrappedX.get() + cardBaseOffsets.current[absoluteIdx];
    const distanceFromCenter = currentCardCenter - layoutMeasurements.viewportCenter;

    console.log("distanceFromCenter:", distanceFromCenter);

    // Glide to center
    targetX.set(targetX.get() - distanceFromCenter);

    // If already perfectly centered (within small threshold), open lightbox immediately
    if (Math.abs(distanceFromCenter) < 50) {
      console.log("Card is centered, opening lightbox:", item.title);
      onCardClick(item);
    } else {
      console.log("Card is NOT centered, gliding to center. Will not open lightbox yet.");
    }
  };

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);

  const handleManualNav = (direction: 1 | -1) => {
    const cardWidth = cardRefs.current[0]?.offsetWidth || 300;
    const gap = 72; // approx 4.5rem
    targetX.set(targetX.get() + (cardWidth + gap) * direction);
  };

  return (
    <div 
      className="carousel-master-container"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div 
        className="carousel-wrapper"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        role="region"
        aria-label="Interactive Gallery Carousel"
        tabIndex={0}
      >
        <motion.div className="carousel-track" ref={trackRef} style={{ x: wrappedX }}>
          {[0, 1, 2].map((blockIdx) => (
            <div 
              key={`block-${blockIdx}`}
              ref={blockIdx === 0 ? blockRef : null}
              className="carousel-block"
            >
              {items.map((item, itemIdx) => {
                 const absoluteIdx = blockIdx * items.length + itemIdx;
                 return (
                   <div 
                     key={`${blockIdx}-${item.id}`} 
                     ref={(el) => setCardRef(el, absoluteIdx)}
                     className="carousel-item-wrapper"
                   >
                      <GalleryCard 
                        item={item} 
                        onClick={() => handleCardClick(item, absoluteIdx)}
                      />
                   </div>
                 );
              })}
            </div>
          ))}
        </motion.div>

        {/* Integrated Floating Manual Navigation */}
        <button 
          className="carousel-floating-nav left"
          onClick={(e) => { e.stopPropagation(); handleManualNav(1); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          className="carousel-floating-nav right"
          onClick={(e) => { e.stopPropagation(); handleManualNav(-1); }}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
