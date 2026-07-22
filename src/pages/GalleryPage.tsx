import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundOrbs } from '../components/layout/BackgroundOrbs';
import { InfiniteCarousel } from '../components/gallery/InfiniteCarousel';
import { Lightbox } from '../components/gallery/Lightbox';
import { galleryItems, type GalleryItem } from '../components/gallery/galleryData';
import { usePointerInteraction } from '../components/gallery/hooks/usePointerInteraction';
import { heroFadeUp, staggerContainer } from '../utils/animations';
import '../components/gallery/Gallery.css';
import './GalleryPage.css';

const GalleryPage: React.FC = () => {
  const { rotateX, rotateY } = usePointerInteraction();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleCardClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  return (
    <main id="main-content" className="gallery-page" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, opacity: 0.5 }}>
        <BackgroundOrbs count={15} />
      </div>

      <section className="gallery-page-hero">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={heroFadeUp} className="hero-badge">
              हमारी गैलरी
            </motion.span>
            <motion.h1 variants={heroFadeUp} className="hero-title">
              हमारे कार्यों, पहलों और समुदाय से जुड़े <br /><span className="text-highlight">कुछ यादगार पल</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="gallery-page-content">
        <div className="gallery-perspective-container" style={{ paddingTop: 0 }}>
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
      </section>

      <Lightbox
        item={selectedItem}
        items={galleryItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={setSelectedItem}
      />
    </main>
  );
};

export default GalleryPage;
