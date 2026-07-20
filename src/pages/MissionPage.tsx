import { motion } from 'framer-motion';
import { FaGraduationCap, FaFemale, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';
import { heroFadeUp, staggerContainer, cardFadeUp } from '../utils/animations';
import { BackgroundOrbs } from '../components/layout/BackgroundOrbs';
import './MissionPage.css';

const MissionPage = () => {
  const missions = [
    {
      id: 1,
      anchorId: "education",
      label: "Education",
      title: "शिक्षा और ज्ञान का प्रसार",
      paragraphs: [
        "हम मानते हैं कि शिक्षा ही समाज में सच्चे और स्थायी बदलाव की कुंजी है। सखी गृह उद्योग फाउंडेशन ग्रामीण और पिछड़े क्षेत्रों में बच्चों और युवाओं को गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध है।",
        "हमारा लक्ष्य है कि कोई भी बच्चा आर्थिक तंगी के कारण शिक्षा से वंचित न रहे। हम विभिन्न शैक्षणिक कार्यक्रम, छात्रवृत्ति और कौशल विकास कार्यशालाएं आयोजित करते हैं।"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      icon: <FaGraduationCap size={24} />
    },
    {
      id: 2,
      anchorId: "empowerment",
      label: "Women Empowerment",
      title: "महिला सशक्तिकरण",
      paragraphs: [
        "महिलाओं की आर्थिक और सामाजिक स्वतंत्रता हमारे संगठन का मुख्य स्तंभ है। हम महिलाओं को स्वरोजगार और कौशल विकास के अवसर प्रदान करके उन्हें आत्मनिर्भर बनाने की दिशा में काम करते हैं।",
        "सिलाई, कढ़ाई, और लघु उद्योग प्रशिक्षण के माध्यम से हम हज़ारों महिलाओं को स्वावलंबी बना चुके हैं। जब एक महिला सशक्त होती है, तो पूरा परिवार और समाज सशक्त होता है।"
      ],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
      icon: <FaFemale size={24} />
    },
    {
      id: 3,
      anchorId: "healthcare",
      label: "Healthcare",
      title: "स्वास्थ्य एवं चिकित्सा सेवा",
      paragraphs: [
        "स्वस्थ नागरिक ही एक स्वस्थ राष्ट्र का निर्माण कर सकते हैं। हम वंचित समुदायों तक बुनियादी चिकित्सा सुविधाएं और स्वास्थ्य जागरूकता पहुंचाने के लिए निरंतर प्रयासरत हैं।",
        "निःशुल्क चिकित्सा शिविर, दवा वितरण, और मातृ-शिशु स्वास्थ्य कार्यक्रमों के माध्यम से हमारा उद्देश्य समाज के अंतिम छोर तक स्वास्थ्य सेवाएं सुनिश्चित करना है।"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      icon: <FaHeartbeat size={24} />
    },
    {
      id: 4,
      anchorId: "community",
      label: "Community",
      title: "सामुदायिक विकास",
      paragraphs: [
        "सच्चा विकास तभी संभव है যখন पूरा समुदाय एक साथ आगे बढ़े। हम स्थानीय लोगों के साथ मिलकर पर्यावरण संरक्षण, स्वच्छता अभियान, और जल संरक्षण जैसे महत्वपूर्ण मुद्दों पर काम करते हैं।",
        "हमारा प्रयास है कि हम एक ऐसा समाज बनाएं जो न केवल आज की ज़रूरतों को पूरा करे, बल्कि आने वाली पीढ़ियों के लिए भी एक बेहतर और सुरक्षित भविष्य सुनिश्चित करे।"
      ],
      image: "https://images.unsplash.com/photo-1593113589914-075990141ce7?q=80&w=1200&auto=format&fit=crop",
      icon: <FaHandsHelping size={24} />
    }
  ];

  return (
    <main className="mission-page" style={{ position: 'relative', zIndex: 1 }}>
      <div className="mission-orbs-wrapper">
        <BackgroundOrbs count={30} />
      </div>

      {/* Hero Section */}
      <section className="mission-hero">
        <div className="decor-orb orb-1"></div>
        <div className="decor-orb orb-2"></div>
        
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={heroFadeUp} className="hero-badge">
              हमारा मिशन
            </motion.span>
            <motion.h1 variants={heroFadeUp} className="hero-title">
              सशक्त समाज, <span className="text-highlight">उज्ज्वल भविष्य</span>
            </motion.h1>
            <motion.p variants={heroFadeUp} className="hero-subtitle">
              शिक्षा, सशक्तिकरण, सामुदायिक विकास और टिकाऊ पहल के माध्यम से सार्थक और स्थायी सामाजिक प्रभाव पैदा करने के लिए एक साथ काम करना।
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mission-overview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="vision-manifesto">
              <strong>सखी गृह उद्योग फाउंडेशन</strong> की स्थापना इस विश्वास के साथ की गई थी कि जब महिलाएं और हाशिए पर रहने वाले समुदाय सशक्त होते हैं, तो पूरा देश तरक्की करता है। हम केवल एक संस्था नहीं, बल्कि एक आंदोलन हैं जो ज़मीनी स्तर पर बदलाव लाने के लिए प्रतिबद्ध है।
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Mission Blocks */}
      <section className="mission-blocks" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mission-orbs-wrapper">
        <BackgroundOrbs count={20} />
      </div>
        <div className="container">
          {missions.map((mission, index) => {
            const isEven = index % 2 !== 0; // 0 is first (odd visual), 1 is even visual
            return (
              <div 
                key={mission.id} 
                id={mission.anchorId}
                className={`mission-row ${isEven ? 'mission-row-reverse' : ''}`}
                style={{ scrollMarginTop: '100px' }}
              >
                <motion.div 
                  className="mission-image-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={mission.image} 
                    alt={mission.title} 
                    className="mission-image" 
                    loading="lazy" 
                    onError={(e) => { 
                      e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"; 
                    }} 
                  />
                </motion.div>
                
                <motion.div 
                  className="mission-content"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div variants={cardFadeUp} className="mission-icon-wrapper">
                    {mission.icon}
                  </motion.div>
                  <motion.span variants={cardFadeUp} className="mission-label">{mission.label}</motion.span>
                  <motion.h2 variants={cardFadeUp} className="mission-title">{mission.title}</motion.h2>
                  {mission.paragraphs.map((para, i) => (
                    <motion.p key={i} variants={cardFadeUp} className="mission-description">
                      {para}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MissionPage;
