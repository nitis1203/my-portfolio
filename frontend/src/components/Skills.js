import React from "react";


const skillsData = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 60 },
    { skill: 'React.js', level: 75 },
    { skill: 'Javascript', level: 70 },
    { skill: 'Python', level: 70 },
    { skill: 'C / C++', level: 30 },
    { skill: 'UI/UX Design', level: 80 },
    { skill: 'AWS', level: 50 },
    { skill: 'DevOps', level: 40 },
    { skill: 'Photoshop', level: 60 },
  ];


const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills">
                <h1>Skills</h1>
                <br/>
                <br/>
                <div className="skills-grid">
                    {skillsData.map((item, index) => (
                        <div className="skill-bar" key={index}>
                            <span className="skill-label">{item.skill}</span>
                            <div className="bar-container">
                                <div className="level-bar" style={{ width: `${item.level}%` }} />
                            </div>
                            <span className="skill-level">{item.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;