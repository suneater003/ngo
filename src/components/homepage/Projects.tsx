import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ProjectOrbs } from './ProjectOrbs';
import './Projects.css';

const Projects: React.FC = () => {
  const revealRef = useScrollReveal();
  const projects = [
    {
      id: 1,
      title: "सिलाई प्रशिक्षण केंद्र",
      description: "सखियों को सिलाई का प्रशिक्षण देकर उन्हें आत्मनिर्भर और स्वावलंबी बनाने की एक प्रमुख पहल।",
      image: "/assets/image copy 2.png"
    },
    {
      id: 2,
      title: "हस्तशिल्प उत्पादन",
      description: "स्थानीय कला और हस्तशिल्प को बढ़ावा देना, जिससे महिलाओं को घर बैठे रोज़गार मिल सके।",
      image: "/assets/image copy 3.png"
    },
    {
      id: 3,
      title: "स्वास्थ्य जागरूकता अभियान",
      description: "गांव-गांव जाकर महिलाओं और बच्चों के स्वास्थ्य के प्रति जागरूकता फैलाना और चिकित्सा शिविर लगाना।",
      image: "/assets/image copy 4.png"
    }
  ];

  return (
    <section id="projects" className="projects-section scroll-reveal" ref={revealRef as React.RefObject<HTMLDivElement>}>
      <ProjectOrbs />
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">हमारी <span className="text-highlight">परियोजनाएं</span></h2>
          <p className="projects-subtitle">समाज में सकारात्मक बदलाव की ओर हमारे कदम</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" decoding="async" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <div className="card-text-wrapper">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>
                </div>
                <button className="project-card-cta card-cta">विस्तार से पढ़ें</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
