import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videoData } from './videoData';
import type { VideoItem } from './videoData';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';

export const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const numItems = videoData.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % numItems);
  }, [numItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + numItems) % numItems);
  }, [numItems]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused || selectedVideo) return;
    
    const interval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [isPaused, selectedVideo, nextSlide]);

  // Wheel Navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (selectedVideo) return; // Do not navigate while modal is open
      
      e.preventDefault();
      e.stopPropagation();

      if (e.deltaY > 20 || e.deltaX > 20) {
        nextSlide();
      } else if (e.deltaY < -20 || e.deltaX < -20) {
        prevSlide();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [selectedVideo, nextSlide, prevSlide]);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // Center card clicked - open modal
      setSelectedVideo(videoData[index]);
    } else {
      // Side card clicked - center it
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div 
        className="video-carousel-container"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="video-nav-btn prev" onClick={prevSlide} aria-label="Previous video">
          <ChevronLeft size={32} />
        </button>

        {videoData.map((video, i) => {
          // Calculate offset considering circular array
          let offset = i - activeIndex;
          if (offset < -Math.floor(numItems / 2)) offset += numItems;
          if (offset > Math.floor(numItems / 2)) offset -= numItems;

          return (
            <VideoCard
              key={video.id}
              video={video}
              isActive={offset === 0}
              offset={offset}
              onClick={() => handleCardClick(i)}
            />
          );
        })}

        <button className="video-nav-btn next" onClick={nextSlide} aria-label="Next video">
          <ChevronRight size={32} />
        </button>
      </div>

      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </>
  );
};
