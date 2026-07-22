import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { leaders, MemberModal, type Member } from '../../pages/TeamPage';
import { staggerContainer, cardFadeUp, hoverLift } from '../../utils/animations';
import './Teams.css';

const Teams: React.FC = () => {
  const [active, setActive] = useState<Member | null>(null);

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
            {leaders.map((member) => (
              <motion.div 
                key={member.name} 
                className="team-card" 
                variants={cardFadeUp}
                onClick={() => setActive(member)}
                style={{ cursor: 'pointer' }}
              >
                <div className="team-avatar-wrapper">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="team-avatar" 
                    loading="lazy" 
                    decoding="async" 
                    onError={(e) => { e.currentTarget.src = "/assets/gallery/images/gallery-012.jpeg"; }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-mission" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#64748B' }}>{member.mission}</p>
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
            <motion.div
              whileHover={hoverLift.hover}
              whileTap={hoverLift.tap}
              style={{ display: 'inline-block' }}
            >
              <Link 
                to="/team" 
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                पूरी टीम देखें
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {active && <MemberModal m={active} onClose={() => setActive(null)} />}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Teams;
