import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Quotes.css';

const quotesData = [
  {
    name: "Gilbert Yaw Sonny",
    quote: "I believe that meaningful change begins when we choose to turn the challenges around us into opportunities to create solutions that improve lives."
  },
  {
    name: "Nafisah Hamidu Dauda",
    quote: "I may not have started with everything I needed, but I have always carried enough courage to begin, and enough purpose to keep going."
  },
  {
    name: "Enoch Siekaah",
    quote: "Great solutions begin with understanding people, listening to their needs, and designing with purpose."
  },
  {
    name: "Benedette Naame",
    quote: "Building something that lasts requires discipline, responsibility, and the courage to turn every challenge into an opportunity for growth."
  }
];

const QuotesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === quotesData.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex, handleNext]);

  const currentItem = quotesData[currentIndex];

  return (
    <section id="quotes-section" className="quotes-section">
      <div className="quotes-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="quote-content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="quote-pill-tag"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {currentItem.name}
            </motion.div>

            <motion.h2
              className="quote-text"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              &ldquo;{currentItem.quote}&rdquo;
            </motion.h2>
          </motion.div>
        </AnimatePresence>

        <div className="quote-dots">
          {quotesData.map((_, idx) => (
            <button
              key={idx}
              className={`quote-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;