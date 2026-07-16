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
          <div className="navbar-logo-circle">
            <span>SG</span>
          </div>
          <div className="navbar-title-container">
            <h1 className="navbar-title">Sakhi Grih Udyog</h1>
            <span className="navbar-subtitle">Women Empowerment &bull; Patna, Bihar</span>
          </div>
        </a>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => setIsOpen(false)}>Gallery</a>
        </nav>

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
