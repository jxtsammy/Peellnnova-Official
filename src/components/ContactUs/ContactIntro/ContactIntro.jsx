import { motion } from 'framer-motion';
import './ContactIntro.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Large Diagonal Grid Pattern Background */}
      <div className="diagonal-grid-bg"></div>

      <div className="contact-container">

        {/* Left Column: Heading, Info, and Details */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-tag">/ get in touch /</span>

          <h1 className="contact-main-title">
            We are always ready to help you and answer your questions
          </h1>

          <p className="contact-desc">
            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
          </p>

          <div className="contact-info-grid">
            <div className="info-box">
              <h3>Call Center</h3>
              <p>800 100 975 20 34</p>
              <p>+ (123) 1800-234-5678</p>
            </div>

            <div className="info-box">
              <h3>Our Location</h3>
              <p>USA, New York - 1060</p>
              <p>Str. First Avenue 1</p>
            </div>

            <div className="info-box">
              <h3>Email</h3>
              <a href="mailto:neuros@mail.co" className="email-link">neuros@mail.co</a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Form Card */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-card">
            <h2>Get in Touch</h2>
            <p className="form-subtitle">Define your goals and identify areas where AI can add value to your business</p>

            <form onSubmit={(e) => e.preventDefault()} className="styled-form">
              <div className="input-group">
                <input type="text" placeholder="Full name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="input-group">
                <textarea placeholder="Message" rows="4"></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send a message</span>
                <span className="btn-arrow">→</span>
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;