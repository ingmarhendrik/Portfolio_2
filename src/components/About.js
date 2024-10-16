import React from "react";
import aboutImage from '../images/about.jpg';
import '../styles/About.css';


const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>ABOUT ME</h1>
                    <p className="regular-text">
                        My name is Ingmar Hendrik Rohusaar. I am currently a software development student in my final 
                        year at Tallinn Centre of Industrial Education (Tallinna Tööstushariduskeskus). 
                        I have built a solid foundation in software development, particulalry in areas such as JavaScript, React,
                        C#, ASP.NET, SQL and Git and I enjoy applying agile development methods in collaborative 
                        environments. I actively seek out opportunities to expand my knowledge and skills, embracing new
                        technologies and approaches.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Hi. This is me." />
                </div>
            </div>
        </section>
    );
};

export default About;