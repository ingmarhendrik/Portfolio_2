import React from "react";
import githubLogo from '../images/github.svg';
import linkedinLogo from '../images/linkedin.svg';
import facebookLogo from '../images/facebook.svg';
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="introduction">
                <p>
                    Hey! <br /> My name is <span style={{ color: "#F58700" }}>Ingmar</span><br /> 
                    and I'm a <span style={{ color: "#F58700" }}>software</span> <br /> 
                    <span style={{ color: "#F58700" }}>developer</span>.
                </p>
                <nav>
                    <a href="https://github.com/ingmarhendrik" aria-label="GitHub Profile">
                        <img src={githubLogo} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/ingmarhendrik" aria-label="LinkedIn Profile">
                        <img src={linkedinLogo} alt="LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com/ingmarhendrikrohusaar/" aria-label="Facebook Profile">
                        <img src={facebookLogo} alt="Facebook" />
                    </a>
                </nav>
            </div>
        </section>
    );
};

export default Home;
