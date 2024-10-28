import React, { useEffect } from "react";
import Portrait from "./Images/my-portrait 2.png";
import Vern from "./Images/Vern.png"

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

            intro1.style.transform = `translate(${20 - (translateEffect*2)}%, 95%)`;
            intro1.style.opacity = `${1 - zoomEffect}`;

            intro2.style.transform = `translate(${-5 + (translateEffect*2)}%, 95%)`;
            intro2.style.opacity = `${1 - zoomEffect}`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const birthDate = new Date("2004-03-12");
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear() - (today<new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

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
            <div className="about-me-container">
                <div className="about-me">
                    <section>
                        <h1>About me</h1>
                        <div className="bio">
                            <br/>
                            <br/>
                            <p>Hello! I'm Nitis, a front-end developer and tech enthusiast currently pursuing a Bachelor of Technology in Computer Science and Engineering. I specialize in building intuitive and responsive web applications, with expertise in JavaScript, React, DevOps, AWS, and UI/UX design. My approach to problem-solving is both analytical and user-focused, allowing me to create scalable, efficient solutions.</p>
                            <br/>
                            <p>Outside of tech, I enjoy reading and staying active with fitness training. I'm passionate about continuous learning and collaborating with diverse teams to turn innovative ideas into reality. Let's connect and bring something incredible to life!</p>
                            <br/>
                            <br/>
                            <div className="bio-details">
                                <p>Birthday : 12-March-2004</p>
                                <p>Age: {age}</p>
                                <p>Mail-id : nitis1203@gmail.com</p>
                                <p>City : Chennai, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={Vern} alt="Vern" className="vern-img"/>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
