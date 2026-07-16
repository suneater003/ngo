import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videoData } from './videoData';
import type { VideoItem } from './videoData';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';

export const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const numItems = videoData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % numItems);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  // Auto-rotate
  useEffect(() => {
    if (isPaused || selectedVideo) return;
    
    const interval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [isPaused, selectedVideo]);

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
