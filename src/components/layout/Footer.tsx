import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Sakhi Grih Udyog</h3>
          <p>Empowering communities in Patna, Bihar through skill development and social welfare initiatives.</p>
        </div>
        <div className="footer-links">
          <h4>Gallery Module</h4>
          <p>This module showcases the impact of our programs through photography and stories.</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Patna, Bihar, India</p>
          <p>Email: info@sakhigrihudyog.org</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sakhi Grih Udyog. All rights reserved.</p>
      </div>
    </footer>
  );
};
