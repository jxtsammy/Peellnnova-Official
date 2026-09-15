import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide content creation, branding, UI/UX design, and development solutions. For details, visit our Services page."
  },
  {
    question: "How can I contact your team?",
    answer: "You can reach out to us anytime via email or book a free call using the button on the left for further assistance."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, bank transfers, and secure online payment gateways tailored to your project requirements."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the custom nature of our digital and creative services, refunds are evaluated on a case-by-case basis depending on project milestones."
  },
  {
    question: "What if I have an issue with my product/service?",
    answer: "Our support team is always ready to assist you. Simply contact us and we will resolve any issues as quickly as possible."
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