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
    <div id="gallery" className="gallery-section">
      <div className="gallery-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gallery-title-wrapper">
            <span className="gallery-line" />
            <span className="gallery-subtitle">हमारी झलकियां</span>
            <span className="gallery-line" />
          </div>

          <h2 className="gallery-title">
            संगठन और कार्य से <span>सशक्तिकरण</span>
          </h2>

          <p className="gallery-description">
            हर तस्वीर बदलाव की एक कहानी है। सखियों के सशक्तिकरण से लेकर आत्मनिर्भरता तक, 
            उन पलों को देखें जो हमारे मिशन को आकार देते हैं और हमारे समाज पर एक स्थायी प्रभाव डालते हैं।
          </p>

          <div className="gallery-stats">
            <div className="gallery-stat-item">
              <span className="gallery-stat-number">50+</span>
              <span className="gallery-stat-label">गाँव जुड़े</span>
            </div>

            <div className="gallery-stat-divider" />

            <div className="gallery-stat-item">
              <span className="gallery-stat-number">10k+</span>
              <span className="gallery-stat-label">जीवन प्रभावित</span>
            </div>

            <div className="gallery-stat-divider" />

            <div className="gallery-stat-item">
              <span className="gallery-stat-number">200+</span>
              <span className="gallery-stat-label">सखी रोज़गार</span>
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

      <div style={{ marginTop: '3rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <button className="card-cta">पूरी गैलरी देखें</button>
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