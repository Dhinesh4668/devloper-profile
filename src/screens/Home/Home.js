
import React from 'react'
import { Element } from 'react-scroll';
import DevloperImage from '../../assets/2.png';
import IconTitle from '../../assets/icon3.jpg'
import Nav from '../../Components/NavBar/Nav';
import './Home.css';
import Button from '@mui/material/Button'


const Home = () => {
  return (
    <div>
      <Nav />
    <Element id='home' className='home-contaoner' >
      <div className='left-container'>
        <div className='title-text'>
          <h1 >Hai, <img src={IconTitle} alt='icon' style={{width: "50px"}}/></h1>
          <h1 className='span'>Dhinesh Kumar</h1>
        </div>
        <div className='contant'>
          <p>some para </p>
        </div>
        <Button variant="outlined" color='inherit' onClick={Downloade} className='btn-home'>Resume</Button>
      </div>
      <div className='right-container'>
        <img src={DevloperImage} alt='image' />
      </div>
    </Element>
    </div>
  )
}

export default Home


function Downloade() {
    window.location.href = ""
  console.log("button clicked")
} 