import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // 1. Extract data safely from the native DOM event
    const formData = new FormData(formElement);

    // 2. Explicitly map the HTML 'name' attributes to the EmailJS variables
    const templateParams = {
      first_name: (formData.get('first_name') as string) || '',
      last_name: (formData.get('last_name') as string) || '',
      user_email: (formData.get('user_email') as string) || '',
      user_phone: (formData.get('user_phone') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    try {
      // 3. Use .send() instead of .sendForm()
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log('SUCCESS!');
      setSubmitStatus('success');
      formElement.reset(); // Clear the form
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="ambient-orb orb-teal"></div>
      <div className="ambient-orb orb-accent"></div>
      
      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info-card">
          <h2>संपर्क जानकारी</h2>
          
          <div className="info-items">
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+91 9199075985</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+91 7324858874</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>sakhigirhudhyogfoundation@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Sanjay Gandhi Nagar, Hanuman Nagar, Kankarbagh, Patna-20</span>
            </div>
          </div>

          <div className="social-items">
            <a href="https://www.facebook.com/sakhi.grha.udyoga.samiti" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><FaFacebook className="social-icon" /></a>
            <a href="https://www.instagram.com/sakhi_grih_udhyog_foundation?igsh=dHptZGhjdXhxczBj" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><FaInstagram className="social-icon" /></a>
          </div>

          <div className="ambient-circle"></div>
          <div className="ambient-circle-small"></div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="first_name" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" name="last_name" placeholder="Last Name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="user_phone" placeholder="Phone Number" required />
              </div>
            </div>


            <div className="form-group">
              <textarea name="message" placeholder="Message" rows={4} required></textarea>
            </div>

            {submitStatus === 'success' && <div className="status-message success">Message sent successfully!</div>}
            {submitStatus === 'error' && <div className="status-message error">Failed to send message. Please try again.</div>}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
