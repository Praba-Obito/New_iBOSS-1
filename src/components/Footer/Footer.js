import React from 'react';
import './Footer.css';


const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="layout">
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="footer-content row ">
          <div className="col-6 left">Copyright &copy; {currentYear} Financial Alliance Pte Ltd Co.</div>
          <div className="col-6 right">Design & Developed by ThinkBig InfoTech</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
