import { motion } from 'framer-motion';
import './CompanyInfo.css';
import aboutImg from '../../../assets/miMa.jpg'

const CompanyInfo = () => {
  return (
    <section className="company-info-section" id='company-info-section'>
      <div className="company-info-container">

        {/* Left Side Image */}
        <motion.div
          className="company-info-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={aboutImg}
            alt="Team collaboration"
            className="company-info-img"
          />
        </motion.div>

        {/* Right Side Content */}
        <div className="company-info-content">
          <motion.h2
            className="company-info-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            We create unique high-value
           healthy solutions.
          </motion.h2>

          <motion.p
            className="company-info-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <strong>Peellnnova</strong> is an ambitious  <strong>African innovation</strong> company turning local challenges and resources into <strong>scalable solutions</strong>We transform agricultural resources into <strong>innovative products</strong> designed to improve everyday living, create economic opportunities and contribute to a healthier planet.
          </motion.p>
        </div>

      </div>

      {/* Large Lime Green Watermark Text at Bottom Right */}
      <div className="company-info-watermark" aria-hidden="true">
        about
      </div>
    </section>
  );
};

export default CompanyInfo;