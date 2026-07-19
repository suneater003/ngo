export const premiumEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const heroFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: premiumEasing,
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const cardFadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEasing,
    }
  }
};

export const hoverLift = {
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: premiumEasing,
    }
  },
  tap: {
    scale: 0.98,
    y: 0,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      ease: premiumEasing,
    }
  }
};
