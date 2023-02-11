import React from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <>
    <div className='nav-container'>
      <div className='nav-icon'>
        <image className='nav-devloper' src="" alt=""/>
      </div>
      <div className='nav-property'>
        <Link to='home' smooth={true} duration={600}>
            <h6>Home</h6>
        </Link>
        <Link to="skills" smooth={true} duration={600}>
          <h6>Skills</h6>
        </Link>
        <Link to="projects" smooth={true} duration={600}>
          <h6>Projects</h6>
        </Link>
        <Link to="about" smooth={true} duration={600}>
          <h6>About</h6>
        </Link>
        <Link to="" smooth={true} duration={600}></Link>
      </div>
    </div>
    </>
  )
}

export default Nav