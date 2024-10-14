import React from "react";
import aboutImage from '../images/about.jpg';
import '../styles/About.css';


const About = () => {
    return (
        <section id="about">
            <h1>ABOUT ME</h1>
            <div className="about-container">
                <p className="regular-text">
                    My name is Ingmar Hendrik Rohusaar. I am currently a software development student in my final 
                    year at Tallinn Centre of Industrial Education (Tallinna Tööstushariduskeskus). 
                    I have built a solid foundation in software development, particulalry in areas such as JavaScript,
                    C#, ASP.NET, Python, SQL and Git and I enjoy applying agile development methods in collaborative 
                    environments. I actively seek out opportunities to expand my knowledge and skills, embracing new
                    technologies and approaches.
                </p>
                <img src={aboutImage} alt="Hi. This is me." />
            </div>
        </section>
    );
};

export default About;