import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { hoverLift } from '../../utils/animations';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        <a href="/" className="navbar-brand" aria-label="Home">
          <img src="/assets/logo.png" alt="Sakhi Greh Udyog Logo" className="navbar-logo" decoding="async" />
        </a>

        {/* Desktop Links */}
        <nav className="navbar-links desktop-only" aria-label="Main Navigation">
          <a href="#home" className="active">होम</a>
          <a href="#mission">मिशन</a>
          <a href="#projects">परियोजनाएं</a>
          <a href="#gallery">गैलरी</a>
          <a href="#teams">हमारी टीम</a>
        </nav>
        
        <div className="navbar-actions">
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={hoverLift.hover}
            whileTap={hoverLift.tap}
          >
            संपर्क करें
          </motion.a>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu via Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            id="mobile-menu"
            className="navbar-links mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#home" className="active" onClick={() => setIsOpen(false)}>होम</a>
            <a href="#mission" onClick={() => setIsOpen(false)}>मिशन</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>परियोजनाएं</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>गैलरी</a>
            <a href="#teams" onClick={() => setIsOpen(false)}>हमारी टीम</a>
            <a href="#contact" className="mobile-contact" onClick={() => setIsOpen(false)}>संपर्क करें</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
