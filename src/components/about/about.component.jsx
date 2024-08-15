import React, { useEffect } from "react";
import sr from "../../utils/scrollReveal";
import "./about.styles.css";

const About = (props) => {
  useEffect(() => {
    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 200 });
    sr.reveal(".about__text", { delay: 200 });
  });

  const onlinePicture =
    "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/436197285_428180243499236_7159850802168830838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGj16Wl4r0jRTBMY9Yocx4hy3gWYiuQLuXLeBZiK5Au5XecGrAfuu2JFe42KRFpR7AU8bR54lLmmAuKi6NBkfXH&_nc_ohc=FUJle-adwFQQ7kNvgF3wvRr&_nc_ht=scontent.fhan5-2.fna&oh=00_AYDPHCOeVZtfjDhsi8N27HCvvGouw7I2kBGvBekGH6xVcQ&oe=66B46648";
  const resumeLink =
    "https://www.topcv.vn/xem-cv/VAZTXAMFBFNTVlQADlEABARQBgZWVgcHBQVfAQ8998";

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container">
        <div className="bd-grid">
          <p className="about__text">
            Hello everyone! I'm Luc. I'm a mobile application developer with
            around 3 years of experience. I specialize in Flutter, React Native,
            Angular, HTML, CSS ... I bring enthusiasm, creativity, and a
            positive attitude to cross-functional teamwork and English
            communication. Proficient in Agile methodologies, I ensure the
            timely delivery of high-quality projects while supporting team
            collaboration and continuous learning.
          </p>
          <div>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="about__button button"
            >
              View My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
