import { motion } from 'framer-motion';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <section className="peellnnova-contact-banner-section">
      <div className="peellnnova-contact-banner-overlay"></div>
      <div className="peellnnova-contact-banner-container">

        {/* Massive Contact-Focused Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="peellnnova-banner-title">
            Let’s build healthier homes
            together.
          </h1>
        </motion.div>

        {/* Supporting Text tailored to Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="peellnnova-banner-subtitle">
            Have questions about our innovative products, looking to partner on turning agricultural waste into sustainable value, or ready to connect? Reach out to our team below.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactBanner;