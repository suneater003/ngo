import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        
        <a href="/" className="navbar-brand">
          <img src="/assets/logo.png" alt="Sakhi Greh Udyog Logo" className="navbar-logo" />
        </a>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="active" onClick={() => setIsOpen(false)}>होम</a>
          <a href="#mission" onClick={() => setIsOpen(false)}>मिशन</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>गैलरी</a>
          <a href="#teams" onClick={() => setIsOpen(false)}>हमारी टीम</a>
        </nav>
        
        <div className="navbar-actions">
          <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>संपर्क करें</a>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
