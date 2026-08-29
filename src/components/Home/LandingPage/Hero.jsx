import { useState } from 'react';
import './Hero.css';

const slidesData = [
  {
    title: "Our Mission",
    text: "To empower farmers with innovative tools and technology that enhance productivity, sustainability, and efficiency, shaping the future of farming."
  },
  {
    title: "Our Vision",
    text: "To build a digitally-driven agricultural ecosystem where every farmer has seamless access to modern resources, guaranteeing global food security."
  },
  {
    title: "What We Do",
    text: "We provide cutting-edge web and mobile platforms, precision farming software, and data analytics tools designed to streamline agricultural operations."
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

        {/* Left Content Area */}
        <div className="agri-hero-left">
          <div className="agri-pill-tag">Sustainable Farming Tech</div>

          <h1 className="agri-main-title">
            Transforming <br/> Agricultural Waste <br/> to Healthier Homes
          </h1>

          <p className="agri-subtitle">
          We transform agricultural resources into innovative products designed to improve everyday living, create economic opportunities and contribute to a healthier planet
          </p>

          <a href="/#insight-video-section" className="agri-cta-button">
            <span>Learn More</span>
            <div className="agri-arrow-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </a>
        </div>

        {/* Right Glassmorphism Card with Navigation Arrows */}
        <div className="agri-hero-right">

          {/* Navigation Arrows positioned directly above the card */}
          <div className="card-nav-arrows">
            <button onClick={handlePrev} aria-label="Previous Slide">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={handleNext} aria-label="Next Slide">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="agri-mission-card">
            <div className="mission-title-row">
              <span className="mission-dot"></span>
              <h3>{currentSlide.title}</h3>
            </div>
            <p>{currentSlide.text}</p>
            <a href="#learn-more" className="mission-learn-link">
              <span>Learn More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </div>

      </div>

      {/* Giant Watermark Text at the Bottom */}
      <div className="bottom-watermark-text">peellnnova</div>
    </section>
  );
};

export default AgriHeroSlider;