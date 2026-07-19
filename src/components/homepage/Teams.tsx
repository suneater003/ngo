import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, cardFadeUp, hoverLift } from '../../utils/animations';
import './Teams.css';

const Teams: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "सखी १",
      role: "संस्थापक",
      image: "/assets/image.png"
    },
    {
      id: 2,
      name: "सखी २",
      role: "सह-संस्थापक",
      image: "/assets/image copy.png"
    }
  ];

  return (
    <section id="team" className="teams-section">
      {/* GLASSMORPHIC AMBIENT GLOWS */}
      <div className="glass-glow glow-primary" aria-hidden="true"></div>
      <div className="glass-glow glow-accent" aria-hidden="true"></div>

      {/* MAIN CONTENT (ELEVATED) */}
      <div className="team-content-wrapper">
        <div className="teams-container">
          <motion.div 
            className="teams-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="teams-title">हमारी <span className="text-highlight">टीम</span></h2>
            <p className="teams-subtitle">मिशन को सफल बनाने वाले हमारे मुख्य स्तंभ</p>
          </motion.div>

          <motion.div 
            className="teams-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} className="team-card" variants={cardFadeUp}>
                <div className="team-avatar-wrapper">
                  <img src={member.image} alt={member.name} className="team-avatar" loading="lazy" decoding="async" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="teams-action-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="/team" 
              className="btn-primary"
              whileHover={hoverLift.hover}
              whileTap={hoverLift.tap}
            >
              पूरी टीम देखें
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
