import React, { useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import signature from '../images/signature_2.png';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
            if (window.scrollY > navHeight) {
                navRef.current.classList.add("sticky");
            } else {
                navRef.current.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header-container" ref={navRef}>
            <div className="header">
                <div className="logo">
                    <img src={signature} alt="Signature" />
                </div>
                <nav className="nav-bar">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
