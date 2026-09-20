import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsFAQ.css';

const faqItems = [
  {
    id: 1,
    title: "Unrivaled Quality",
    content: "We pride ourselves on offering herbal and sustainable products that meet the highest standards of safety and efficacy. Each formulation is carefully researched, lab-tested, and crafted to ensure maximum customer satisfaction."
  },
  {
    id: 2,
    title: "Eco-Friendly Innovation",
    content: "Our solutions actively transform local agricultural waste and resources into high-value community products, significantly reducing environmental footprint while driving green growth."
  },
  {
    id: 3,
    title: "Unrivaled Variety",
    content: "We believe in offering great value through a diverse catalog of sustainable products tailored to meet modern consumer and community health needs."
  },
  {
    id: 4,
    title: "Legacy Of Excellence",
    content: "Backed by award-winning student entrepreneurship and rigorous scientific research, we consistently deliver community-centered impact you can trust."
  }
];

const featureCards = [
  {
    id: 1,
    title: "100% Authentic Product",
    description: "Prominently display a clear '100% Authentic Guarantee' on your product formulations.",
    bgClass: "card-green-1"
  },
  {
    id: 2,
    title: "Free & Easy Return",
    description: "Provide customers with seamless support and hassle-free return processes.",
    bgClass: "card-green-2"
  },
  {
    id: 3,
    title: "Safe Payments",
    description: "Use secure transaction tools to identify and protect against any suspicious activity.",
    bgClass: "card-green-3"
  }
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Default 3rd item open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="why-choose-section">
      {/* Background Grid Overlay */}
      <div className="bg-grid-overlay"></div>

      <div className="why-container">

        {/* Top Row: Image & Accordion */}
        <div className="why-top-grid">

          {/* Left Image Card */}
          <div className="why-image-card">
            <img
              src="https://images.pexels.com/photos/33993456/pexels-photo-33993456.jpeg"
              alt="Peellnnova Innovation"
              className="why-hero-img"
            />
          </div>

          {/* Right Accordion Panel */}
          <div className="why-accordion-panel">
            <h2 className="why-main-title">Why Peellnnova Products?</h2>
            <p className="why-subtitle">
              We pride ourselves on offering products that meet the highest standards of quality. Each item is carefully selected, tested, and crafted to ensure durability and customer satisfaction.
            </p>

            <div className="accordion-list">
              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={item.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                    <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                      <span className="accordion-title-text">{item.title}</span>
                      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="accordion-content-wrapper"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <p className="accordion-body-text">{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Row: Feature Cards & Promo Card */}
        <div className="why-bottom-grid">
          {featureCards.map((card) => (
            <div key={card.id} className={`feature-box ${card.bgClass}`}>
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-desc">{card.description}</p>
            </div>
          ))}

          {/* Promo Card without Badge */}
          <div className="promo-card card-green-4">
            <img
              src="https://images.pexels.com/photos/15897036/pexels-photo-15897036.jpeg"
              alt="Promo"
              className="promo-bg-img"
            />
            <div className="promo-overlay-content">
              <span className="promo-text-main">Sustainable<br/>Products</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;