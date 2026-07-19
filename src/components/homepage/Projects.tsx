import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, cardFadeUp } from '../../utils/animations';
import { ProjectOrbs } from './ProjectOrbs';
import './Projects.css';

const Projects: React.FC = () => {
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
    <section id="projects" className="projects-section">
      <ProjectOrbs />
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="projects-title">हमारी <span className="text-highlight">परियोजनाएं</span></h2>
          <p className="projects-subtitle">समाज में सकारात्मक बदलाव की ओर हमारे कदम</p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} className="project-card" variants={cardFadeUp}>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
