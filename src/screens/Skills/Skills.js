import React from 'react'
import Skill from '../../assets/study.png'
import './Skills.css'
import { LinearProgress} from '@mui/material'
import { Element } from 'react-scroll'


const Skills = () => {
  return (<Element id="skills">
    <div className='skills-title container'>
        <h1>My Skills</h1>
      </div>
    <div className='skills-container'>
      

      <div className='skills-detials'>
        <div className='skills-left'>
          <img src={Skill} className='skills-img' alt='skillsImage' />
        </div>
        <div className='skills-right'>
        <div className='process'>
          <p>ReactJS and Ractrouter</p>
            <LinearProgress variant='determinate' value={50} />
        </div>
        <div className='process'>
          <p>HTML and CSS</p>
            <LinearProgress variant='determinate'  value={70} />
        </div>
        <div className='process'>
          <p>Javascript</p>
            <LinearProgress variant='determinate' value={50} />
        </div>
        <div className='process'>
          <p>Node js and Express</p>
            <LinearProgress variant='determinate' value={10} />
        </div>
        <div className='process'>
          <p>UI design figma</p>
            <LinearProgress variant='determinate' value={75} />
        </div>
        <div className='process git '>
          <p>NextJS</p>
            <LinearProgress variant='determinate' value={40} />
        </div>
        </div>
        
      </div>
    </div>
    </Element>
  )
}

export default Skills