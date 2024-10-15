import React, { useEffect } from "react";
import Portrait from "./Images/my-portrait 2.png";

const About = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const zoomEffect = Math.min(scrollPosition / 800, 1); 
            const translateEffect = Math.min(scrollPosition / 5, 100);

            const image = document.querySelector(".my-portrait img");
            const intro1 = document.querySelector(".intro-1");
            const intro2 = document.querySelector(".intro-2");

            image.style.transform = `scale(${1 + (zoomEffect/3)})`;
            image.style.opacity = `${1 - (zoomEffect*2)}`;

            intro1.style.transform = `translate(${20 - translateEffect}%, 95%)`;
            intro1.style.opacity = `${1 - zoomEffect}`;

            intro2.style.transform = `translate(${-5 + translateEffect}%, 95%)`;
            intro2.style.opacity = `${1 - zoomEffect}`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="home-about">
                <div className="intro-1">
                    <h1>Hi,</h1>
                    <h1>
                        I'm 
                        <span id="name-highlight"> Nitis</span>
                    </h1>
                    <p>Building and designing the digital world.</p>
                </div>
                <div className="my-portrait">
                    <img src={Portrait} alt="My Portrait"/>
                </div>
                <div className="intro-2">
                    <p>Based in India<br/>I'm a web and software developer passionate about transforming ideas into sleek, user-friendly digital interfaces.</p>
                    <p className="intro-2-content">Looking for someone to bring your digital vision to life? Let's collaborate and create something extraordinary together.</p>
                </div>
            </div>
            <div className="about-me">
                <h1>hi</h1>
            </div>
        </div>
    );
};

export default About;
