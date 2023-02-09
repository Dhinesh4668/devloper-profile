import React from 'react'
import './Home.css'
import { Nav } from '../../Components/Index'

const Home = () => {
  return (
    <div>
      <Nav />
      <HomePage />
    </div>
  )
}
export default Home

function HomePage() {
  return (
    <center>
      <div>left image</div>
      <div>right contant
        <div>button</div>
      </div>
    </center>
  )
}