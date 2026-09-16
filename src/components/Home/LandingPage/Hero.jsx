import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import heroImage3 from '../../../assets/droneShot.jpg';
import heroImage2 from '../../../assets/Man.jpg';
import heroImage1 from '../../../assets/field.jpg';

const slidesData = [
  {
    pillTag: "Sustainable Manufacturing",
    title: "Turning <br/> Fruit Waste to<br/> Healthier Products",
    subtitle: "We transform agricultural resources into innovative products designed to improve everyday living, create economic opportunities and contribute to a healthier planet.",
    watermark: "peellnnova",
    cardTitle: "Our Mission",
    cardText: "To empower communities with innovative household solutions that enhance daily wellbeing, sustainability, and efficiency.",
    bgImage: heroImage1
  },
  {
    pillTag: "Community Impact",
    title: "Bringing Smiles <br/> To Households &<br/> Communities",
    subtitle: "How our products and innovations reach families everywhere, creating safer homes, cleaner environments, and lasting value.",
    watermark: "peellnnova",
    cardTitle: "Our Vision",
    cardText: "To build a sustainable ecosystem where every household has seamless access to safe, locally manufactured wellness products.",
    bgImage: heroImage2
  },
  {
    pillTag: "Innovation & Value",
    title: "Creating Value <br/> From What Others<br/> Leave Behind",
    subtitle: "From natural insect repellents to thoughtful formulation, we develop everyday essentials designed around safety and sustainability.",
    watermark: "peellnnova",
    cardTitle: "What We Do",
    cardText: "We engineer high-quality green manufacturing alternatives from agricultural by-products to protect families and nurture nature.",
    bgImage: heroImage3
  }
];

const PeellnnovaSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images on mount
  useEffect(() => {
    slidesData.forEach((slide) => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  // Timer resets automatically whenever currentIndex changes (whether by auto-play or manual click)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(timer);
  }, [currentIndex, handleNext]);

  const currentSlide = slidesData[currentIndex];

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="agri-hero-section"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%), url(${currentSlide.bgImage})`
      }}
    >
      <div className="agri-hero-container">

        {/* Left Content Area */}
        <div className="agri-hero-left">
          <div className="agri-pill-tag">{currentSlide.pillTag}</div>

          <h1
            className="agri-main-title"
            dangerouslySetInnerHTML={{ __html: currentSlide.title }}
          />

          <p className="agri-subtitle">
            {currentSlide.subtitle}
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
              <h3>{currentSlide.cardTitle}</h3>
            </div>
            <p>{currentSlide.cardText}</p>
            <Link to="/about" className="mission-learn-link" onClick={handleButtonClick}>
              <span>Learn More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

        </div>

      </div>

      <div className="bottom-watermark-text">{currentSlide.watermark}</div>
    </section>
  );
};

export default PeellnnovaSlider;