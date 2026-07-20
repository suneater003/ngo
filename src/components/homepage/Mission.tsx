import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, cardFadeUp } from '../../utils/animations';
import MandalaWatermark from './MandalaWatermark';
import './Mission.css';

const Mission: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "सखि व्यापार",
      description: "सखियों को व्यापार करने के लिए प्रोत्साहित करना तथा उनका आर्थिक विकास करना।",
      image: "/assets/image copy 2.png",
      linkTarget: "/mission#empowerment"
    },
    {
      id: 2,
      title: "सखी सहयोग",
      description: "छोटी रकम जमा कर व्यापार करने के लिए सहयोग राशि प्रदान करना।",
      image: "/assets/image copy 3.png",
      linkTarget: "/mission#community"
    },
    {
      id: 3,
      title: "सखी शिक्षा",
      description: "कमजोर सखियों के बच्चों को शिक्षा प्रदान कर उन्हें आत्मनिर्भर बनाना।",
      image: "/assets/image copy 4.png",
      linkTarget: "/mission#education"
    },
    {
      id: 4,
      title: "सखी स्वास्थ्य",
      description: "सखियों को स्वास्थ्य के प्रति जागरूक करना और चिकित्सा सहायता प्रदान करना।",
      image: "/assets/image.png",
      linkTarget: "/mission#healthcare"
    }
  ];

  return (
    <section id="mission" className="mission-section">
      <MandalaWatermark />
      <div className="container mission-container">
        <motion.div 
          className="mission-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mission-title">हमारा <span className="text-highlight">मिशन</span></h2>
          <p className="mission-subtitle">सखियों का उन्नतिकरण एवं सशक्तिकरण</p>
        </motion.div>
        
        <motion.div 
          className="mission-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.id} className="mission-card" variants={cardFadeUp}>
              <div className="card-image-wrapper">
                <img src={pillar.image} alt={pillar.title} className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-text-wrapper">
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="card-description">{pillar.description}</p>
                </div>
                <Link className="card-cta" to={pillar.linkTarget}>और जानें</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
