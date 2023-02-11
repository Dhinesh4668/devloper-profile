
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
        <div className='left-container container'>
          <div className='title-text'>
            <h1 >Hai,</h1>
            <h1 className='span'>Dhinesh Kumar</h1>
          </div>
          <div className='contant'>
            <p className='text-wrap  lh-sm-1'>I am very interested in technology and working towards it.<br /> 
            I love to work in computers and programs.<br />
            Now i am seeking for an entry level position <br />
            where I can get more knowledge about them and work hard.
            <br /> Also worked on javascript and react.js (js library) languages. 
            </p>
          </div>
          <Button>Resume</Button>
        </div>
        <div className='right-container'>
          <img src={DevloperImage} alt='image' />
        </div>
      </Element>
    </div>
  )
}

export default Home
