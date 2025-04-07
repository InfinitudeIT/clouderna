import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Clouderna</h3>
          <p className="address">
            123 Tech Street<br />
            Innovation City, 12345<br />
            +1 (234) 567-8900
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Clouderna. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 