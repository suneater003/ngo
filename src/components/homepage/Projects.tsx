import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, cardFadeUp } from '../../utils/animations';
import { ProjectOrbs } from './ProjectOrbs';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "स्वास्थ्य जागरूकता अभियान",
      description: "ओपीडी शुल्क माफ़ी, जाँच में विशेष छूट और 'सखी स्वास्थ्य कार्ड' के माध्यम से दीर्घकालिक चिकित्सा सहायता।",
      image: "/assets/image copy 4.png",
      linkTarget: "/projects#health"
    },
    {
      id: 2,
      title: "सखी व्यापार और उद्यमिता",
      description: "कम पूंजी के साथ महिलाओं को उद्यमी बनाना। फाउंडेशन सही उत्पाद के चुनाव से लेकर उसे घर बैठे तैयार करने का संपूर्ण प्रशिक्षण प्रदान करता है।",
      image: "/assets/image copy 2.png",
      linkTarget: "/projects#vyapar"
    },
    {
      id: 3,
      title: "सखी सहयोग",
      description: "महिलाओं की छोटी-छोटी बचतों को एक बड़ी ताकत में बदलते हैं। 'सबका सहयोग, सबका विकास' के मंत्र के साथ सूक्ष्म-वित्तीय ढांचा।",
      image: "/assets/image copy 3.png",
      linkTarget: "/projects#sahyog"
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
                <Link className="project-card-cta card-cta" to={project.linkTarget}>विस्तार से पढ़ें</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
