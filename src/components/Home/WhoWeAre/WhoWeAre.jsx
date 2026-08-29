import { motion } from 'framer-motion';
import './WhoWeAre.css';
import img from '../../../assets/grandmama.jpg'

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="who-we-are-section">
      <div className="who-we-are-container">

        {/* Top Header & Right-Aligned Content Area */}
        <motion.div
          className="who-header-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="who-header-left">
            <h2 className="who-main-heading">
            Redefining African Agriculture: From Orange & Pineapple Peel Waste to High-Quality Innovation
            </h2>
          </div>

          <div className="who-header-right">
            <div className="who-badge-row">
              <span className="who-dot"></span>
              <span className="who-badge-text">Who We Are at Farmora</span>
            </div>

            <p className="who-sub-text">
            Peellnnova is turning the challenge of local fruit processing waste into an economic and environmental opportunity. We harness advanced recycling techniques to convert surplus pineapple and orange rinds into premium, sustainable goods for a greener future.
            </p>

            <motion.a
              href="#learn-more"
              className="who-learn-btn"
              whileHover={{ scale: 1.03, backgroundColor: '#111111', color: '#ffffff', borderColor: '#111111' }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Cards Grid with Framer Motion Staggered Entrance */}
        <div className="who-cards-grid">

          {/* Card 1: Square Image Card */}
          <motion.div
            className="who-card image-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <img
              src={img}
              alt="Farmer in the field"
            />
          </motion.div>

          {/* Card 2: 10+ Square Metric Card */}
          <motion.div
            className="who-card stat-card light-gray"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="card-top-row">
              <span className="stat-number">3+</span>
              <motion.div
                className="arrow-icon-btn"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </motion.div>
            </div>
            <div className="card-content-area">
              <h3 className="card-title">Years of Agricultural Innovation</h3>
              <p className="card-desc">
              With over three years of dedicated research and development, we've pioneered innovative upcycling methods, transforming surplus pineapple and orange waste into premium, high-quality products that help build a sustainable circular economy.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Square Image Card */}
          <motion.div
            className="who-card image-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80"
              alt="Urban and modern farming crops"
            />
          </motion.div>

          {/* Card 4: 85% Square Metric Card */}
          <motion.div
            className="who-card stat-card lime-green"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="card-top-row">
              <span className="stat-number">85%</span>
              <motion.div
                className="arrow-icon-btn dark"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </motion.div>
            </div>
            <div className="card-content-area">
              <h3 className="card-title">Customer Satisfaction Rate</h3>
              <p className="card-desc">
                With an 85% customer satisfaction rate, our users trust us to deliver valuable solutions that enable them to have a better life.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;