import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import './TeamPage.css';

export type Member = {
  name: string;
  role: string;
  mission: string;
  bio: string;
  phone: string;
  email: string;
  instagram: string;
  img: string;
  bg: string;
  accent: string;
};

export const leaders: Member[] = [
  {
    name: "श्री संजीव पाठक",
    role: "उपाध्यक्ष ",
    mission: "शिक्षा से ही समाज का सच्चा उत्थान संभव है।",
    bio: "आज के परिवेश में महिलाओं की आर्थिक स्थिति को देखते हुए उनकी मजबूती प्रदान करने के लिए इस समूह का गठन किया गया है इस समूह में सभी महिलाएं एक साथ एकत्रित होकर बैठती हैं और अपने उन्नति के लिए विचार करते हैं और आगे की ओर अग्रसर होती है इसलिए इस सखी गृह उद्योग फाउंडेशन का गठन किया गया।",
    phone: "+91 98100 12345",
    email: "sanjeev@janseva.org",
    instagram: "@sanjeev.janseva",
    img: "/assets/leader-1.jpeg",
    bg: "var(--color-morning)",
    accent: "var(--color-savoy)",
  },
  {
    name: "श्रीमती रिता",
    role: "अध्यक्ष",
    mission: "हर संकट में सेवा ही सबसे बड़ा धर्म है।",
    bio: "हम महिलाएं कमजोर नहीं है परंतु एकत्रित नहीं होने की वजह से हम दबे हुए हैं इस दबाव से छुटकारा पाने के लिए सभी महिलाओं को एक सूत्र में रखने हेतु इस समूह का गठन किया गया है।",
    phone: "+91 98200 22345",
    email: "rita1401devi@gmail.com",
    instagram: "@rita.janseva",
    img: "/assets/leader-2.jpeg",
    bg: "#dbeafe",
    accent: "#1e40af",
  },
];

const members: Member[] = [
  {
    name: "श्रीमती राधिका",
    role: "सखी सहयोग",
    mission: "ज़मीन पर उतर कर ही असली बदलाव संभव है।",
    bio: "मेरा मानना है कि हर महिला के अंदर एक सफल उद्यमी छिपी होती है। 'सखी सहयोग' के जरिए मेरी हमेशा यही कोशिश रहती है कि पैसों की कमी कभी भी किसी महिला के सपनों के आड़े न आए। मैं महिलाओं की छोटी बचतों को एक बड़ी ताकत में बदलने और उन्हें अपना लघु उद्योग शुरू करने के लिए आवश्यक आर्थिक सहयोग देने का काम करती हूँ। आइए, साथ मिलकर खुद को और समाज को सशक्त बनाएं।",
    phone: "+91 97110 45678",
    email: "arjun@janseva.org",
    instagram: "@arjun.field",
    img: "/assets/team-1.jpeg",
    bg: "#fef3c7",
    accent: "#a16207",
  },
  {
    name: "श्रीमती खुशबू",
    role: "सेल्स एंड मार्केटिंग",
    mission: "हर हाथ जो जुड़ता है, बदलाव को गति देता है।",
    bio: "पाँच सौ से अधिक स्वयंसेवकों के नेटवर्क की देखरेख। प्रशिक्षण शिविर, कार्यशालाएँ और स्वयंसेवी अभियान संचालित करती हैं।",
    phone: "+91 73609 72174",
    email: "khusboo@janseva.org",
    instagram: "@khusboo.volunteers",
    img: "/assets/team-2.jpeg",
    bg: "#fce7f3",
    accent: "#be185d",
  },
  {
    name: "श्रीमती जुली",
    role: "एकाउंटेंट",
    mission: "सही कहानी बदलाव का सबसे बड़ा हथियार है।",
    bio: "मीडिया, प्रकाशन और डिजिटल अभियानों के प्रभारी। संस्था की वार्षिक रिपोर्ट और सामाजिक-मीडिया अभियानों का नेतृत्व करते हैं।",
    phone: "+91 81023 08890",
    email: "juli@janseva.org",
    instagram: "@juli.stories",
    img: "/assets/team-3.jpeg",
    bg: "#d1fae5",
    accent: "#047857",
  },
  {
    name: "श्रीमती दिपा",
    role: "सखी व्यापार",
    mission: "पारदर्शिता ही जन-विश्वास की नींव है।",
    bio: "दान, अनुदान और वित्तीय पारदर्शिता की देखरेख। CA-योग्य पेशेवर, जो हर रुपये का लेखा-जोखा जन-सुलभ बनाती हैं।",
    phone: "+91 70043 00266",
    email: "dipa@janseva.org",
    instagram: "@dipa.finance",
    img: "/assets/team-4.jpeg",
    bg: "#ffe4e6",
    accent: "#9f1239",
  },
  {
    name: "श्रीमती सिमा",
    role: "सखी स्वास्थ्य",
    mission: "युवा शक्ति ही कल का नेतृत्व है।",
    bio: "युवा नेतृत्व एवं कौशल विकास कार्यक्रमों के सह-संयोजक। कॉलेजों और स्कूलों में कार्यशालाएँ आयोजित करते हैं।",
    phone: "+91 93345 21267",
    email: "sima@janseva.org",
    instagram: "@sima.youth",
    img: "/assets/team-5.jpeg",
    bg: "#cffafe",
    accent: "#155e75",
  },
];

function Brush({ color }: { color: string }) {
  return (
    <svg
      className="team-brush"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M30 60 Q10 100 40 140 Q70 175 120 165 Q170 155 180 110 Q190 65 150 40 Q100 15 60 35 Q35 45 30 60 Z"
        fill={color}
        opacity="0.55"
      />
    </svg>
  );
}

function MemberCard({ m, size, onOpen }: { m: Member; size: "lg" | "sm"; onOpen: (m: Member) => void }) {
  return (
    <article
      className={`team-card team-card-${size}`}
      style={{ backgroundColor: m.bg }}
    >
      <button
        type="button"
        onClick={() => onOpen(m)}
        className="team-card-image-wrapper"
        aria-label={`${m.name} के बारे में और जानें`}
      >
        <Brush color={m.accent} />
        <img
          src={m.img}
          alt={m.name}
          loading={size === "lg" ? undefined : "lazy"}
          className="team-card-image"
        />
      </button>
      <h3 className="team-card-name" style={{ color: m.accent }}>
        {m.name}
      </h3>
      <p className="team-card-role" style={{ color: m.accent }}>
        {m.role}
      </p>
      <div className="team-card-divider" style={{ backgroundColor: m.accent }} />
      <p className="team-card-mission">
        {m.mission}
      </p>
    </article>
  );
}

export function MemberModal({ m, onClose }: { m: Member; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="team-modal-overlay" onClick={onClose}>
      <motion.div 
        className="team-modal-content"
        style={{ backgroundColor: m.bg }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="team-modal-inner">
          <div className="team-modal-image-wrapper">
            <Brush color={m.accent} />
            <div className="team-modal-avatar-wrapper">
              <img src={m.img} alt={m.name} className="team-modal-image" />
            </div>
          </div>
          <h3 className="team-modal-name" style={{ color: m.accent }}>{m.name}</h3>
          <p className="team-modal-role" style={{ color: m.accent }}>{m.role}</p>
          <div className="team-modal-divider" style={{ backgroundColor: m.accent }} />
          <p className="team-modal-bio">{m.bio}</p>

          <div className="team-modal-contact">
            <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="team-contact-link">
              <Phone size={18} style={{ color: m.accent }} />
              <span>{m.phone}</span>
            </a>
            <a href={`mailto:${m.email}`} className="team-contact-link">
              <Mail size={18} style={{ color: m.accent }} />
              <span>{m.email}</span>
            </a>
            <a href={`https://instagram.com/${m.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" className="team-contact-link">
              <FaInstagram size={18} style={{ color: m.accent }} />
              <span>{m.instagram}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TeamPage() {
  const [active, setActive] = useState<Member | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="team-page" tabIndex={-1} id="main-content">
      {/* Hero */}
      <section className="team-hero">
        <p className="team-hero-subtitle">हमारी टीम</p>
        <h1 className="team-hero-title">
          समर्पित हाथ, <span className="highlight">करुणामय हृदय</span>
        </h1>
        <p className="team-hero-description">
          किसी भी सदस्य की तस्वीर पर क्लिक करें और उनके बारे में विस्तार से जानें — संपर्क, ईमेल और सामाजिक-मीडिया के साथ।
        </p>
      </section>

      <div className="team-premium-divider">
        <div className="team-premium-divider-line"></div>
        <div className="team-premium-divider-accent"></div>
        <div className="team-premium-divider-line"></div>
      </div>

      {/* Leadership */}
      <section className="team-section">
        <div className="team-section-header">
          <div>
            <h2 className="team-section-title">वरिष्ठ नेतृत्व</h2>
            <p className="team-section-subtitle">संस्था की दिशा और दृष्टि तय करने वाले।</p>
          </div>
          <div className="team-section-line" />
        </div>
        <div className="team-grid team-grid-lg">
          {leaders.map((m) => (
            <MemberCard key={m.name} m={m} size="lg" onOpen={setActive} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-section-header">
          <div>
            <h2 className="team-section-title">अहम् सदस्य</h2>
            <p className="team-section-subtitle">हमारे NGO के मुख्य स्तम्भ।</p>
          </div>
          <div className="team-section-line" />
        </div>
        <div className="team-grid team-grid-sm">
          {members.map((m) => (
            <MemberCard key={m.name} m={m} size="sm" onOpen={setActive} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && <MemberModal m={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </main>
  );
}
