import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.css';

export const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="hero-section scroll-reveal" id="home" ref={revealRef as React.RefObject<HTMLDivElement>}>
      <div className="container hero-container">
        
        <div className="hero-content">
          <img src="/assets/logo.webp" alt="" aria-hidden="true" className="hero-watermark" decoding="async" />
          
          <div className="hero-text-block">
            <h1 className="hero-title">
              आत्मनिर्भर सखि,<br />
              <span className="text-highlight">आत्मनिर्भर भारत</span>
            </h1>
            <p className="hero-description">
              सखी गृह उद्योग फाउंडेशन का मुख्य उद्देश्य सभी सखियों को एक सूत्र में पिरोना एवं मज़बूत संगठन के लिए आपस में व्यापार करना है।
            </p>
            <div className="hero-actions">
              <a href="#mission" className="btn-primary">हमारा मिशन जानें</a>
            </div>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="visual-composition">
            <div className="image-mask mask-1">
              <img src="/assets/image copy 2.png" alt="Empowered Women" decoding="async" />
            </div>
            <div className="image-mask mask-2">
              <img src="/assets/image copy 3.png" alt="Community Support" decoding="async" />
            </div>
            <div className="image-mask mask-3">
              <img src="/assets/image copy 4.png" alt="Education" decoding="async" />
            </div>
            
            {/* Decorative elements */}
            <div className="decor-circle-left"></div>
            <div className="decor-dot dot-1"></div>
            <div className="decor-dot dot-2"></div>
            <div className="decor-dot dot-3"></div>
            <div className="decor-shape"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
