import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type GalleryItem } from './galleryData';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate?: (item: GalleryItem) => void;
}

export function Lightbox({ item, items, onClose, onNavigate }: LightboxProps) {
  // Handle Keyboard Navigation natively without storing derived state
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      
      if (onNavigate) {
        const currentIndex = items.findIndex(i => i.id === item.id);
        if (currentIndex === -1) return;

        if (e.key === 'ArrowRight') {
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          onNavigate(items[nextIndex]);
        } else if (e.key === 'ArrowLeft') {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          onNavigate(items[prevIndex]);
        }
      }
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, items, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lightbox-overlay"
          onClick={onClose}
        >
          <motion.div
            key={item.id}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-image-container">
              <img
                src={item.imageUrl}
                alt={item.altText || item.title}
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-content">
              <div className="lightbox-tags">
                <span className="lightbox-category">{item.category}</span>
                <span className="lightbox-date">{item.date}</span>
              </div>
              
              <h2 className="lightbox-title">{item.title}</h2>
              <p className="lightbox-event">{item.eventName}</p>
              
              <div className="lightbox-divider" />
              
              <p className="lightbox-description">{item.description}</p>

              <button 
                onClick={onClose}
                className="lightbox-close-btn"
                aria-label="Close lightbox"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
