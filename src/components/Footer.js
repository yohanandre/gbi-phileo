import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/img/instagram.png';
import youtubeIcon from '../assets/img/youtube.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} All Rights Reserved. Designed by GBI Phileo.
      </p>
    </footer>
  );
}

export default Footer;
