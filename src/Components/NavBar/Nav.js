import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = () => {
  const fname = "Dhinesh"
  const lname = "Kumar"
  return (
    <div className='Nav-container bg-light-primary'>
      <div className='left'>
        <h3>{fname} <span>{lname}</span></h3>
      </div>
      <div className='right'>
        <Link to="/">Home</Link>
        <Link to="skills" >Skills</Link>
        <Link to="projects">Project</Link>
        <Link to="about">About</Link>
      </div>
    </div>
  )
}

export default Nav