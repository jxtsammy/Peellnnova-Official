import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    company: "GreenLife Families",
    author: "Abigail Mensah - Home User",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Peellnnova's household products have completely changed our daily routines. Knowing they are completely natural and safe gives our family immense peace of mind."
  },
  {
    id: 2,
    company: "EcoCommunity Hub",
    author: "Kofi Owusu - Health Advocate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Seeing upcycled agricultural by-products turned into powerful, safe household solutions is revolutionary. It truly impacts everyday community wellbeing."
  },
  {
    id: 3,
    company: "Botanical Living",
    author: "Evelyn Addo - Retail Partner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote: "The quality and effectiveness of Peellnnova's botanical products match top global brands, but with a sustainable edge that respects our local environment."
  },
  {
    id: 4,
    company: "Urban Clean Spaces",
    author: "Samuel Tetteh - Facility Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Switching to Peellnnova's eco-friendly line eliminated harsh chemical odors in our spaces while delivering superior freshness and long-lasting protection."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const desktopItemsPerPage = 2;
  const maxDesktopIndex = Math.max(0, testimonialsData.length - desktopItemsPerPage);
  const safeDesktopIndex = Math.min(currentIndex, maxDesktopIndex);

  return (
    <section className="testimonials-section">
      {/* Animated Background Watermark at Top Right */}
      <motion.div
        className="testimonials-watermark"
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Testimonials
      </motion.div>

      <div className="testimonials-container">

        {/* Header Content */}
        <div className="testimonials-header">
          <motion.h2
            className="testimonials-main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Some Clients Say About Peellnnova?
          </motion.h2>
          <motion.p
            className="testimonials-subtitle"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Read and discover genuine feedback from customers, partners, and health advocates about Peellnnova's commitment to safe, sustainable, and natural living.
          </motion.p>
        </div>

        {/* Desktop Viewport & Track */}
        <div className="testimonials-slider-viewport desktop-only-view">
          <motion.div
            className="testimonials-cards-track"
            animate={{ x: `calc(-${safeDesktopIndex * (100 / desktopItemsPerPage)}% - ${safeDesktopIndex * 24}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonialsData.map((item, index) => (
              <motion.div
                key={item.id}
                className="testimonial-card-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="card-top-row">
                  <div className="author-meta">
                    <img src={item.avatar} alt={item.author} className="author-avatar" />
                    <div className="author-text-info">
                      <h4 className="author-company">{item.company}</h4>
                      <p className="author-name-role">{item.author}</p>
                    </div>
                  </div>
                  <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <p className="card-quote-text">"{item.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Fade-In / Fade-Out Viewport */}
        <div className="testimonials-slider-viewport mobile-only-view">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialsData[currentIndex].id}
              className="testimonial-card-item"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="card-top-row">
                <div className="author-meta">
                  <img src={testimonialsData[currentIndex].avatar} alt={testimonialsData[currentIndex].author} className="author-avatar" />
                  <div className="author-text-info">
                    <h4 className="author-company">{testimonialsData[currentIndex].company}</h4>
                    <p className="author-name-role">{testimonialsData[currentIndex].author}</p>
                  </div>
                </div>
                <i className="fa-solid fa-quote-right quote-icon"></i>
              </div>
              <p className="card-quote-text">"{testimonialsData[currentIndex].quote}"</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Control Buttons */}
        <div className="testimonials-bottom-controls">
          <div className="control-arrow-buttons">
            <button
              className="carousel-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousel-arrow-btn active-arrow"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;