import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type GalleryItem } from './galleryData';
import { GalleryCard } from './GalleryCard';

interface InfiniteCarouselProps {
  items: GalleryItem[];
  onCardClick: (item: GalleryItem) => void;
  isLightboxOpen: boolean;
}

export function InfiniteCarousel({ items, onCardClick, isLightboxOpen }: InfiniteCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to wrap index around infinitely
  const getWrappedIndex = useCallback((index: number) => {
    return ((index % items.length) + items.length) % items.length;
  }, [items.length]);

  const navigate = useCallback((direction: 1 | -1) => {
    setActiveIndex((prev) => getWrappedIndex(prev + direction));
  }, [getWrappedIndex]);

  const handleCardClick = (offset: number, item: GalleryItem) => {
    if (offset === 0) {
      // Already centered, open immediately
      onCardClick(item);
    } else {
      // Animate to center
      setActiveIndex((prev) => getWrappedIndex(prev + offset));
      
      // Clear any pending timeouts
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      
      // Wait for spring to settle, then open lightbox
      clickTimeoutRef.current = setTimeout(() => {
        onCardClick(item);
      }, 400); // 400ms matches spring duration
    }
  };

  // Auto Rotation
  useEffect(() => {
    if (isLightboxOpen || isHovered) return;
    
    const interval = setInterval(() => {
      navigate(1);
    }, 1500);
    
    return () => clearInterval(interval);
  }, [isLightboxOpen, isHovered, navigate]);

  // Drag and click interactions are enabled; wheel events pass through natively to allow smooth vertical page scrolling.

  // Drag Navigation
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      navigate(1);
    } else if (info.offset.x > threshold) {
      navigate(-1);
    }
  };

  const variants = {
    center: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 5 },
    left: { x: -300, y: 20, scale: 0.85, opacity: 0.8, zIndex: 4 },
    leftFar: { x: -540, y: 40, scale: 0.7, opacity: 0.5, zIndex: 3 },
    right: { x: 300, y: 20, scale: 0.85, opacity: 0.8, zIndex: 4 },
    rightFar: { x: 540, y: 40, scale: 0.7, opacity: 0.5, zIndex: 3 },
    hiddenLeft: { x: -760, y: 60, scale: 0.5, opacity: 0, zIndex: 1 },
    hiddenRight: { x: 760, y: 60, scale: 0.5, opacity: 0, zIndex: 1 },
  };

  return (
    <div 
      className="carousel-master-container"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-wrapper">
        <motion.div 
          className="carousel-track"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => {
            // Calculate shortest path offset for infinite loop illusion
            const diff = index - activeIndex;
            let offset = diff;
            const halfLength = Math.floor(items.length / 2);
            
            if (offset > halfLength) {
              offset -= items.length;
            } else if (offset < -halfLength) {
              offset += items.length;
            }

            // Determine variant based on offset
            let position = 'hiddenRight';
            if (offset === 0) position = 'center';
            else if (offset === -1) position = 'left';
            else if (offset === -2) position = 'leftFar';
            else if (offset === 1) position = 'right';
            else if (offset === 2) position = 'rightFar';
            else if (offset < -2) position = 'hiddenLeft';
            else if (offset > 2) position = 'hiddenRight';

            return (
              <motion.div
                key={item.id}
                className="carousel-item-wrapper"
                variants={variants}
                initial={false}
                animate={position}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                style={{
                  position: 'absolute',
                  pointerEvents: Math.abs(offset) <= 2 ? 'auto' : 'none',
                }}
              >
                <GalleryCard 
                  item={item} 
                  onClick={() => handleCardClick(offset, item)}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <button 
          className="carousel-floating-nav left"
          onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          className="carousel-floating-nav right"
          onClick={(e) => { e.stopPropagation(); navigate(1); }}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
