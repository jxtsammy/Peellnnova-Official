import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactIntro.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      websiteDesign: true,
      uxDesign: true,
      userResearch: false,
      contentCreation: false,
      strategyConsulting: false,
      other: false,
    }
  });

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
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent to Peellnnova.');
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">

        {/* Left Column: Info & Socials */}
        <div className="contact-left-col">
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Chat to us</h4>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:hi@peellnnova.com">hi@peellnnova.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Visit us</h4>
                <p>Come say hello at our office HQ.</p>
                <span>100 Smith Street<br />Collingwood VIC 3066 AU</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4>Call us</h4>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15550000000">+1 (555) 000-0000</a>
              </div>
            </div>
          </div>

          <div className="social-icons-row">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
            <a href="#" aria-label="Website"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></a>
          </div>
        </div>

        {/* Right Column: Neon Green Form Card */}
        <motion.div
          className="contact-right-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-header">
            <h2>Got ideas? We’ve got the skills. Let’s team up.</h2>
            <p>Tell us more about yourself and what you're got in mind.</p>
          </div>

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
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Tell us a little about the project..."
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <div className="services-selector">
              <label className="services-title">How can we help?</label>
              <div className="checkbox-grid">
                <div className="checkbox-item" onClick={() => handleCheckboxChange('websiteDesign')}>
                  <span className={`custom-checkbox ${formData.services.websiteDesign ? 'checked' : ''}`}>
                    {formData.services.websiteDesign && '✓'}
                  </span>
                  <span>Website design</span>
                </div>

                <div className="checkbox-item" onClick={() => handleCheckboxChange('contentCreation')}>
                  <span className={`custom-checkbox ${formData.services.contentCreation ? 'checked' : ''}`}>
                    {formData.services.contentCreation && '✓'}
                  </span>
                  <span>Content creation</span>
                </div>

                <div className="checkbox-item" onClick={() => handleCheckboxChange('userResearch')}>
                  <span className={`custom-checkbox ${formData.services.userResearch ? 'checked' : ''}`}>
                    {formData.services.userResearch && '✓'}
                  </span>
                  <span>User research</span>
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
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}