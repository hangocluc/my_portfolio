/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import db from "../../utils/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './header.styles.css';
import axios from 'axios'; // Add axios for fetching IP

const Header = () => {
    const [showMenu, setShowMenu] = useState("nav__menu");
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalVisits, setTotalVisits] = useState(0);
    const [isLogoHidden, setIsLogoHidden] = useState(false);

    useEffect(() => {
        countPageVisit();
    }, []);

    const countPageVisit = async () => {
        try {
            const res = await axios.get('https://api.ipify.org?format=json');
            const userIP = res.data.ip;

            const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
            const docRef = db.collection('pageVisits').doc(today);

            await db.runTransaction(async (transaction) => {
                const doc = await transaction.get(docRef);
                let newCount = 1;
                if (!doc.exists) {
                    transaction.set(docRef, { count: newCount, ips: [userIP] });
                } else {
                    const data = doc.data();
                    if (!data.ips.includes(userIP)) {
                        newCount = data.count + 1;
                        transaction.update(docRef, { count: newCount, ips: [...data.ips, userIP] });
                    }
                }
                setTotalVisits(newCount);
            });
        } catch (error) {
            console.error("Error counting page visit: ", error);
        }
    };

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setShowMenu("nav__menu");
    };

    const handleLogoClick = async () => {
        try {
            const snapshot = await db.collection('pageVisits').get();
            let total = 0;
            snapshot.forEach(doc => {
                total += doc.data().count;
            });
            setTotalVisits(total);
            setIsLogoHidden(true);
            toast.info(`Total page visits: ${total}`);
            setTimeout(() => setIsLogoHidden(false), 3000); // Show the logo again after 3 seconds
        } catch (error) {
            console.error("Error fetching total page visits: ", error);
        }
    };

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a 
                        href="#" 
                        className={`nav__logo ${isLogoHidden ? 'hidden' : ''}`} 
                        onClick={handleLogoClick}
                    >
                        Alex Dang
                    </a>
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
            <ToastContainer />
        </header>
    );
};

export default Header;
