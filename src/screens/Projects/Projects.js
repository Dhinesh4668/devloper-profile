import React from 'react'
import './Project.css'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@mui/material'
import Image1 from '../../assets/projects.png'
import { Element } from 'react-scroll'

const Projects = () => {
  return (
    <Element id="projects" className='project-container'>
      <h1 className='card-title'>Projects</h1>
      <div className='card-items'>
      <CardFun />
      <CardFun />
      <CardFun />
      </div>
      
    </Element>
  )
}

export default Projects

const CardFun = () => {
  return(
  <Card className='Card' sx={{maxWidth: 350}}>

    <CardMedia 
      component='img'
      alt="image"
      height="140"
      image={Image1}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
          Sample Title
      </Typography>
      <Typography variant="body2" color="text.secondary">
          this is some project content
        </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" >Learn More</Button>
    </CardActions>
  </Card>
  )
}