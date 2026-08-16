import { motion } from 'framer-motion';
import './ImpactMetrics.css';

const impactMetrics = [
  {
    number: '2,000+',
    label: 'Products Distributed',
    description: 'High-value health and wellness formulations delivered to households and health partners'
  },
  {
    number: '175+',
    label: 'Farmers Reached',
    description: 'Local agricultural partners empowered through organic waste upcycling initiatives.'
  },
  {
    number: '60+',
    label: 'Jobs Created',
    description: 'Direct, sustainable employment opportunities generated across processing and distribution networks.'
  },
  {
    number: '45+',
    label: 'Farmers Trained',
    description: 'Agricultural workers upskilled in sustainable sourcing and sustainable waste recovery practices.'
  },
  {
    number: '1,500+',
    label: 'Community Members Impacted',
    description: 'Individuals benefiting directly from improved health access and local economic growth.'
  },
  {
    number: '15,000+',
    label: 'People Reached',
    description: 'Broad public engagement achieved through wellness awareness, health programs, and outreach.'
  }
];

const ImpactNumbers = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.3 },
    },
  };

  return (
    <section className="impact-numbers-section">
      <motion.div
        className="impact-numbers-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Grid Pattern */}
        <div className="impact-numbers-grid-bg"></div>

        {/* Decorative Asterisk Star Icons */}
        <motion.div className="impact-numbers-star star-left" variants={starVariants}>✳</motion.div>
        <motion.div className="impact-numbers-star star-right" variants={starVariants}>✳</motion.div>

        {/* Header Content */}
        <motion.div className="impact-numbers-header" variants={headerVariants}>
          <span className="impact-numbers-pill">Pioneering Health Through Bio-Innovation</span>
          <h2 className="impact-numbers-title">Our Impact Continues to Grow Through Innovation</h2>
        </motion.div>

        {/* 6 Metrics Grid (2 rows x 3 columns) */}
        <motion.div className="impact-numbers-grid" variants={containerVariants}>
          {impactMetrics.map((metric, index) => (
            <motion.div key={index} className="impact-metric-card" variants={cardVariants}>
              <h3 className="impact-metric-number">{metric.number}</h3>
              <p className="impact-metric-label">{metric.label}</p>
              <p className="impact-metric-desc">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ImpactNumbers;