import { VideoCarousel } from './VideoCarousel';
import './Video.css';

export const VideoShowcase = () => {
  return (
    <section className="video-showcase-section">
      <div className="video-header">
        <div className="video-title-wrapper">
          <span className="video-line" />
          <span className="video-subtitle">Video Gallery</span>
          <span className="video-line" />
        </div>
        <h2 className="video-title">
          Watch our stories <span>unfold</span>
        </h2>
        <p className="video-description">
          Discover our initiatives in motion through workshops, community stories, and moments of impact.
        </p>
      </div>
      
      <VideoCarousel />
    </section>
  );
};
