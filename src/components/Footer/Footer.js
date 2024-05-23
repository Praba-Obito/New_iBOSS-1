// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">Copyright &copy; {currentYear} Financial Alliance Pte Ltd Co.</div>
        <div className="right">Designed & Developed by ThinkBig InfoTech</div>
      </div>
    </footer>
  );
};

export default Footer;
