import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          The world of computer science is constantly evolving, and it takes a special
          kind of person to stay on top of the latest advancements and innovations. 
          </p>
          <p align="LEFT">
          I am currently pursuing a master's in computer science from the University of 
          Florida, and I am in my last semester. My passion lies in developing software that 
          can have a significant impact on a large number of people, and I want to be 
          recognized for my contribution in this field. I am a highly ambitious individual 
          and a smart worker, always striving to learn new skills and take on new challenges.
          </p>
          <p>
          One of my greatest strengths is my ability to develop front-end websites using 
          JS, HTML, and CSS with the React framework. I have worked on several versatile 
          projects in this area, and it has taught me that in the field of computer science, 
          any skill and most skills can be used together. I believe that this mindset 
          has helped me become a well-rounded developer.
          </p>
          <p>
          When I'm not busy with my studies or coding, I love to indulge in my hobbies.
           As a tech enthusiast, I'm always on the lookout for the latest gadgets and software updates.
            Soccer is another passion of mine, both as a player and a spectator. I also love to lose 
            myself in a good mystery thriller novel, with complex characters and gripping stories keeping 
            me hooked for hours. And when I need a break from it all, I turn to gaming, exploring new worlds
             or battling it out with friends in intense multiplayer sessions. These hobbies keep me entertained 
             and engaged, and help me unwind after a long day of work
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
