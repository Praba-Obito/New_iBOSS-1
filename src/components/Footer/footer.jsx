import React, { useState, useEffect } from "react";
import './footer.css'
function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const getCurrentYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year.toString());
    };
    getCurrentYear();
  }, []);

  return (
    <>
      <div className="footer">
        <p className="copyrights">
          Copyright  &copy; 2011 - {currentYear} Financial Alliance Pte Ltd
          Co.Reg.All rights reserved
        </p>
        <p className="dev">
          Developed By THINKBIG INFOTECH (INDIA) PRIVATE LIMITED
        </p>
      </div>
    </>
  );
}

export default Footer;
