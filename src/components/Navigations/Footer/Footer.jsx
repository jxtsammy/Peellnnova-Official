import { useEffect, useRef } from 'react';
import './FooterStyle.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

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

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-top-white"></div>

      <div className="footer-bottom-green">
        <div className="footer-banner-wrapper">
          <div className="footer-banner">
            <h2>Turning agricultural waste<br />in to healthier homes</h2>
            <form className="banner-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <i className="fa-regular fa-envelope"></i>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <button type="submit" className="btn-banner">Register Now</button>
            </form>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img
                  src="/path-to-your-logo.png"
                  alt="Peellnnova Logo"
                  className="logo-img"
                />
              </div>
              <p className="brand-desc">
                The order path to creation elements for world sites and apps user experience.
              </p>
              <div className="social-icons">
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
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</a></li>
                <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>Our Team</a></li>
                <li><a href="#blog" onClick={(e) => handleScroll(e, 'blog')}>Blog</a></li>
                <li><a href="#careers" onClick={(e) => handleScroll(e, 'careers')}>Careers & Vacancies</a></li>
                <li><a href="#privacy" onClick={(e) => handleScroll(e, 'privacy')}>Terms & Policy</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Where to Buy</h4>
              <ul className="footer-nav">
                <li><a href="#retailers" onClick={(e) => handleScroll(e, 'retailers')}>Our Retailers</a></li>
                <li><a href="#find-store" onClick={(e) => handleScroll(e, 'find-store')}>Find a Store</a></li>
                <li><a href="#distributors" onClick={(e) => handleScroll(e, 'distributors')}>Distributors</a></li>
                <li><a href="#stores" onClick={(e) => handleScroll(e, 'stores')}>Store Locations</a></li>
                <li><a href="#wholesale" onClick={(e) => handleScroll(e, 'wholesale')}>Wholesale Portal</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Popular Products</h4>
              <ul className="footer-nav">
                <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Bio-fertilizers</a></li>
                <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Eco Pest Controls</a></li>
                <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Organic Feeds</a></li>
                <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Crop Boosters</a></li>
                <li><a href="#products" onClick={(e) => handleScroll(e, 'products')}>Soil Conditioners</a></li>
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