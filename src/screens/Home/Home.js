
import React from 'react'
import { Element } from 'react-scroll';
import DevloperImage from '../../assets/2.png';
import Nav from '../../Components/NavBar/Nav';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Nav />
    <Element id='home' className='home-contaoner'>
      <div className='left-container'>
        <div className='title-text'>
          <h1>Hai, devlopers i'm <span>Dhinesh kumar</span></h1>
        </div>
        <div className='contant'>
          <p>some para </p>
        </div>
        <button onClick={ButtomClick}>resume</button>
        <button onClick={ButtomClick}>contact</button>
      </div>
      <div className='right-container'>
        <img src={DevloperImage} alt="avathorimage"  loading='lazy'/>
        <p>hello this image </p>
      </div>
    </Element>
    </div>
  )
}

export default Home


function ButtomClick() {
  console.log("button clicked")
}