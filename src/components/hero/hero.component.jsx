import React, { useEffect } from "react";

import sr from "../../utils/scrollReveal";
import { ReactComponent as Avatar } from "../../assets/img/mf-avatar.svg";
import "./hero.styles.css";
import AvatarProfile from "../../assets/img/avatar.jpg";
const Hero = (props) => {
  useEffect(() => {
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".img-avatar", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });
    console.log("Hero");
  });

  return (
    <section className="home bd-grid" id="home">
      <div className="home__profile ">
        <img src={AvatarProfile} className="img-avatar" />
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/l%E1%BB%B1c-h%C3%A0-6629ab255/"
            className="home__social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/hangocluc?tab=repositories"
            className="home__social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089217924342"
            className="home__social-icon"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
      </div>
      <div className="home__profile">
        <div>
          <h1 className="home__title">
            Hi, <br />
            I'm <span className="home__title-color">Luc Ha</span>
            <br />
            Software Engineer
          </h1>
        </div>
        <div>
          <a href="#contact" className="button">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
