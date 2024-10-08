import React from "react";
import githubLogo from '../images/github.svg'; // Adjust the path based on your folder structure
import linkedinLogo from '../images/linkedin.svg'; // Adjust the path based on your folder structure
import facebookLogo from '../images/facebook.svg'; // Adjust the path based on your folder structure
import '../styles/Home.css'; // Optional: Import a CSS file for styling

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
                        <img id="github-logo-orange" src={githubLogo} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/ingmarhendrik" aria-label="LinkedIn Profile">
                        <img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com/ingmarhendrikrohusaar/" aria-label="Facebook Profile">
                        <img id="facebook-logo-orange" src={facebookLogo} alt="Facebook" />
                    </a>
                </nav>
            </div>
        </section>
    );
};

export default Home;
