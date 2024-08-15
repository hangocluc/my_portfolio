/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import db from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./header.styles.css";
import IconDeveloper from "../../assets/img/developer.png";
import { ReactComponent as Avatar } from "../../assets/img/mf-avatar.svg";
const Header = () => {
  const [showMenu, setShowMenu] = useState("nav__menu");
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalVisits, setTotalVisits] = useState(0);
  const [isLogoHidden, setIsLogoHidden] = useState(false);
  const onlinePicture =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdeveloper-freelancer-programmer-user-web-developer-icon-download-on-iconfinder--661044051525177555%2F&psig=AOvVaw0fUrd1AIjHecRw3icDd09v&ust=1722808525546000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiBhoTo2YcDFQAAAAAdAAAAABAE";
  useEffect(() => {
    countPageVisit();
  }, []);

  const countPageVisit = async () => {
    const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
    const docRef = db.collection("pageVisits").doc(today);

    try {
      await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(docRef);
        let newCount = 1;
        if (!doc.exists) {
          transaction.set(docRef, { count: newCount });
        } else {
          newCount = doc.data().count + 1;
          transaction.update(docRef, { count: newCount });
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
      const snapshot = await db.collection("pageVisits").get();
      let total = 0;
      snapshot.forEach((doc) => {
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
        <div className="row">
          <div className="home__img">
            <img src={IconDeveloper} />
          </div>
          <a
            href="#"
            className={`nav__logo ${isLogoHidden ? "hidden" : ""}`}
            onClick={handleLogoClick}
          >
            Luc Ha
          </a>
        </div>
        <div className={showMenu} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => handleMenuItemClick(0)}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handleMenuItemClick(1)}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => handleMenuItemClick(2)}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeIndex === 3 ? "active" : ""}`}
                onClick={() => handleMenuItemClick(3)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() =>
            setShowMenu(
              showMenu === "nav__menu" ? "nav__menu show" : "nav__menu"
            )
          }
        >
          <i className="bx bx-menu"></i>
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default Header;
