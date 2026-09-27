import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';

import logoDark from '../../../assets/Peellnnova logo.png';
import logoLight from '../../../assets/PeellnnovaLogoWhite.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Impact', path: '/impact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const currentRoute = navLinks.find((link) => link.path === location.pathname);

    if (location.pathname === '/') {
      document.title = 'Peellnnova Limited Company';
    } else if (currentRoute) {
      document.title = `${currentRoute.name} - Peellnnova Limited Company`;
    } else {
      document.title = 'Peellnnova Limited Company';
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const desktopLinks = navLinks.filter(link => link.path !== '/contact');

  return (
    <motion.header
      className={`navbar-container ${isScrolled ? 'scrolled-dark' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={handleNavClick}>
          <div className="logo-img-wrapper">
            <AnimatePresence mode="wait">
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

        <ul className="nav-links desktop-only">
          {desktopLinks.map((link) => (
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

        <div className="navbar-actions">
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
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