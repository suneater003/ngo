import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hoverLift } from '../../utils/animations';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

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
        
        <Link to="/" className="navbar-brand" aria-label="Home">
          <img src="/assets/logo.png" alt="Sakhi Greh Udyog Logo" className="navbar-logo" decoding="async" />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links desktop-only" aria-label="Main Navigation">
          <Link to="/" className={isActive('/', '') ? 'active' : ''}>होम</Link>
          <Link to="/mission" className={isActive('/mission') ? 'active' : ''}>मिशन</Link>
          <Link to="/#projects" className={isActive('/', '#projects') ? 'active' : ''}>परियोजनाएं</Link>
          <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>गैलरी</Link>
          <Link to="/team" className={isActive('/team') ? 'active' : ''}>हमारी टीम</Link>
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
            <Link to="/" className={isActive('/', '') ? 'active' : ''} onClick={() => setIsOpen(false)}>होम</Link>
            <Link to="/mission" className={isActive('/mission') ? 'active' : ''} onClick={() => setIsOpen(false)}>मिशन</Link>
            <Link to="/#projects" className={isActive('/', '#projects') ? 'active' : ''} onClick={() => setIsOpen(false)}>परियोजनाएं</Link>
            <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''} onClick={() => setIsOpen(false)}>गैलरी</Link>
            <Link to="/team" className={isActive('/team') ? 'active' : ''} onClick={() => setIsOpen(false)}>हमारी टीम</Link>
            <a href="/#contact" className="mobile-contact" onClick={() => setIsOpen(false)}>संपर्क करें</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
