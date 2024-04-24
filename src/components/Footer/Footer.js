import React from 'react';
import './Footer.css';


const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="layout">
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="footer-content">
          <p className="left">Copyright &copy; {currentYear} Financial Alliance Pte Ltd Co.</p>
          <p className="right">Design & Developed by ThinkBig InfoTech</p>
        </div>
      </footer>
    </div>  
  );
};

export default Layout;
