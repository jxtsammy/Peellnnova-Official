import { useState, useEffect } from 'react';
import './Hero.css';

import Perlitized from '../../../assets/Liquid Fertilizer_AgriCycle.png'

const products = [
  {
    id: 1,
    step: "01",
    name: "PEPTIDE PROS",
    subtext: "Cutting-Edge Peptides",
    previewImg: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80",
    showcaseImg: Perlitized
  },
  {
    id: 2,
    step: "02",
    name: "RECOVERY MATRIX",
    subtext: "Accelerated Healing",
    previewImg: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=300&q=80",
    showcaseImg: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    step: "03",
    name: "CELLULAR GLOW",
    subtext: "Rejuvenation Formula",
    previewImg: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80",
    showcaseImg: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    step: "04",
    name: "VITALITY CORE",
    subtext: "Peak Energy & Endurance",
    previewImg: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=300&q=80",
    showcaseImg: "https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?auto=format&fit=crop&w=1000&q=80"
  }
];

const HeroLanding = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-play timer: 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % products.length) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prev) => (prev % products.length) + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 1 ? products.length : prev - 1));
  };

  const currentProduct = products.find((p) => p.id === activeStep) || products[0];

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="social-badge">
            <div className="avatar-group">
              <span className="avatar avatar-1"></span>
              <span className="avatar avatar-2"></span>
              <span className="avatar avatar-3"></span>
            </div>
            <span className="badge-text">100k+ Orders Shipped</span>
          </div>

          {/* Animated Titles */}
          <h1 key={`title-${currentProduct.id}`} className="hero-title animate-fade-up">
            Turning Agricultural <br />
            Waste in to <br />
            Healthier Homes
          </h1>
          <p key={`subtitle-${currentProduct.id}`} className="hero-subtitle animate-fade-up delay-1">
          We transform agricultural resources into innovative products designed to improve everyday living, create economic opportunities and contribute to a healthier planet
          </p>

          {/* Animated Feature Product Card */}
          <div key={`card-${currentProduct.id}`} className="feature-card animate-fade-up delay-2">
            <div className="nav-controls-pill border-badge">
              <button onClick={handlePrev} aria-label="Previous Product">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={handleNext} aria-label="Next Product">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="feature-card-left">
              <div className="feature-product-img">
                <img
                  src={currentProduct.previewImg}
                  alt={currentProduct.name}
                  className="animate-zoom"
                />
              </div>
            </div>
            <div className="feature-card-right">
              <h3 className="feature-title">{currentProduct.name}</h3>
              <p className="feature-desc">{currentProduct.subtext}</p>
              <button className="btn-black">Learn More</button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hero-slider-progress">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${(activeStep / products.length) * 100}%` }}
              ></div>
            </div>
            <div className="progress-labels">
              {products.map((p) => (
                <span
                  key={p.id}
                  className={`step ${activeStep === p.id ? 'active' : ''}`}
                  onClick={() => setActiveStep(p.id)}
                >
                  {p.step}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div className="showcase-card">
            <img
              key={`showcase-${currentProduct.id}`}
              src={currentProduct.showcaseImg}
              alt={currentProduct.name}
              className="showcase-img animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;