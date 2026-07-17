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
    title: "Community Outreach",
    eventName: "Rural Empowerment Drive",
    category: "Community",
    date: "March 12, 2026",
    description: "Our volunteers reaching out to local artisans to provide essential raw materials and training.",
    imageUrl: "https://images.unsplash.com/photo-1593113565214-80afcb4dd27c?q=80&w=800&auto=format&fit=crop",
    altText: "Volunteers sitting with local women artisans"
  },
  {
    id: "2",
    title: "Skill Development",
    eventName: "Weaving Workshop",
    category: "Education",
    date: "April 05, 2026",
    description: "Teaching advanced weaving techniques to empower women with sustainable livelihood skills.",
    imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop",
    altText: "Hands working on a traditional loom"
  },
  {
    id: "3",
    title: "Healthcare Initiative",
    eventName: "Free Medical Camp",
    category: "Health",
    date: "May 20, 2026",
    description: "Providing free checkups and essential medicines to underserved communities in rural Bihar.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    altText: "Doctor examining a patient in a medical camp"
  },
  {
    id: "4",
    title: "Women Empowerment",
    eventName: "Leadership Seminar",
    category: "Community",
    date: "June 15, 2026",
    description: "A seminar focused on building leadership qualities and financial independence among rural women.",
    imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
    altText: "Women participating in a discussion"
  },
  {
    id: "5",
    title: "Educational Support",
    eventName: "School Supply Distribution",
    category: "Education",
    date: "July 01, 2026",
    description: "Distributing books, uniforms, and stationary to children to encourage primary education.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    altText: "Children holding new books and smiling"
  },
  {
    id: "6",
    title: "Sustainable Agriculture",
    eventName: "Organic Farming Training",
    category: "Livelihood",
    date: "July 10, 2026",
    description: "Training local farmers in organic farming methods to improve yield and sustainability.",
    imageUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800&auto=format&fit=crop",
    altText: "Farmer working in an organic field"
  }
];
