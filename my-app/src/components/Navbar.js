import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src="/clouderna-logo.png" alt="Clouderna Logo" className="nav-logo" />
        </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        
        <div className="nav-item">
          <Link to="/services" onClick={(e) => {
            e.preventDefault();
            handleDropdown('services');
          }}>
            Services
          </Link>
          <div className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
            <Link to="/services/gen-ai">Gen AI Solutions</Link>
            <Link to="/services/llm">LLM Development</Link>
            <Link to="/services/ai-consulting">AI Consulting</Link>
            <Link to="/services/custom-ai">Custom AI</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link to="/courses" onClick={(e) => {
            e.preventDefault();
            handleDropdown('courses');
          }}>
            Courses
          </Link>
          <div className={`dropdown-menu ${activeDropdown === 'courses' ? 'active' : ''}`}>
            <Link to="/courses/gen-ai">Gen AI Mastery</Link>
            <Link to="/courses/llm">LLM Development</Link>
            <Link to="/courses/prompt">Prompt Engineering</Link>
            <Link to="/courses/ai-business">AI for Business</Link>
          </div>
        </div>
        
        <Link to="/contact">Contact</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  );
}

export default Navbar; 