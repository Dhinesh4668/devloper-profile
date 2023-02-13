
import React from 'react'
import { Element } from 'react-scroll';
import DevloperImage from '../../assets/2.png';
// import IconTitle from '../../assets/icon3.jpg'
import Nav from '../../Components/NavBar/Nav';
import './Home.css';
// import Button from '@mui/material/Button'
import { GrLinkedin, GrFacebook, GrInstagram } from "react-icons/gr";
import { FaWhatsappSquare } from 'react-icons/fa'
import { TfiGithub } from "react-icons/tfi"
import { FiDribbble } from "react-icons/fi"

const Home = () => {
  return (
    <div>
      <Nav />
      <Element id='home' className='home-contaoner container pt-5' >
        <div className='left-container  col-sx-6'>
          <div className='title-text'>
            <h1 >Hai,</h1>
            <h1 className='span'>Dhinesh Kumar</h1>
          </div>
          <div className='contant border-1'>
            <p>
              I am very interested in technology and working towards it.
              I love to work in computers and programs.
              Now i am seeking for an entry level position
              where I can get more knowledge about them and work hard.
              Also worked on javascript and react.js (js library) languages.
            </p>
          </div>
          <SocialMediaIcons />
        </div>
        <div className='right-container col-sx-1'>
          <img src={DevloperImage} alt='image' />
        </div>
      </Element>
    </div>
  )
}

export default Home



function SocialMediaIcons() {
  return <div className='icons container'>
    <a className='' href='https://www.linkedin.com/in/dhinesh-kumar-00aa8b1a5/?originalSubdomain=in' >
      <GrLinkedin size={"30px"} />
    </a>
    <a>
      <FaWhatsappSquare size={"36px"} />
    </a>
    <a href='https://www.instagram.com/__viram_/'>
      <GrInstagram size={"30px"} />
    </a>
    <a>
      <GrFacebook size={"30px"} />
    </a>
    <a href='https://github.com/Dhinesh4668'>
      <TfiGithub size={"30px"} />
    </a>
    <a href='https://dribbble.com/dhin_designer'>
      <FiDribbble size={"30px"} />
    </a>
  </div>


}