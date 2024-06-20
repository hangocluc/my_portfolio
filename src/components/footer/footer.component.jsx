import React from 'react';

import "./footer.styles.css";

const Footer = props => {
    return (
        <footer className="footer">
            <p className="footer__title">Alex Dang</p>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/alexdang2000/" className="footer__icon"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/ALexDangCoder?tab=repositories" className="footer__icon"><i className="bx bxl-github"></i></a>
            </div>
            <p>&#169; 2024 copyright Alex Dang</p>
        </footer>
    )
}

export default Footer;