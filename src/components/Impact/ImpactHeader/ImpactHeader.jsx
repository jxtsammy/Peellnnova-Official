import { motion } from 'framer-motion';
import './ImpactHeader.css';

const ImpactHeader = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const decorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="impact-header-section">
      <motion.div
        className="impact-header-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top Row: Header Title & Image Banner side-by-side */}
        <div className="impact-header-top-row">
          <motion.div className="impact-header-title-group" variants={titleVariants}>
            <h1 className="impact-header-main-title">
              <span className="impact-header-title-top">Sustainable</span>
              <span className="impact-header-title-bottom">Impact through <br />quality innovation </span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Row: Plus Decor & Description */}
        <div className="impact-header-bottom-row">
          <motion.div className="impact-header-decor-crosses" variants={decorVariants}>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </motion.div>

          <motion.p className="impact-header-description" variants={descriptionVariants}>
            Discover how PeelInnova advances wellness and healthcare—upcycling organic peel derivatives into high-value bio-compounds and formulation standards that elevate human health and personal well-being.
          </motion.p>
        </div>

      </motion.div>
    </section>
  );
};

export default ImpactHeader;