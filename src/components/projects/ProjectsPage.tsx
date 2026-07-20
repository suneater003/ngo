import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundOrbs } from '../layout/BackgroundOrbs';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const projectsData = [
    {
      id: "vyapar",
      title: "सखी व्यापार (Trade & Entrepreneurship)",
      body: (
        <p>हमारा लक्ष्य महिलाओं को कम पूंजी से व्यापार शुरू करवाकर आर्थिक बोझ से मुक्त करना है। "अपना तैयार करना और अपने द्वारा ही बेचना" हमारी मुख्य रणनीति है। हम सखियों को घर बैठे उत्पाद बनाने का तकनीकी प्रशिक्षण देते हैं। इन उत्पादों को आधुनिक मार्केटिंग तकनीक—जैसे फेसबुक, इंस्टाग्राम, व्हाट्सएप और टेली-मार्केटिंग—के माध्यम से सीधे ग्राहकों तक पहुँचाया जाता है। इसके अतिरिक्त, हम महिलाओं को सरकारी योजनाओं से भी अवगत कराते हैं ताकि वे उनका पूर्ण लाभ उठा सकें।</p>
      ),
      image: "/assets/sakhi-vyapar.jpg"
    },
    {
      id: "sahyog",
      title: "सखी सहयोग (Micro-Finance)",
      body: (
        <p>यह पहल महिलाओं की छोटी-छोटी बचतों को एक बड़ी ताकत में बदलने का कार्य करती है। हम १५-१५ सखियों का समूह बनाते हैं, जो सप्ताह में एक दिन मिलकर अपनी आर्थिक स्थिति और व्यापारिक रणनीतियों पर चर्चा करती हैं।</p>
      ),
      metrics: [
        { title: "लॉकिंग अवधि", desc: "जमा राशि के लिए ६ महीने का अनिवार्य लॉकिंग समय।" },
        { title: "वित्तीय सहयोग", desc: "लॉकिंग अवधि के पश्चात, व्यापार विस्तार हेतु जमा राशि का १० से १५ गुना तक ऋण मात्र १% ब्याज पर प्रदान किया जाता है।" }
      ],
      image: "/assets/sakhi-sahyog.jpg" 
    },
    {
      id: "shiksha",
      title: "सखी शिक्षा (Education Initiative)",
      body: (
        <p>शिक्षा समाज में स्थायी बदलाव की कुंजी है। इस प्रक्रिया के तहत हमारी वे पढ़ी-लिखी सखियां, जो किन्हीं कारणों से बाहर नौकरी नहीं कर पाती हैं, अपने घर पर ही आर्थिक रूप से कमजोर सखियों के बच्चों को शिक्षा प्रदान करती हैं। हमारा भविष्य का लक्ष्य बच्चों की संख्या बढ़ने पर स्वतंत्र कोचिंग संस्थान और स्कूल स्थापित कर इन शिक्षित महिलाओं को पूर्ण रूप से आत्मनिर्भर बनाना है।</p>
      ),
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "health",
      title: "सखी स्वास्थ्य (Mega Medical Camps)",
      body: (
        <p>महिलाओं का उत्तम स्वास्थ्य हमारे संगठन की प्राथमिकता है। हम ग्रामीण क्षेत्रों में विशाल स्वास्थ्य शिविर लगाते हैं और अस्पतालों के साथ समन्वय कर ओपीडी (OPD) शुल्क माफ़ी एवं जाँच में विशेष छूट सुनिश्चित करते हैं। 'सखी स्वास्थ्य कार्ड' के माध्यम से हम नियमित जाँच की सुविधा प्रदान करते हैं।</p>
      ),
      metrics: [
        { title: "प्रथम शिविर (१ फरवरी २०२६)", desc: "मालसलामी स्थित भैरव नाथ मंदिर में नीतू सखी की अध्यक्षता में आयोजित। डॉ. शम्भू (सेंट्रल हॉस्पिटल) और देविता आई केयर की टीम द्वारा २०० सखियों का निःशुल्क इलाज।" },
        { title: "द्वितीय शिविर (१२ फरवरी २०२६)", desc: "मालसलामी हाता में पूजा देवी की अध्यक्षता में। सारा हॉस्पिटल एवं राम कृष्ण डेंटल केयर के विशेष सहयोग से २०० अन्य सखियों को स्वास्थ्य लाभ।" }
      ],
      image: "/assets/health-camp.jpg" 
    }
  ];

  return (
    <main className="projects-page" id="main-content">
      <BackgroundOrbs count={30} />
      
      <header className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="projects-hero-title">हमारी परियोजनाएं: <span className="highlight">सशक्त समाज की ओर</span></h1>
          <p className="projects-hero-subtitle">२५ दिसंबर २०२५ को स्थापित, सखी गृह उद्योग फाउंडेशन का मुख्य उद्देश्य महिलाओं को एक सूत्र में पिरोकर आत्मनिर्भर बनाना है।</p>
          <blockquote className="projects-hero-slogan">"न किसी का एहसान लेना न किसी पर एहसान करना। सबका सहयोग, सबका विकास।"</blockquote>
        </motion.div>
      </header>

      <section className="projects-list">
        {projectsData.map((project, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div 
              key={project.id} 
              id={project.id} 
              className={`project-row ${isEven ? 'project-row-reverse' : ''}`}
            >
              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image-content" 
                  loading="lazy" 
                  onError={(e) => { 
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"; 
                  }} 
                />
              </motion.div>
              
              <motion.div 
                className="project-text-container"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="project-title">{project.title}</h2>
                <div className="project-body">
                  {project.body}
                </div>
                {project.metrics && (
                  <div className="metric-grid">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="metric-item">
                        <div className="metric-item-title">{metric.title}</div>
                        <div className="metric-item-desc">{metric.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ProjectsPage;
