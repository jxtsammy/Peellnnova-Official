import { motion } from 'framer-motion';
import './AboutHeader.css';

const AboutHeader = () => {
  return (
    <section className="about-header-section">
      {/* Main Content Container */}
      <div className="about-header-container">

        {/* Top Content: About Text (Aligned Right Above Watermark) */}
        <motion.div
          className="about-header-top"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="about-header-title">About</h1>
        </motion.div>

        {/* Bottom Watermark Text */}
        <motion.div
          className="about-header-watermark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <span>Peellnnova</span>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHeader;