import React from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'
import NavIcon from "../../assets/coffecup.png"
 

const Nav = () => {
  return (
    <>
    <div className='nav-container container'>
      <div className='nav-icon'>
        <img className='nav-devloper' src={NavIcon} alt="CoffeCupIcon"/>
        <h2>Dhinesh <span>Kumar</span></h2>
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
        <Link  to="contact" smooth={true} duration={600}>
          <h6>Contact</h6>
        </Link>
      </div>
      
    </div>
    </>
  )
}

export default Nav