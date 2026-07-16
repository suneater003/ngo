import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import type { VideoItem } from './videoData';

interface VideoCardProps {
  video: VideoItem;
  isActive: boolean;
  offset: number;
  onClick: () => void;
}

export const VideoCard = ({ video, isActive, offset, onClick }: VideoCardProps) => {
  // Determine variant based on offset
  let variant = 'hidden';
  if (offset === 0) variant = 'center';
  else if (offset === 1) variant = 'right';
  else if (offset === -1) variant = 'left';

  const variants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 10,
      opacity: 1,
      filter: 'brightness(1)',
    },
    left: {
      x: -400, // Partial preview offset
      scale: 0.8,
      zIndex: 5,
      opacity: 0.7,
      filter: 'brightness(0.6)',
    },
    right: {
      x: 400,
      scale: 0.8,
      zIndex: 5,
      opacity: 0.7,
      filter: 'brightness(0.6)',
    },
    hidden: {
      x: offset > 1 ? 800 : -800,
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.2)',
    }
  };

  return (
    <motion.div
      className="video-card-wrapper"
      variants={variants}
      initial={false}
      animate={variant}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
      style={{
        pointerEvents: isActive ? 'auto' : (Math.abs(offset) === 1 ? 'auto' : 'none'),
      }}
    >
      <div className="video-card-inner">
        <img src={video.thumbnailUrl} alt={video.title} className="video-thumbnail" />
        <div className="video-overlay">
          <div className="video-play-btn">
            <Play size={32} fill="currentColor" className="video-play-icon" />
          </div>
        </div>
        <div className="video-title-bar">
          <h3 className="video-card-title">{video.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};
