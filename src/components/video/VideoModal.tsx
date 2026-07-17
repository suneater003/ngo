import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { VideoItem } from './videoData';

interface VideoModalProps {
  video: VideoItem;
  onClose: () => void;
}

export const VideoModal = ({ video, onClose }: VideoModalProps) => {
  // Prevent background scroll and handle ESC key
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={32} />
        </button>
        <div className="video-player-wrapper">
          <video
            className="video-player"
            controls
            autoPlay
            src={video.videoUrl}
            poster={video.thumbnailUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <h3 className="video-modal-title">{video.title}</h3>
      </div>
    </div>
  );
};
