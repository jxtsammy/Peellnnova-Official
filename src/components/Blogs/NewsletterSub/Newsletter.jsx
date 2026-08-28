import { useState } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="peellnnova-newsletter-section">
      <div className="peellnnova-newsletter-overlay"></div>
      <div className="peellnnova-newsletter-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="newsletter-title">
            Get Peellnnova Insights <br />
            Straight to Your Inbox
          </h2>
        </motion.div>

        {/* Form / Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="newsletter-form-wrapper"
        >
          {submitted ? (
            <div className="newsletter-success-msg">
              <i className="fa-solid fa-circle-check"></i> Thank you for subscribing to our green updates!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default NewsletterBanner;