import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Mail, Phone, Instagram, X } from "lucide-react";
import leader1 from "@/assets/leader-1.jpeg";
import leader2 from "@/assets/leader-2.jpeg";
import leader3 from "@/assets/leader-3.jpg";
import team1 from "@/assets/team-1.jpeg";

import team2 from "@/assets/team-2.jpeg";
import team3 from "@/assets/team-3.jpeg";
import team4 from "@/assets/team-4.jpeg";
import team5 from "@/assets/team-5.jpeg";

export const Route = createFileRoute("/")({
  component: TeamPage,
});

type Member = {
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

const leaders: Member[] = [
  {
    name: "श्री संजीव पाठक",
    role: "अध्यक्ष",
    mission: "शिक्षा से ही समाज का सच्चा उत्थान संभव है।",
    bio: "आज के परिवेश में महिलाओं की आर्थिक स्थिति को देखते हुए उनकी मजबूती प्रदान करने के लिए इस समूह का गठन किया गया है इस समूह में सभी महिलाएं एक साथ एकत्रित होकर बैठती हैं और अपने उन्नति के लिए विचार करते हैं और आगे की ओर अग्रसर होती है इसलिए इस सखी गृह उद्योग फाउंडेशन का गठन किया गया।",
    phone: "+91 98100 12345",
    email: "sanjeev@janseva.org",
    instagram: "@sanjeev.janseva",
    img: leader1,
    bg: "#f5e6d3",
    accent: "#c2410c",
  },
  {
    name: "श्रीमती रिता",
    role: "उपाध्यक्ष",
    mission: "हर संकट में सेवा ही सबसे बड़ा धर्म है।",
    bio: "हम महिलाएं कमजोर नहीं है परंतु एकत्रित नहीं होने की वजह से हम दबे हुए हैं इस दबाव से छुटकारा पाने के लिए सभी महिलाओं को एक सूत्र में रखने हेतु इस समूह का गठन किया गया है।",
    phone: "+91 98200 22345",
    email: "rita1401devi@gmail.com",
    instagram: "@rita.janseva",
    img: leader2,
    bg: "#dbeafe",
    accent: "#1e40af",
  },
  {
    name: "डॉ. अनीता देसाई",
    role: "सचिव",
    mission: "बच्चों की मुस्कान में ही देश का भविष्य बसता है।",
    bio: "शिक्षा नीति और बाल कल्याण की विशेषज्ञ। हमारे सभी विद्यालय कार्यक्रमों की संचालिका, जिन्होंने बाल-मैत्री पाठ्यक्रम और पोषण योजनाओं की नींव रखी।",
    phone: "+91 98300 32345",
    email: "anita@janseva.org",
    instagram: "@dr.anita.desai",
    img: leader3,
    bg: "#e9d5ff",
    accent: "#6b21a8",
  },
];

const members: Member[] = [
  {
    name: "राधिका",
    role: "सखी सहयोग",
    mission: "ज़मीन पर उतर कर ही असली बदलाव संभव है।",
    bio: "उत्तर प्रदेश और बिहार में ज़मीनी कार्यक्रमों का संचालन करते हैं। ग्राम-सभाओं के साथ मिलकर स्थायी विकास परियोजनाएँ लागू करते हैं।",
    phone: "+91 97110 45678",
    email: "arjun@janseva.org",
    instagram: "@arjun.field",
    img: team1,
    bg: "#fef3c7",
    accent: "#a16207",
  },
  {
    name: "खुशबू",
    role: "सेल्स एंड मार्केटिंग",
    mission: "हर हाथ जो जुड़ता है, बदलाव को गति देता है।",
    bio: "पाँच सौ से अधिक स्वयंसेवकों के नेटवर्क की देखरेख। प्रशिक्षण शिविर, कार्यशालाएँ और स्वयंसेवी अभियान संचालित करती हैं।",
    phone: "+91 73609 72174",
    email: "khusboo@janseva.org",
    instagram: "@khusboo.volunteers",
    img: team2,
    bg: "#fce7f3",
    accent: "#be185d",
  },
  {
    name: "जुली",
    role: "एकाउंटेंट",
    mission: "सही कहानी बदलाव का सबसे बड़ा हथियार है।",
    bio: "मीडिया, प्रकाशन और डिजिटल अभियानों के प्रभारी। संस्था की वार्षिक रिपोर्ट और सामाजिक-मीडिया अभियानों का नेतृत्व करते हैं।",
    phone: "+91 81023 08890",
    email: "juli@janseva.org",
    instagram: "@juli.stories",
    img: team3,
    bg: "#d1fae5",
    accent: "#047857",
  },
  {
    name: "दिपा",
    role: "सखी व्यापार",
    mission: "पारदर्शिता ही जन-विश्वास की नींव है।",
    bio: "दान, अनुदान और वित्तीय पारदर्शिता की देखरेख। CA-योग्य पेशेवर, जो हर रुपये का लेखा-जोखा जन-सुलभ बनाती हैं।",
    phone: "+91 70043 00266",
    email: "dipa@janseva.org",
    instagram: "@dipa.finance",
    img: team4,
    bg: "#ffe4e6",
    accent: "#9f1239",
  },
  {
    name: "सिमा",
    role: "सखी स्वास्थ्य",
    mission: "युवा शक्ति ही कल का नेतृत्व है।",
    bio: "युवा नेतृत्व एवं कौशल विकास कार्यक्रमों के सह-संयोजक। कॉलेजों और स्कूलों में कार्यशालाएँ आयोजित करते हैं।",
    phone: "+91 93345 21267",
    email: "sima@janseva.org",
    instagram: "@sima.youth",
    img: team5,
    bg: "#cffafe",
    accent: "#155e75",
  },
];

function Brush({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
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

function MemberCard({
  m,
  size,
  onOpen,
}: {
  m: Member;
  size: "lg" | "sm";
  onOpen: (m: Member) => void;
}) {
  const imgSize = size === "lg" ? "h-44 w-44" : "h-28 w-28";
  const nameSize = size === "lg" ? "text-2xl" : "text-lg";
  const roleSize = size === "lg" ? "text-sm" : "text-[11px]";
  const missionSize = size === "lg" ? "text-[15px]" : "text-[13px]";
  const padding = size === "lg" ? "p-8" : "p-6";
  const rounded = size === "lg" ? "rounded-3xl" : "rounded-2xl";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden ${rounded} ${padding} shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1`}
      style={{ backgroundColor: m.bg }}
    >
      <button
        type="button"
        onClick={() => onOpen(m)}
        className={`relative mx-auto mb-${size === "lg" ? "6" : "4"} ${imgSize} cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none`}
        aria-label={`${m.name} के बारे में और जानें`}
      >
        <Brush color={m.accent} />
        <img
          src={m.img}
          alt={m.name}
          width={512}
          height={512}
          loading={size === "lg" ? undefined : "lazy"}
          className={`relative z-10 ${imgSize} rounded-full object-cover object-top ring-4 ring-white`}
        />
      </button>
      <h3
        className={`font-display text-center ${nameSize}`}
        style={{ color: m.accent }}
      >
        {m.name}
      </h3>
      <p
        className={`mt-1 text-center ${roleSize} font-semibold uppercase tracking-widest`}
        style={{ color: m.accent, opacity: 0.75 }}
      >
        {m.role}
      </p>
      <div
        className={`mx-auto my-${size === "lg" ? "4" : "3"} h- 2px w-${size === "lg" ? "12" : "8"}`}
        style={{ backgroundColor: m.accent, opacity: 0.4 }}
      />
      <p
        className={`text-center font-serif-hi ${missionSize} leading-relaxed text-neutral-800`}
      >
        {m.mission}
      </p>
    </article>
  );
}

function MemberModal({ m, onClose }: { m: Member; onClose: () => void }) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl animate-in zoom-in-95"
        style={{ backgroundColor: m.bg }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white/80 p-2 text-neutral-700 hover:bg-white"
          aria-label="बंद करें"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-8 text-center">
          <div className="relative mx-auto mb-5 h-56 w-56">
            <Brush color={m.accent} />
            <img
              src={m.img}
              alt={m.name}
              className="relative z-10 h-56 w-56 rounded-full object-cover object-top ring-4 ring-white"
            />
          </div>
          <h3 className="font-display text-3xl" style={{ color: m.accent }}>
            {m.name}
          </h3>
          <p
            className="mt-1 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: m.accent, opacity: 0.8 }}
          >
            {m.role}
          </p>
          <div
            className="mx-auto my-4 h-2px w-12"
            style={{ backgroundColor: m.accent, opacity: 0.5 }}
          />
          <p className="font-serif-hi text-base leading-relaxed text-neutral-800">
            {m.bio}
          </p>

          <div className="mt-6 space-y-2 rounded-2xl bg-white/70 p-4 text-left text-sm">
            <a
              href={`tel:${m.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-neutral-800 hover:bg-white"
            >
              <Phone className="h-4 w-4" style={{ color: m.accent }} />
              <span>{m.phone}</span>
            </a>
            <a
              href={`mailto:${m.email}`}
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-neutral-800 hover:bg-white"
            >
              <Mail className="h-4 w-4" style={{ color: m.accent }} />
              <span>{m.email}</span>
            </a>
            <a
              href={`https://instagram.com/${m.instagram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-neutral-800 hover:bg-white"
            >
              <Instagram className="h-4 w-4" style={{ color: m.accent }} />
              <span>{m.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamPage() {
  const [active, setActive] = useState<Member | null>(null);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf7f2" }}>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-display text-lg text-white">
              ज
            </div>
            <span className="font-display text-lg text-neutral-900">
              जन सेवा फाउंडेशन
            </span>
          </a>
          <nav className="hidden gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-neutral-700 hover:text-orange-700"
            >
              मुख्य पृष्ठ
            </a>
            <a
              href="#"
              className="text-sm text-neutral-700 hover:text-orange-700"
            >
              हमारे बारे में
            </a>
            <a href="#" className="text-sm font-semibold text-orange-700">
              हमारी टीम
            </a>
            <a
              href="#"
              className="text-sm text-neutral-700 hover:text-orange-700"
            >
              कार्यक्रम
            </a>
            <a
              href="#"
              className="text-sm text-neutral-700 hover:text-orange-700"
            >
              संपर्क
            </a>
          </nav>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-600 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            मुख्य पृष्ठ
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
          हमारी टीम
        </p>
        <h1 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-tight text-neutral-900 md:text-6xl">
          समर्पित हाथ, <span className="text-orange-700">करुणामय हृदय</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-serif-hi text-lg leading-relaxed text-neutral-700">
          किसी भी सदस्य की तस्वीर पर क्लिक करें और उनके बारे में विस्तार से
          जानें — संपर्क, ईमेल और सामाजिक-मीडिया के साथ।
        </p>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-neutral-900">
              वरिष्ठ नेतृत्व
            </h2>
            <p className="mt-1 font-serif-hi text-neutral-600">
              संस्था की दिशा और दृष्टि तय करने वाले।
            </p>
          </div>
          <div className="hidden h-2px flex-1 max-w-xs bg-neutral-300 md:block ml-8 mb-3" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {leaders.map((m) => (
            <MemberCard key={m.name} m={m} size="lg" onOpen={setActive} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-neutral-900">
              कार्यकारी सदस्य
            </h2>
            <p className="mt-1 font-serif-hi text-neutral-600">
              ज़मीन पर काम करने वाली हमारी टीम।
            </p>
          </div>
          <div className="hidden h-2px flex-1 max-w-xs bg-neutral-300 md:block ml-8 mb-3" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {members.map((m) => (
            <MemberCard key={m.name} m={m} size="sm" onOpen={setActive} />
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-50 py-8 text-center font-serif-hi text-sm text-neutral-500">
        © {new Date().getFullYear()} जन सेवा फाउंडेशन — सर्वे भवन्तु सुखिनः
      </footer>

      {active && <MemberModal m={active} onClose={() => setActive(null)} />}
    </main>
  );
}
