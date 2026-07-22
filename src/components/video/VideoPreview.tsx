import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { videoData } from './videoData';
import type { VideoItem } from './videoData';
import { VideoModal } from './VideoModal';
import './VideoPreview.css';

export default function VideoPreview() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [logicalIndex, setLogicalIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const numItems = videoData.length;

  const ANIMATION_DURATION = 400; // ms

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOffset(1);
    setTimeout(() => {
      setOffset(0);
      setLogicalIndex((prev) => prev + 1);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOffset(-1);
    setTimeout(() => {
      setOffset(0);
      setLogicalIndex((prev) => prev - 1);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  }, [isAnimating]);

  // Wheel Navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (selectedVideo) return; // Don't navigate while modal is open

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

  // Generate the window of 5 visible/buffered videos
  const featuredVideos = [];
  for (let i = -1; i <= 3; i++) {
    const currentLogical = logicalIndex + i;
    const dataIndex = ((currentLogical % numItems) + numItems) % numItems;
    featuredVideos.push({
      key: currentLogical,
      isOffscreenLeft: i === -1,
      video: videoData[dataIndex]
    });
  }

  const trackStyle = {
    transform: `translateX(calc(${offset * -1} * var(--shift-amount)))`,
    transition: isAnimating ? `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)` : 'none',
  };

  return (
    <section className="video-preview-section">
      <div className="video-preview-container">
        <div className="video-preview-header">
          <h2 className="video-preview-title">वीडियो झलकियाँ</h2>
          <p className="video-preview-subtitle">हमारे कार्यों और समुदाय से जुड़े कुछ खास पल</p>
        </div>

        <div className="video-preview-carousel-wrapper" ref={containerRef}>
          <button 
            className="video-preview-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous videos"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="video-preview-viewport">
            <div className="video-preview-track" style={trackStyle}>
              {featuredVideos.map(({ key, isOffscreenLeft, video }) => (
                <div 
                  key={key} 
                  className={`video-preview-card ${isOffscreenLeft ? 'offscreen-left' : ''}`}
              onClick={() => setSelectedVideo(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedVideo(video); }}
              aria-label={`Play ${video.title}`}
            >
              <div className="video-preview-thumbnail-wrapper">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="video-preview-thumbnail" 
                  loading="lazy" 
                  decoding="async"
                />
                <div className="video-preview-overlay">
                  <div className="video-preview-play-btn">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="video-preview-card-title">{video.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="video-preview-nav-btn next"
            onClick={nextSlide}
            aria-label="Next videos"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="video-preview-action">
          <Link to="/gallery" className="video-preview-cta">
            सभी वीडियो देखें
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </section>
  );
}
