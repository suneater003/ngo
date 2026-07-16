import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          Sakhi Grih Udyog
        </a>
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => setIsOpen(false)}>Gallery</a>
        </nav>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
