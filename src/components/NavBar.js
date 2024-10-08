import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {

    return (
        <header className="header-container">
            <div className="header">
                <div className="logo">
                    <img src="img/signature_2.png" alt="Signature"/>
                </div>
                <nav className="nav-bar">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
