import React from 'react';
import Navbar from '../Navbar/Navbar';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faAngular,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faSwift,
  faDocker,
  faAws,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode, 
  faTerminal 
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillData = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Angular', icon: faAngular },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'Java', icon: faJava },
    { name: 'PHP', icon: faPhp },
    { name: 'SQL Databases', icon: faDatabase }, // Represents SQL-based databases
    { name: 'MongoDB', icon: faDatabase }, // No specific MongoDB icon
    { name: 'C++', icon: faCode },
    { name: 'C', icon: faCode },
    { name: 'Docker', icon: faDocker },
    { name: 'AWS', icon: faAws },
    { name: 'Unity', icon: faUnity },
    { name: 'Swift', icon: faSwift },
    { name: 'Kotlin', icon: faTerminal },
    { name: 'Django', icon: faPython }, // Django is a Python framework
    { name: 'Flask', icon: faPython }, // Flask is a Python framework
    { name: 'Flutter', icon: faCode }, // Flutter is a UI framework
    { name: 'Ruby', icon: faTerminal },
    { name: 'Rust', icon: faTerminal },
    { name: 'Go', icon: faTerminal },
    { name: 'R', icon: faTerminal },
  ];

  return (
    <div>
      <Navbar />
      <div className="skills">
        <h2 className="skills-header">Experienced in working with these technologies:</h2>
        <div className="skills-list">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className={`skill-item skill-animation-${index}`}
            >
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <div className="skill-box">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
