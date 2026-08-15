import { motion } from 'framer-motion';
import './ProblemStyle.css';

const TheProblem = () => {
  const problems = [
    {
      icon: 'fa-solid fa-wheat-awn-circle-exclamation',
      title: 'Agricultural Waste',
      description: 'Large quantities of agricultural waste remain underutilized accros communities, contributing to environmental degradation and lost economic potential.',
      variant: 'problem-card-light'
    },
    {
      icon: 'fa-solid fa-house-chimney-medical',
      title: 'Household & Public Health',
      description: 'Mosquitoes and other households concerns continue to affect peoples wellbeing, especially in areas with limited access to sanitation and waste management infrastructure.',
      variant: 'problem-card-lime'
    },
    {
      icon: 'fa-solid fa-industry',
      title: 'Sustainable Manufacturing',
      description: 'There is an opportunity to create locally manufactured products using more sustainable approaches.',
      variant: 'problem-card-dark'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section className="problem-section">
      <div className="problem-container">

        {/* Header Section */}
        <div className="problem-header">
          <div className="problem-header-left">
            <span className="problem-section-tag">
              <i className="fa-solid fa-asterisk"></i> The Problem
            </span>
            <h2 className="problem-section-title">
              Three great challenges <br />
              one big opportunity.
            </h2>
          </div>
          <div className="problem-header-right">
            <p className="problem-section-subtitle">
              Unchecked waste and linear production models accelerate degradation. Addressing these urgent issues requires systemic, locally driven solutions.
            </p>
          </div>
        </div>

        {/* 3 Problem Cards */}
        <motion.div
          className="problem-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {problems.map((card, index) => (
            <motion.div
              key={index}
              className={`problem-card ${card.variant}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="problem-card-top">
                <div className="problem-card-icon">
                  <i className={card.icon}></i>
                </div>
                <h3 className="problem-card-heading">{card.title}</h3>
                <p className="problem-card-text">{card.description}</p>
              </div>

              {/* Bottom Cutout with Tag/Link */}
              <div className="problem-card-cutout-bottom">
                <a href="#learn-more" className="problem-card-action-btn">
                  <span>Explore More</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TheProblem;