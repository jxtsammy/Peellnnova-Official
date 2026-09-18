import { useEffect, useRef } from 'react';
import './FooterStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/PeellnnovaLogoWhite.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const navigate = useNavigate();

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/share/1D7Wiv8isu/' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/peellnnova_gh?stkn=N2hvaXB5aHM1a2t1' },
    { name: 'Tiktok', icon: 'fa-brands fa-tiktok', url: 'https://www.tiktok.com/@peellnnova_gh?_r=1&_t=ZS-99m9QfrtRbx' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/company/peellnnova-limited-company/' },
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
      } else {
        // Fallback if section ID isn't found on the page yet
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    href="/about#mission-section"
                    onClick={(e) => handleNavigateToSection(e, '/about', 'mission-section')}
                  >
                    Our Mission
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
              <h4 className="col-title">Get in Touch</h4>
              <ul className="footer-nav">
                <li>
                  <a
                    href="/contact#community-section"
                    onClick={(e) => handleNavigateToSection(e, '/contact', 'community-section')}
                  >
                    Join Community
                  </a>
                </li>
                <li>
                  <a
                    href="/contact#faq"
                    onClick={(e) => handleNavigateToSection(e, '/contact', 'faq')}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact#contact-section"
                    onClick={(e) => handleNavigateToSection(e, '/contact', 'contact-section')}
                  >
                    Contact Info
                  </a>
                </li>
                <li>
                  <a
                    href="/contact#contact-section"
                    onClick={(e) => handleNavigateToSection(e, '/contact', 'contact-section')}
                  >
                    Send Us a Mail
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