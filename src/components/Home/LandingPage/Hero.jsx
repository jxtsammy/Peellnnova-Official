import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const slidesData = [
  {
    title: "Our Mission",
    text: "To transform discarded agricultural resources into innovative, high-quality products that improve everyday living and champion a zero-waste future."
  },
  {
    title: "Our Vision",
    text: "To pioneer a sustainable African circular economy where fruit waste becomes a primary driver for eco-friendly products and healthier homes."
  },
  {
    title: "What We Do",
    text: "We upcycle local pineapple and orange waste through advanced green technology, crafting premium, sustainable solutions for modern households."
  }
];

const AgriHeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slidesData[currentIndex];

  return (
    <section className="agri-hero-section">
      <div className="agri-hero-container">

        {/* Left Content Area with Smooth Staggered Entrance */}
        <motion.div
          className="agri-hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="agri-pill-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sustainable Upcycling Tech
          </motion.div>

          <motion.h1
            className="agri-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming <br/> Agricultural Fruit Waste to Healthier Quality Products
          </motion.h1>

          <motion.p
            className="agri-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            We transform agricultural resources into innovative products designed to improve everyday living, create economic opportunities and contribute to a healthier planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.a
              href="/#insight-video-section"
              className="agri-cta-button"
              whileHover={{ scale: 1.04, backgroundColor: '#b3e600' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Learn More</span>
              <motion.div
                className="agri-arrow-icon"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Glassmorphism Card with Smooth Slide Transitions */}
        <motion.div
          className="agri-hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Navigation Arrows */}
          <div className="card-nav-arrows">
            <motion.button
              onClick={handlePrev}
              aria-label="Previous Slide"
              whileHover={{ scale: 1.15, color: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </motion.button>
            <motion.button
              onClick={handleNext}
              aria-label="Next Slide"
              whileHover={{ scale: 1.15, color: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </div>

          <div className="agri-mission-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="mission-title-row">
                  <span className="mission-dot"></span>
                  <h3>{currentSlide.title}</h3>
                </div>
                <p>{currentSlide.text}</p>
                <a href="#learn-more" className="mission-learn-link">
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

      </div>

      {/* Floating Animated Watermark Text */}
      <motion.div
        className="bottom-watermark-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        peellnnova
      </motion.div>
    </section>
  );
};

export default AgriHeroSlider;