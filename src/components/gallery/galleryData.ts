export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  eventName: string;
  description: string;
  date: string;
  altText: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "सखि व्यापार",
    eventName: "रोज़गार पहल",
    category: "व्यापार",
    date: "मार्च 12, 2026",
    description: "स्थानीय महिलाओं को आवश्यक कच्चा माल और प्रशिक्षण प्रदान करते हुए हमारे कार्यकर्ता।",
    imageUrl: "/assets/image.png",
    altText: "सखि व्यापार"
  },
  {
    id: "2",
    title: "कौशल विकास",
    eventName: "सिलाई कार्यशाला",
    category: "शिक्षा",
    date: "अप्रैल 05, 2026",
    description: "महिलाओं को आत्मनिर्भर बनाने के लिए उन्नत कौशल सिखाना।",
    imageUrl: "/assets/image copy.png",
    altText: "कौशल विकास कार्यशाला"
  },
  {
    id: "3",
    title: "स्वास्थ्य पहल",
    eventName: "निःशुल्क चिकित्सा शिविर",
    category: "स्वास्थ्य",
    date: "मई 20, 2026",
    description: "ग्रामीण सखियों के लिए मुफ्त जांच और आवश्यक दवाएं प्रदान करना।",
    imageUrl: "/assets/image copy 2.png",
    altText: "चिकित्सा शिविर"
  },
  {
    id: "4",
    title: "महिला सशक्तिकरण",
    eventName: "नेतृत्व संगोष्ठी",
    category: "समुदाय",
    date: "जून 15, 2026",
    description: "ग्रामीण महिलाओं के बीच नेतृत्व के गुण और वित्तीय स्वतंत्रता के निर्माण पर केंद्रित एक संगोष्ठी।",
    imageUrl: "/assets/image copy 3.png",
    altText: "संगोष्ठी में महिलाएं"
  },
  {
    id: "5",
    title: "शैक्षिक सहायता",
    eventName: "पुस्तक वितरण",
    category: "शिक्षा",
    date: "जुलाई 01, 2026",
    description: "प्राथमिक शिक्षा को प्रोत्साहित करने के लिए बच्चों को किताबें और स्टेशनरी वितरित करना।",
    imageUrl: "/assets/image copy 4.png",
    altText: "मुस्कुराते बच्चे"
  }
];
