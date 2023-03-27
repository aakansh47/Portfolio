import React, { useState, useEffect } from 'react'
import Projects from './projects'
import Experience from './experience'
import './index.scss'
import ProjectsForFun from './projectsForFun'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container my-work" >
      <h1 className="title">My Work Experience</h1>
      <Experience />
      <h1 className="title"> Interesting Projects</h1>
      <Projects />
      <h1 className="title"> DIY Projects (Do-it-Yourself)</h1>
      <ProjectsForFun />
    </div>
  )
}
export default Work
