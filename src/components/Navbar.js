// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Updated logo sources with new file names
  const logoSrc = darkMode ? "/white_for_dark_mode.ico" : "/black_for_light_mode.ico";
  const logoAlt = darkMode ? "Dark Mode Portfolio Logo" : "Light Mode Portfolio Logo";

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        {/* Fixed Size Logo Container */}
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-container">
            <img 
              src={logoSrc}
              alt={logoAlt}
              className={`logo-image ${darkMode ? 'dark-mode-logo' : 'light-mode-logo'}`}
            />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('about')}
          >
            <span className="nav-icon">👨‍💻</span>
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('contact')}
          >
            <span className="nav-icon">📧</span>
            Contact
          </button>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="navbar-actions">
          {/* Dark/Light Mode Toggle */}
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-track">
              <div className={`theme-toggle-thumb ${darkMode ? 'dark' : 'light'}`}>
                <span className="theme-icon">
                  {darkMode ? '🌙' : '☀️'}
                </span>
              </div>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-nav-link" 
          onClick={() => scrollToSection('about')}
        >
          <span className="nav-icon">👨‍💻</span>
          About
        </button>
        <button 
          className="mobile-nav-link" 
          onClick={() => scrollToSection('contact')}
        >
          <span className="nav-icon">📧</span>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
