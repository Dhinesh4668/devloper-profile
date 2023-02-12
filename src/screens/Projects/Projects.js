import React from 'react'
import './Projects.css'




const Projects = () => {
  return <>
  <div className='project-title'>
    <h1>Projcts</h1>
  </div>
  <div className='Project-container'>
  <CardSlider />  
  </div> 
  </>
}

export default Projects




function CardSlider () {
  return(
  <div>
    <p>slider</p>
  </div>
  )
}