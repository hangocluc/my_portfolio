import React, { useEffect } from "react";
import sr from "../../utils/scrollReveal";
import "./skills.styles.css";

const Skills = (props) => {
  useEffect(() => {
    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { delay: 100 });
    sr.reveal(".skills__img", { delay: 200 });
  });

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__frontend">
          <h3 className="skills__subtitle">Front End</h3>
          <p className="skills__text">
            I have been using JavaScript and its libraries, frameworks{" "}
            <strong>jQuery, React, Redux</strong>.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">HTML</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">CSS</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-react skills__icon"></i>
              <span className="skills__name">React JS</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "85%" }}>
                75%
              </div>
            </div>
          </div>
        </div>
        <div className="skills__backend">
          <h3 className="skills__subtitle">Mobile</h3>
          <p className="skills__text">
            I have developed mobile projects using{" "}
            <strong>Flutter, React Native</strong>, and <strong>Angular</strong>
            .
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-flutter skills__icon"></i>
              <span className="skills__name">Flutter</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "80%" }}>
                3 Years
              </div>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              {/* <i className="bx bxl-react skills__icon"></i> */}
              <span className="skills__name">React Native</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "100%" }}>
                6 Months
              </div>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Angular</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "70%" }}>
                6 Months
              </div>
            </div>
          </div>
        </div>
        <div className="skills__others">
          <h3 className="skills__subtitle">Other Tools</h3>
          <p className="skills__text">
            Proficient in using <strong>GitHub</strong> for team collaboration
            and familiar with other DevOps tools.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">GitHub</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-firebase skills__icon"></i>
              <span className="skills__name">Firebase</span>
            </div>
            <div className="skills__bar-container">
              <div className="skills__percentage" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
