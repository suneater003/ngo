import { motion } from 'framer-motion';
import { type GalleryItem } from './galleryData';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.div
      onClick={() => {
        console.log("GalleryCard motion.div clicked:", item.title);
        onClick(item);
      }}
      className="gallery-card"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={item.imageUrl}
        alt={item.altText || item.title}
        loading="lazy"
        decoding="async"
        className="gallery-card-img"
        onError={(e) => { e.currentTarget.src = "/assets/gallery/images/gallery-012.jpeg"; }}
      />
      
      {/* Subtle bottom gradient for text legibility */}
      <div className="gallery-card-overlay" />
      
      <div className="gallery-card-content">
        <div className="gallery-card-tags">
          <span className="gallery-card-category">{item.category}</span>
          <span className="gallery-card-date">{item.date}</span>
        </div>
        <h3 className="gallery-card-title">{item.title}</h3>
        
        {/* Subtle metadata reveal on hover */}
        <div className="gallery-card-meta-reveal">
          <p className="gallery-card-event">{item.eventName}</p>
          <div className="gallery-card-line" />
        </div>
      </div>
    </motion.div>
  );
}
