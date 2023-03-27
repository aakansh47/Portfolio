import React, { useState } from 'react'
import './index.scss'

function Experience() {

  const [experience, setExperience] = useState([
    {
      company: 'Amazon Web Services',
      title: 'Software Engineer',
      startDate: 'May 2022',
      endDate: 'August 2022',
      description:
        'Responsible for designing and developing web pages for the Network State Manager, an internal service mostly accessed by Network Engineers. Designed each web-page using Figma Design tool. With AWS internal library Polaris and ReactJS framework designed the User Interface, using JavaScript along with CSS and HTML. JEST and ENZYME along with Polaris library were used for Testing.(Code Coverage:100%). GraphQL query language was integrated for creating API calls in Python, onto a Flask framework. This migration from REST API to GraphQL API largely benefits the service with efficiency and proves to be developer friendly',
    },
    {
      company: 'Visio Ingenii',
      title: 'Software Developer',
      startDate: 'May 2020',
      endDate: 'Nov 2020',
      description:
        'Developed and implemented an algorithm for Automated Detection and Prediction of tumours in Lung CT - DICOM images under the guidance of Dr Nagachetan Bangalore (CEO, Visio Ingenii), Dr Dhirendra Mishra (Professor, Computer Department, NMIMS University) and radiological assistance provided by Dr Nilesh Haran (Radiologist, HCG Hospital, Nagpur). Conducted extensive research in the field of Medical Image processing, Computed Tomography Texture Analysis (CTTA) and Deep Learning. Results obtained from the workflow were verified by certified Radiologist',
    },
  ])

  return (
      <div className="content">
      {experience.map((job, index) => (
        <div className="job" key={index}>
          <h3 style={{color:"lightyellow", fontSize: 25}}>{job.title} at {job.company}</h3>
          <p style={{fontSize: 20, color:"grey"}}>{job.startDate} - {job.endDate}</p>
          <p style={{fontSize: 20, color:"grey"}}>{job.description}</p>
        </div>
      ))}
    </div>
      
  )
}
export default Experience
