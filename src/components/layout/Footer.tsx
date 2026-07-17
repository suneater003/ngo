import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">Sakhi Grih Udyog</h3>
          <p className="footer-text">Empowering communities in Patna, Bihar through skill development and social welfare initiatives.</p>
        </div>
        <div className="footer-links">
          <h4 className="footer-subtitle">Gallery Module</h4>
          <p className="footer-text">This module showcases the impact of our programs through photography and stories.</p>
        </div>
        <div className="footer-contact">
          <h4 className="footer-subtitle">Contact Us</h4>
          <p className="footer-text">Patna, Bihar, India</p>
          <p className="footer-text">Email: info@sakhigrihudyog.org</p>
          <p className="footer-text">Phone: +91 9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} Sakhi Grih Udyog. All rights reserved.</p>
      </div>
    </footer>
  );
};
