import React from "react";

import "./footer.styles.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__title">Luc Ha</p>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/l%E1%BB%B1c-h%C3%A0-6629ab255/"
          className="footer__icon"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/hangocluc?tab=repositories"
          className="footer__icon"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <p>&#169; 2024 copyright Luc Ha</p>
    </footer>
  );
};

export default Footer;
