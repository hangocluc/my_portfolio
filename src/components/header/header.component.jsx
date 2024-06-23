/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './header.styles.css';

const Header = props => {
    const [showMenu, setShowMenu] = useState("nav__menu");
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setShowMenu("nav__menu");
    };

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Alex Dang</a>
                </div>
                <div className={showMenu} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                className={`nav__link ${activeIndex === 0 ? 'active' : ''}`} 
                                onClick={() => handleMenuItemClick(0)}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#about" 
                                className={`nav__link ${activeIndex === 1 ? 'active' : ''}`} 
                                onClick={() => handleMenuItemClick(1)}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                className={`nav__link ${activeIndex === 2 ? 'active' : ''}`} 
                                onClick={() => handleMenuItemClick(2)}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                className={`nav__link ${activeIndex === 3 ? 'active' : ''}`} 
                                onClick={() => handleMenuItemClick(3)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(showMenu === "nav__menu" ? "nav__menu show" : "nav__menu")}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
