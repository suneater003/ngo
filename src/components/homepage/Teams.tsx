import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Teams.css';

const Teams: React.FC = () => {
  const revealRef = useScrollReveal();
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
    <section id="team" className="teams-section scroll-reveal" ref={revealRef as React.RefObject<HTMLDivElement>}>
      {/* GLASSMORPHIC AMBIENT GLOWS */}
      <div className="glass-glow glow-primary" aria-hidden="true"></div>
      <div className="glass-glow glow-accent" aria-hidden="true"></div>

      {/* MAIN CONTENT (ELEVATED) */}
      <div className="team-content-wrapper">
        <div className="teams-container">
          <div className="teams-header">
          <h2 className="teams-title">हमारी <span className="text-highlight">टीम</span></h2>
          <p className="teams-subtitle">मिशन को सफल बनाने वाले हमारे मुख्य स्तंभ</p>
        </div>

        <div className="teams-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} className="team-avatar" loading="lazy" decoding="async" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="teams-action-wrapper">
          <a href="/team" className="btn-primary">पूरी टीम देखें</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
