import { motion } from 'framer-motion';
import './Mission.css';

export default function MissionSection() {
  return (
    <section className="mission-section" id='mission-section'>
      <div className="mission-container">

        <motion.div
          className="mission-text-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mission-main-title">
          Transforming Waste into Sustainable Value
          </h2>

          <p className="mission-description">
            Peellnnova's mission is rooted in action: turning agricultural challenges into valuable opportunities by empowering local communities, reducing environmental waste, and delivering sustainable, high-quality alternatives that champion a circular economy in Africa and beyond.
          </p>
        </motion.div>

        <motion.div
          className="mission-image-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mission-img-wrapper">
            <img
              src="https://images.pexels.com/photos/38336650/pexels-photo-38336650.jpeg"
              alt="Community impact"
              className="mission-img"
            />
          </div>
        </motion.div>

      </div>

      <div className="mission-giant-bg-text" aria-hidden="true">
        mission
      </div>
    </section>
  );
}