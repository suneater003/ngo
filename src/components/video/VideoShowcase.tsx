import { VideoCarousel } from './VideoCarousel';
import './Video.css';

export const VideoShowcase = () => {
  return (
    <section className="video-showcase-section">
      <div className="video-header">
        <div className="video-title-wrapper">
          <div className="video-line"></div>
          <span className="video-subtitle">Video Gallery</span>
          <div className="video-line"></div>
        </div>
        <h2 className="video-title">
          Watch our stories <span>unfold</span>
        </h2>
      </div>
      
      <VideoCarousel />
    </section>
  );
};
