import { motion } from 'framer-motion';
import './ProductsSummary.css';
import img from '../../../assets/look.jpg'

const ProductSummary = () => {
  return (
    <section className="product-summary-section">
      <div className="product-summary-container">
        {/* Left Image Box with Fade-in Animation */}
        <motion.div
          className="summary-media-side"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={img}
            alt="Eco-friendly product showcase"
            className="summary-media-img"
          />
        </motion.div>

        {/* Right Content Area */}
        <motion.div
          className="summary-content-side"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="summary-header-block">
            <span className="summary-header-sub">• OUR PORTFOLIO</span>
            <h2 className="summary-header-title">
              Sustainable solutions crafted to protect, refresh, and care for everyday spaces.
            </h2>
          </div>

          <div className="summary-features-grid">
            {/* Feature 1 */}
            <motion.div
              className="summary-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="summary-icon-box">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3 className="summary-feature-title">Eco-Friendly Protection</h3>
              <p className="summary-feature-desc">
                Natural, upcycled botanical formulas providing low-smoke and chemical-free defense.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="summary-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="summary-icon-box">
                <i className="fa-solid fa-spray-can-sparkles"></i>
              </div>
              <h3 className="summary-feature-title">Advanced Care</h3>
              <p className="summary-feature-desc">
                High-performance sprays, creams, and soaps designed for gentle, long-lasting freshness.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="summary-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="summary-icon-box">
                <i className="fa-solid fa-wind"></i>
              </div>
              <h3 className="summary-feature-title">Air Freshening</h3>
              <p className="summary-feature-desc">
                Balanced liquid, solid, and gel room fragrances that maintain continuous, welcoming atmospheres.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSummary;