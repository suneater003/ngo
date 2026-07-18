import React from 'react';
import './Mission.css';

const Mission: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "सखि व्यापार",
      description: "सखियों को व्यापार करने के लिए प्रोत्साहित करना तथा उनका आर्थिक विकास करना।",
      image: "/assets/image copy 2.png"
    },
    {
      id: 2,
      title: "सखी सहयोग",
      description: "छोटी रकम जमा कर व्यापार करने के लिए सहयोग राशि प्रदान करना।",
      image: "/assets/image copy 3.png"
    },
    {
      id: 3,
      title: "सखी शिक्षा",
      description: "कमजोर सखियों के बच्चों को शिक्षा प्रदान कर उन्हें आत्मनिर्भर बनाना।",
      image: "/assets/image copy 4.png"
    },
    {
      id: 4,
      title: "सखी स्वास्थ्य",
      description: "सखियों को स्वास्थ्य के प्रति जागरूक करना और चिकित्सा सहायता प्रदान करना।",
      image: "/assets/image.png"
    }
  ];

  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        <div className="mission-header">
          <h2 className="mission-title">हमारा <span className="text-highlight">मिशन</span></h2>
          <p className="mission-subtitle">सखियों का उन्नतिकरण एवं सशक्तिकरण</p>
        </div>
        
        <div className="mission-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="mission-card">
              <div className="card-image-wrapper">
                <img src={pillar.image} alt={pillar.title} className="card-image" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-description">{pillar.description}</p>
                <button className="card-cta">और जानें</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
