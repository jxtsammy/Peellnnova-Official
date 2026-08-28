import { motion } from 'framer-motion';
import './OurVision.css';
import img from '../../../assets/people.jpg';

const VisionSection = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const watermarkVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 },
    },
  };

  return (
    <section className="vision-section" id='our-vision-section'>
      <motion.div
        className="vision-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side: Image */}
        <motion.div className="vision-image-wrapper" variants={imageVariants}>
          <img
            src={img}
            alt="Sustainable Manufacturing"
            className="vision-image"
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className="vision-content">
          <motion.h2 className="vision-headline" variants={textVariants}>
            Reimagining waste into sustainable industry.
          </motion.h2>

          <motion.p className="vision-body" variants={textVariants}>
            PeelInnova's vision extends beyond any single product line: to become a leading African manufacturer that proves waste can be the starting point for industry, not the end of it. As we grow, that means expanding our product range, scaling manufacturing capacity, and building the partnerships that let this model reach more communities — in Ghana and beyond.
          </motion.p>

          <motion.div className="vision-closing" variants={textVariants}>
            <span>"The future we're building starts with the resources already around us."</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Solid Lime Watermark text spanning across the bottom */}
      <motion.div
        className="vision-bg-watermark"
        variants={watermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        vision
      </motion.div>
    </section>
  );
};

export default VisionSection;