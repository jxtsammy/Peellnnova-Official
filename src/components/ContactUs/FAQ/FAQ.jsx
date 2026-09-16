import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: "What is Peellnnova?",
    answer: "Peellnnova Limited Company is a Ghanaian green manufacturing company that transforms agricultural waste, particularly pineapple and orange peels, and natural resources into innovative, affordable, and sustainable household and personal-care solutions."
  },
  {
    question: "What products does Peellnnova produce?",
    answer: "Our portfolio includes Night Angel mosquito coils and insect-repellent spray, insect-repellent creams, Pure Glow body soaps, Neat laundry soaps, and liquid, solid, and gel air fresheners."
  },
  {
    question: "What makes Peellnnova different?",
    answer: "We combine natural resources, agricultural waste, formulation science, and sustainable manufacturing to create affordable products that address everyday health, personal-care, and household needs."
  },
  {
    question: "Why do you use pineapple and orange peels?",
    answer: "We see agricultural waste as a valuable resource rather than something that should simply be discarded. We explore ways of converting suitable agricultural by-products into useful raw materials for sustainable products."
  },
  {
    question: "Are Peellnnova products safe?",
    answer: "Our products are developed with careful ingredient selection, formulation, testing, and stability considerations. Product-specific safety claims are based on the appropriate testing and regulatory requirements for each product."
  },
  {
    question: "Can I become a Peellnnova distributor or retailer?",
    answer: "Yes. We welcome suitable retailers, distributors, pharmacies, supermarkets, hotels, institutions, and other businesses interested in working with us."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* Left Column: Heading, Subtext & Yellow Action Button */}
        <motion.div
          className="faq-left-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-main-title">
            Frequently<br />asked questions
          </h2>
          <p className="faq-subtitle">
            Find quick answers to common questions below. Need more help? Contact us anytime for further assistance!
          </p>

          <motion.a
            href="/contact#contact-section"
            className="faq-cta-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="cta-text">Give us a Call</span>
            <span className="cta-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Right Column: Clean Minimalist Accordion List */}
        <div className="faq-right-col">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="faq-question-row">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle-symbol">{isOpen ? '×' : '+'}</span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}