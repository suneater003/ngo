import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePointerInteraction } from './hooks/usePointerInteraction';
import { InfiniteCarousel } from './InfiniteCarousel';
import { Lightbox } from './Lightbox';
import { galleryItems, type GalleryItem } from './galleryData';
import './Gallery.css';

export default function GallerySection() {
  const { rotateX, rotateY } = usePointerInteraction();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleCardClick = (item: GalleryItem) => {
    console.log("Gallery received:", item);
    console.log("selectedItem before:", selectedItem);
    console.log("Opening lightbox");
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log("Gallery rendered. Current selectedItem:", selectedItem);
  }, [selectedItem]);

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gallery-title-wrapper">
            <span className="gallery-line" />
            <span className="gallery-subtitle">Our Impact in Focus</span>
            <span className="gallery-line" />
          </div>

          <h2 className="gallery-title">
            Empowering communities through <span>action & unity</span>
          </h2>

          <p className="gallery-description">
            Every photograph represents a story of change. From rural
            education to women's empowerment, discover the moments that
            shape our mission and the lasting impact we create together
            in Bihar.
          </p>

          <div className="gallery-stats">
            <div className="gallery-stat-item">
              <span className="gallery-stat-number">50+</span>
              <span className="gallery-stat-label">Villages Reached</span>
            </div>

            <div className="gallery-stat-divider" />

            <div className="gallery-stat-item">
              <span className="gallery-stat-number">10k+</span>
              <span className="gallery-stat-label">Lives Impacted</span>
            </div>

            <div className="gallery-stat-divider" />

            <div className="gallery-stat-item">
              <span className="gallery-stat-number">200+</span>
              <span className="gallery-stat-label">Women Employed</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="gallery-perspective-container">
        <motion.div
          style={{ rotateX, rotateY }}
          className="gallery-preserve-3d"
        >
          <InfiniteCarousel
            items={galleryItems}
            onCardClick={handleCardClick}
            isLightboxOpen={!!selectedItem}
          />
        </motion.div>
      </div>

      <Lightbox
        item={selectedItem}
        items={galleryItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={setSelectedItem}
      />
    </div>
  );
}