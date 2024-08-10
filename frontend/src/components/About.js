import React from "react";
import Portrait from "./Images/my-portrait.png"

const About = () => {
    return (
        <div>
            <div className="home-about">
                <div className="intro-1">
                    <h1>Hi,<br/>
                        <span>I'm </span>
                        <span className="name-highlight">Nitis</span>
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
                
            </div>
        </div>
    );
};


export default About;