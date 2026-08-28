import { useEffect, useRef } from 'react';
import './FooterStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/PeellnnovaLogoWhite.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const navigate = useNavigate();

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-animated');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigateToSection = (e, path, sectionId) => {
    e.preventDefault();
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Adjust for fixed navbar height if needed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 350);
  };

  return (
    <footer className="footer-container" ref={footerRef}>

      <div className="footer-bottom-green">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img
                  src={logo}
                  alt="Peellnnova Logo"
                  className="logo-img"
                />
              </div>
              <p className="brand-desc">
                The order path to creation elements for world sites and apps user experience.
              </p>
              <div className="footer-social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="social-link"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <p className="copyright-text">© Copyright {currentYear} Peellnnova</p>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Company</h4>
              <ul className="footer-nav">
                <li>
                  <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="/impact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Explore More</h4>
              <ul className="footer-nav">
                <li>
                  <a
                    href="/#why-exist-section"
                    onClick={(e) => handleNavigateToSection(e, '/', 'why-exist-section')}
                  >
                    Why We Exist
                  </a>
                </li>
                <li>
                  <a
                    href="/impact#our-vision-section"
                    onClick={(e) => handleNavigateToSection(e, '/impact', 'our-vision-section')}
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a
                    href="/#solution-section"
                    onClick={(e) => handleNavigateToSection(e, '/', 'solution-section')}
                  >
                    Solution
                  </a>
                </li>
                <li>
                  <a
                    href="/about#team-section"
                    onClick={(e) => handleNavigateToSection(e, '/about', 'team-section')}
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    href="/impact#story-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/impact', 'story-accordion-section')}
                  >
                    Our Journey
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Popular Products</h4>
              <ul className="footer-nav">
                <li>
                  <a
                    href="/products#product-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/products', 'product-accordion-section')}
                  >
                    Bio-fertilizers
                  </a>
                </li>
                <li>
                  <a
                    href="/products#product-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/products', 'product-accordion-section')}
                  >
                    Eco Pest Controls
                  </a>
                </li>
                <li>
                  <a
                    href="/products#product-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/products', 'product-accordion-section')}
                  >
                    Organic Feeds
                  </a>
                </li>
                <li>
                  <a
                    href="/products#product-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/products', 'product-accordion-section')}
                  >
                    Crop Boosters
                  </a>
                </li>
                <li>
                  <a
                    href="/products#product-accordion-section"
                    onClick={(e) => handleNavigateToSection(e, '/products', 'product-accordion-section')}
                  >
                    Soil Conditioners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-watermark">
            <span className="watermark-text">Peellnnova</span>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <span>Back To Top</span>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;