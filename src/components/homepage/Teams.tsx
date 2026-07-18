import React from 'react';
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
    },
    {
      id: 3,
      name: "सखी ३",
      role: "मुख्य सलाहकार",
      image: "/assets/image copy 2.png"
    },
    {
      id: 4,
      name: "सखी ४",
      role: "परियोजना प्रबंधक",
      image: "/assets/image copy 3.png"
    }
  ];

  return (
    <section id="teams" className="teams-section">
      <div className="teams-container">
        <div className="teams-header">
          <h2 className="teams-title">हमारी <span className="text-highlight">टीम</span></h2>
          <p className="teams-subtitle">मिशन को सफल बनाने वाले हमारे मुख्य स्तंभ</p>
        </div>

        <div className="teams-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} className="team-avatar" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
