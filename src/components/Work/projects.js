import React, { useState } from 'react';
import GatorSnap from '../../assets/images/GatorSnap.png'
import P2P from '../../assets/images/p2p.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import './index.scss'


function Projects() {
    const [projects, setProjects] = useState([
      {
        name: 'GatorSnap',
        description: 'Expressive online photo galleries are the new way of creative expression, allowing artists, brands and companies to provide authenticity and originality in the rising digital age. Our application depicts stock photography that allows Anyone to license images for creative or business purposes. Rather than hiring a professional photographer, individuals can upload, license, share, and sell their images, if needed. Each photo can be water marked to retain authenticity. The water mark will be removed once the picture(s) is purchased completely. Users can upload their images under various categories they deem fit. The authority to take-down or modify the image lies solely with the authorized user. The tech stack currently in use for developing this web application are: ReactJs, GoLang, SQlite',
        img: GatorSnap,
        link: "https://github.com/aakansh47/GatorSnap---SE-Project-2022-"
      },
      {
        name: 'P2P File Sharing System : Bitorrent Alike',
        description: 'This project involved building a peer-to-peer file-sharing software that was designed to operate similarly to BitTorrent. One of the key features of BitTorrent is the choking-unchoking mechanism, which was successfully implemented in the software. This mechanism ensures optimal use of network resources by allowing the software to intelligently allocate bandwidth between peers, based on their current download speeds. The resulting software offers a user-friendly and efficient file-sharing experience, allowing users to download and share files quickly and reliably.',
        img: P2P,
        link: "https://github.com/aakansh47/Bit-Torrent-Protocol/tree/main"
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
  export default Projects