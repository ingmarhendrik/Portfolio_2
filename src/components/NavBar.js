import React, { useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import signature from '../images/signature_2.png';

const Navbar = () => {

    const navRef = useRef(null);

    useEffect(() => {
        const toggleScroll = "sticky";

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (navRef.current) {
                if (currentScroll > 150 ) {
                    navRef.current.classList.add(toggleScroll);
                } else {
                    navRef.current.classList.remove(toggleScroll);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    return (
        <header className="header-container">
            <div className="header">
                <div className="logo">
                    <img src={signature} alt="Signature"/>
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
