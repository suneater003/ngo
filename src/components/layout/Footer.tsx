import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Column 1: Brand & Mission */}
        <div className="footer-brand">
          <h3 className="footer-title">सखी गृह उद्योग फाउंडेशन</h3>
          <p className="footer-text">
            महिलाओं को सशक्त बनाना और कौशल विकास एवं सामाजिक कल्याण पहलों के माध्यम से आत्मनिर्भर समाज का निर्माण करना।
          </p>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-contact">
          <h4 className="footer-subtitle">संपर्क करें</h4>
          <p className="footer-text">पटना, बिहार, भारत</p>
          <p className="footer-text">ईमेल: hello@sakhigrehudyog.org</p>
          <p className="footer-text">फ़ोन: +91 98765 43210</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} सखी गृह उद्योग फाउंडेशन। सर्वाधिकार सुरक्षित।</p>
      </div>
    </footer>
  );
};
