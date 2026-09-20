import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactIntro.css';

export default function ContactSection({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      enquiry: true,
      partnership: false,
      feedBack: false,
      contentCreation: false,
      other: false,
    }
  });

  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (serviceKey) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedCategories = Object.entries(formData.services)
      .filter(([, isChecked]) => isChecked)
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
      .join(', ');

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      category: selectedCategories || 'Enquiry'
    };

    const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          message: '',
          services: {
            enquiry: true,
            partnership: false,
            feedBack: false,
            contentCreation: false,
            other: false,
          }
        });
        if (onSuccess) onSuccess();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">

        <div className="contact-left-col">
          <div className="form-header">
            <h2>Got ideas? Our doors are open. Let’s team up.</h2>
            <p>
              Whether you’re exploring partnerships, distribution, or sustainable products,
              we’d love to hear from you. Connect with the Peellnnova team today.
            </p>
          </div>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Chat to us</h4>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:peellnnova25@gmail.com">peellnnova25@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Visit us</h4>
                <p>Come say hello at our office HQ.</p>
                <span>Kotei<br />Kumasi, Ghana</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Call us</h4>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+233540218224">+233 (0) 540 218 224</a><br />
                <a href="tel:+233594916406">+233 (0) 594 916 406</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="contact-right-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="username@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="What would you like to tell us?..."
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <div className="services-selector">
              <label className="services-title">How can we help?</label>
              <div className="checkbox-grid">
                <div className="checkbox-item" onClick={() => handleCheckboxChange('enquiry')}>
                  <span className={`custom-checkbox ${formData.services.enquiry ? 'checked' : ''}`}>
                    {formData.services.enquiry && '✓'}
                  </span>
                  <span>Enquiry</span>
                </div>

                <div className="checkbox-item" onClick={() => handleCheckboxChange('partnership')}>
                  <span className={`custom-checkbox ${formData.services.partnership ? 'checked' : ''}`}>
                    {formData.services.partnership && '✓'}
                  </span>
                  <span>Partnership</span>
                </div>

                <div className="checkbox-item" onClick={() => handleCheckboxChange('feedBack')}>
                  <span className={`custom-checkbox ${formData.services.feedBack ? 'checked' : ''}`}>
                    {formData.services.feedBack && '✓'}
                  </span>
                  <span>Feedback / Suggestions</span>
                </div>

                <div className="checkbox-item" onClick={() => handleCheckboxChange('other')}>
                  <span className={`custom-checkbox ${formData.services.other ? 'checked' : ''}`}>
                    {formData.services.other && '✓'}
                  </span>
                  <span>Other</span>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}