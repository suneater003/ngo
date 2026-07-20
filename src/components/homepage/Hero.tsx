import { motion } from 'framer-motion';
import { staggerContainer, heroFadeUp, hoverLift } from '../../utils/animations';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <img src="/assets/logo.png" alt="" aria-hidden="true" className="hero-watermark" decoding="async" />
          
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
                className="btn-primary"
                whileHover={hoverLift.hover}
                whileTap={hoverLift.tap}
              >
                हमारा मिशन जानें
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visuals"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
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
        </motion.div>
        
      </div>
    </section>
  );
};

