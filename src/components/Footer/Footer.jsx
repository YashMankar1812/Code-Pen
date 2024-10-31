// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub ,FaCodepen} from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Logo or Title */}
      <div className="footer-logo">
      C<FaCodepen className="foot-logo-icon"/> DEPEN
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <div>
          <h3>Explore</h3>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/challenges">Challenges</a>
        </div>
        <div>
          <h3>Community</h3>
          <a href="/forum">Forum</a>
          <a href="/events">Events</a>
          <a href="/support">Support</a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 CodePen Made by Yash. All rights reserved.</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
      </p>
      {/* Made with love by font awesome heart icon and Yash */}
      
    </div>
  </footer>
);

export default Footer;
