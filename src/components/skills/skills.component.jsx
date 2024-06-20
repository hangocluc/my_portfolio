import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import "./skills.styles.css";

const Skills = props => {

    useEffect(() => {
        sr.reveal('.skills__subtitle',{}); 
        sr.reveal('.skills__text',{}); 
        sr.reveal('.skills__data',{interval: 200}); 
        sr.reveal('.skills__img',{delay: 600});
    });

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills__container bd-grid">
                <div className="skills__frontend">
                    <h2 className="skills__subtitle">Front End</h2>
                    <p className="skills__text">I have been using JavaScript and its libraries, frameworks <strong>jQuery, React, Redux, Node</strong> for 4 years.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-jquery skills__icon"></i>
                            <span className="skills__name">JQUERY</span>
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        <div className="skills__bar skills__jquery"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-react skills__icon"></i>
                            <span className="skills__name">REACT</span>
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        <div className="skills__bar skills__react"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-redux skills__icon"></i>
                            <span className="skills__name">REDUX</span>
                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                        <div className="skills__bar skills__redux"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-nodejs skills__icon"></i>
                            <span className="skills__name">NODEJS</span>
                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                        <div className="skills__bar skills__nodejs"></div>
                    </div>
                </div>
                <div className="skills__backend">
                    <h2 className="skills__subtitle">Back End</h2>
                    <p className="skills__text">I developed the projects during my studying by using <strong>Java, Spring framework and SQL tools.</strong></p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-spring-boot skills__icon'></i>
                            <span className="skills__name">SPRING BOOT</span>
                        </div>
                        <div>
                            <span className="skills__percentage">50%</span>
                        </div>
                        <div className="skills__bar skills__spring-boot"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bx-data skills__icon'></i>
                            <span className="skills__name">SQL</span>
                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                        <div className="skills__bar skills__sql"></div>
                    </div>
                </div>
                <div className="skills__others">
                    <h2 className="skills__subtitle">Other Tools</h2>
                    <p className="skills__text">Proficient using <strong>GitHub</strong> for my collaborating with the teams. And get used to other DevOpt tools.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-github skills__icon"></i>
                            <span className="skills__name">GITHUB</span>
                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                        <div className="skills__bar skills__github"></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-amazon skills__icon"></i>
                            <span className="skills__name">AWS</span>
                        </div>
                        <div>
                            <span className="skills__percentage">20%</span>
                        </div>
                        <div className="skills__bar skills__aws"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;