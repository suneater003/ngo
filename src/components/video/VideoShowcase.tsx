import { VideoCarousel } from './VideoCarousel';
import './Video.css';

export const VideoShowcase = () => {
  return (
    <section className="video-showcase-section">
      <div className="video-header">
        <div className="video-title-wrapper">
          <span className="video-line" />
          <span className="video-subtitle">वीडियो गैलरी</span>
          <span className="video-line" />
        </div>
        <h2 className="video-title">
          हमारी कहानियाँ <span>वीडियो में</span>
        </h2>
        <p className="video-description">
          हमारी पहलों, गतिविधियों और समुदाय से जुड़े विशेष पलों को वीडियो के माध्यम से देखें
        </p>
      </div>
      
      <VideoCarousel />
    </section>
  );
};
