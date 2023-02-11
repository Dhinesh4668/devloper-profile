
import React from 'react'
import { Element } from 'react-scroll';
import DevloperImage from '../../assets/'
import './Home.css';

const Home = () => {
  return (
    <Element id='home' className='home-contaoner'>
      <div className='left-container'>
        <div className='title-text'>
          <h1>Hai, devlopers i'm <span>Dhinesh kumar</span></h1>
        </div>
        <div className='contant'>
          <p>some para </p>
        </div>
        
      </div>
      <div className='right-container'>
        <img src={DevloperImage} alt="avathorimage"  loading='lazy'/>
      </div>
    </Element>
  )
}

export default Home