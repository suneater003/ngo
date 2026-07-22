import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, heroFadeUp, hoverLift } from '../../utils/animations';
import './Hero.css';

const HERO_SLIDES = [
  {
    primary: '/gallary/image/gallery-003.jpeg',
    fallback: '/assets/gallery/images/gallery-003.jpeg',
    alt: 'सांस्कृतिक कार्यक्रम एवं उत्सव - सखी गृह उद्योग'
  },
  {
    primary: '/gallary/image/gallery-008.jpeg',
    fallback: '/assets/gallery/images/gallery-008.jpeg',
    alt: 'महिला समूह बैठक - सखी गृह उद्योग'
  },
  {
    primary: '/gallary/image/gallery-011.jpeg',
    fallback: '/assets/gallery/images/gallery-011.jpeg',
    alt: 'महिला सशक्तिकरण - सखी गृह उद्योग'
  },
  {
    primary: '/gallary/image/gallery-015.jpeg',
    fallback: '/assets/gallery/images/gallery-015.jpeg',
    alt: 'रोजगार एवं स्वावलंबन - सखी गृह उद्योग'
  },
  {
    primary: '/gallary/image/gallery-022.jpeg',
    fallback: '/assets/gallery/images/gallery-022.jpeg',
    alt: 'स्वास्थ्य शिविर एवं जागरूकता - सखी गृह उद्योग'
  },
  {
    primary: '/gallary/image/gallery-025.jpeg',
    fallback: '/assets/gallery/images/gallery-025.jpeg',
    alt: 'सामुदायिक कार्य - सखी गृह उद्योग'
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Background Slideshow Engine */}
      <div className="hero-slideshow-container">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.primary}
            className={`hero-slide-layer ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.primary})` }}
            role="img"
            aria-label={slide.alt}
          >
            {/* Fallback image handler */}
            <img
              src={slide.primary}
              alt=""
              style={{ display: 'none' }}
              onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.backgroundImage = `url(${slide.fallback})`;
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Cinematic Dark-to-Light Gradient Overlay */}
      <div className="hero-gradient-overlay" />

      {/* Hero Main Content */}
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/assets/logo.png"
            alt=""
            aria-hidden="true"
            className="hero-watermark"
            decoding="async"
          />

          <div className="hero-text-block">
            <motion.h1 variants={heroFadeUp} className="hero-title">
              आत्मनिर्भर सखी,<br />
              <span className="text-highlight">आत्मनिर्भर भारत</span>
            </motion.h1>
            <motion.p variants={heroFadeUp} className="hero-description">
              सखी गृह उद्योग फाउंडेशन का मुख्य उद्देश्य सभी सखियों को एक सूत्र में पिरोना एवं मज़बूत संगठन के लिए आपस में व्यापार करना है।
            </motion.p>
            <motion.div variants={heroFadeUp} className="hero-actions">
              <motion.a
                href="/#mission"
                className="btn-primary hero-btn"
                whileHover={hoverLift.hover}
                whileTap={hoverLift.tap}
              >
                हमारा मिशन जानें
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-slide-dots" aria-label="Slideshow controls">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
