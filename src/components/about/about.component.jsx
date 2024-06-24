import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import './about.styles.css';

const About = props => {
    useEffect(() => {
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 200}); 
        sr.reveal('.about__text',{delay: 200}); 
    });

    const onlinePicture = "https://media.licdn.com/dms/image/D5603AQHwuwahzqJn5A/profile-displayphoto-shrink_800_800/0/1711608914970?e=1724284800&v=beta&t=2H51Id3tYJDS4V_ibYyCVBwHVNXvJfe0TzUZX912ZVo";
    const resumeLink = "https://www.topcv.vn/xem-cv/BFMDBldWClMEAQ0JXFBQVA8BBVcHAQZVUlNTDQe94c";

    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
                <div className="bd-grid">
                    <div className="about__img1"><img src={onlinePicture} alt="profile" /></div>
                    <h2 className="about__subtitle">Alex Dang</h2>
                    <p className="about__text">
                        Hello everyone! Alex here. I'm a mobile application developer with around 4 years of experience. I specialize in Flutter, React Native, IOS, HTML, CSS, and JavaScript. I bring enthusiasm, creativity, and a positive attitude to cross-functional teamwork and English communication. Proficient in Agile methodologies, I ensure the timely delivery of high-quality projects while supporting team collaboration and continuous learning.
                    </p>
                    <div>
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="about__button button">View Resume</a>
                    </div>
                </div>
                <div className="about__img"><img src={onlinePicture} alt="profile" /></div>
            </div>
        </section>
    )
}

export default About;
