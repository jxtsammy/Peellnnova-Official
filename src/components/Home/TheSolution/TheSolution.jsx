import { motion } from 'framer-motion';
import './TheSolution.css';
import solutionImage from '../../../assets/smiles.jpg'; // Replace with your image asset path

const TheSolution = () => {
  const steps = [
    { name: 'Research & Formulation', icon: 'fa-flask' },
    { name: 'Upcycling Innovation', icon: 'fa-lightbulb' },
    { name: 'Eco Manufacturing', icon: 'fa-industry' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section className="solution-section">
      <motion.div
        className="solution-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header Grid */}
        <div className="solution-header">
          <motion.div className="solution-header-left" variants={itemFadeUp}>
            <span className="solution-tag">
              <i className="fa-solid fa-sparkles"></i> The Solution
            </span>
            <h2 className="solution-title">
              From agricultural waste to <br />
              <span className="solution-title-highlight">everyday solutions.</span>
            </h2>
          </motion.div>

          <motion.div className="solution-header-right" variants={itemFadeUp}>
            <p className="solution-description">
              At Peellnnova, we transform agricultural waste—like pineapple peels, orange peels, and sawdust—into eco-friendly everyday products. Through rigorous research and formulation, innovation, and sustainable manufacturing, we create solutions for a healthier home and a healthier planet.
            </p>

            {/* Pill Tags under description */}
            <div className="solution-pills-group">
              {steps.map((step, index) => (
                <span key={index} className="solution-pill">
                  <i className={`fa-solid ${step.icon}`}></i>
                  {step.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Image Container */}
        <motion.div className="solution-image-wrapper" variants={itemFadeUp}>
          <motion.img
            src={solutionImage}
            alt="Peellnnova sustainable manufacturing process"
            className="solution-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay Tag / Floating Badge */}
          <div className="solution-image-badge">
            <span className="solution-badge-icon">
              <i className="fa-solid fa-leaf"></i>
            </span>
            <div className="solution-badge-text">
              <strong>100% Upcycled</strong>
              <span>Bio-based Formulation</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TheSolution;