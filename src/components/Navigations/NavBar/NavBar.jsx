import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';

// Import your light and dark logo images from assets
import logoDark from '../../../assets/Peellnnova logo.png';
import logoLight from '../../../assets/PeellnnovaLogoWhite.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to trigger background and logo change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Impact', path: '/impact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <motion.header
      className={`navbar-container ${isScrolled ? 'scrolled-dark' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="navbar">
        {/* Brand Logo with Cross-Fade Transition */}
        <Link to="/" className="navbar-logo" onClick={handleNavClick}>
        <div className="logo-img-wrapper">
            <AnimatePresence mode="wait">
              {/* Always display logoDark if viewport is mobile width or not scrolled */}
              {(!isScrolled || window.innerWidth <= 820) ? (
                <motion.img
                  key="logo-dark"
                  src={logoDark}
                  alt="Peellnnova Logo"
                  className="navbar-logo-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                />
              ) : (
                <motion.img
                  key="logo-light"
                  src={logoLight}
                  alt="Peellnnova Logo"
                  className="navbar-logo-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Items */}
        <div className="navbar-actions">
          <div className="search-box desktop-only">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder="Search..." />
          </div>

          <Link to="/contact" className="account-btn desktop-only" onClick={handleNavClick}>
            Contact Us
          </Link>

          <button
            className="hamburger-btn mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-search">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input type="text" placeholder="Search..." />
            </div>
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={handleNavClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="account-btn mobile-account" onClick={handleNavClick}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;