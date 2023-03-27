import React, { useState } from 'react';
import GatorSnap from '../../assets/images/GatorSnap.png'
import P2P from '../../assets/images/p2p.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import './index.scss'

function ProjectsForFun() {
    const [projects, setProjects] = useState([
      {
        name: 'Snake Game',
        description: 'The SnakeGame project created using Java and Java Spring Library is an excellent example of object-oriented programming (OOPS) fundamentals in action.  The project is structured using OOPS concepts, where the game objects, such as the snake, the food, and the obstacles, are defined as classes with specific properties and behaviors. The Java Spring Library is used to implement the game backend, providing a robust and scalable framework for handling user input and updating the game state. Overall, the SnakeGame project is a fun and engaging way to learn and apply OOPS concepts while building a popular game that is enjoyed by players of all ages.',
        img: '',
        link: "https://github.com/aakansh47/SnakeGame"
      },
      {
        name: 'HTML-CSS Sample Website',
        description: 'Creating a website with just HTML and CSS is an excellent way to refresh your basic fundamentals of web development. HTML is the foundational markup language used to structure the content of a webpage, while CSS is used to style and format the content. By using only these two technologies, you are forced to rely on the core principles and techniques of web development, such as understanding the box model, working with floats and positioning, and using CSS selectors and properties effectively. By practicing these fundamentals, you can develop a deeper understanding of web development and strengthen your skills as a developer. Additionally, creating a website with HTML and CSS alone can be a fun and rewarding project that allows you to see the direct results of your coding efforts.',
        img: P2P,
        link: "https://github.com/aakansh47/Sample-HTML-CSS-"
      }
    ]);
    
    return (
      <div className="content">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3 style={{color:"lightyellow" ,fontSize: 25 }}> {project.name}</h3>
          <p style={{fontSize: 20, color:"grey"
          }}>{project.description}</p>
          <button><a href={project.link}><p style={{fontSize: 20, color:"grey"}}> GitHub Link </p></a> </button>
        </div>
      ))}
    </div>
    );
  }
  export default ProjectsForFun