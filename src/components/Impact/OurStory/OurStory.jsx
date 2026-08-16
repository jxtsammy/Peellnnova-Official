import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OurStory.css';

const storyTimelines = [
  {
    id: '01.',
    year: '2023',
    title: 'Beginning & Early R&D',
    description: 'Foundational research into organic waste upcycling and initial health-focused product formulations.'
  },
  {
    id: '02.',
    year: '2024',
    title: 'Company & Operations',
    description: 'Formal company launch, establishing pilot facilities, and initiating early regional operations.'
  },
  {
    id: '03.',
    year: '2025',
    title: 'Traction & Market Growth',
    description: 'Major global competitions, industry awards, expanding market validation, and partnership growth.'
  },
  {
    id: '04.',
    year: '2026',
    title: 'Product Expansion',
    description: 'Expanding manufacturing capabilities, line extensions, and scaling into international markets.'
  },
  {
    id: '05.',
    year: 'Future',
    title: 'Leading Manufacturing',
    description: 'Pioneering Africa’s bio-economy by establishing world-class, zero-waste health manufacturing.'
  }
];

const OurStory = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prevIndex) => (prevIndex + 1) % storyTimelines.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="story-accordion-section">
      <motion.div
        className="story-accordion-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="story-accordion-header" variants={headerVariants}>
          <div className="story-accordion-title-group">
            <span className="story-accordion-pill">Our Story Over the Years</span>
            <h2 className="story-accordion-main-title">
              The evolution of <br /> <span>PeelInnova.</span>
            </h2>
          </div>

          <div className="story-accordion-meta">
            <p className="story-accordion-subtitle">
              From groundbreaking bio-research to scalable impact, explore how PeelInnova is shaping the future of health-focused sustainable manufacturing.
            </p>
          </div>
        </motion.div>

        <div className="story-accordion-flex">
          {storyTimelines.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <motion.div
                key={index}
                className={`story-accordion-card ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                variants={cardVariants}
                layout
                transition={{ layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } }}
              >
                <div className="story-card-full-grid"></div>

                <div className="story-card-body">
                  <div className="story-card-number">{item.id}</div>

                  <div className="story-card-bottom-content">
                    <span className="story-card-year">{item.year}</span>
                    <h3 className="story-card-title">{item.title}</h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          className="story-card-desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 0.9, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory;