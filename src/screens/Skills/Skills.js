import React from 'react'
import Skill from '../../assets/skills.png'
// import {LinearP} from '@mui/material/LinearProgress'


const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-title'>
        <h1>My Skills</h1>
      </div>

      <div className='skills-detials'>
        <div className='skills-left'>
          <img src={Skill} className='skills-img' alt='skillsImage' />
        </div>
        <div className='skills-right'>

        </div>
      </div>
    </div>
  )
}

export default Skills