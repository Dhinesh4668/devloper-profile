import React from 'react'
import { Home, Projects, Skills, About } from './screens/index'
import './App.css'
// import Nav from './Components/NavBar/Nav'
// import {BrowserRouter,Routes,Route} from "react-router-dom"


const App = () => {
  return <>
  <Home />
  <Skills />
  <Projects />
  <About />
  </>
}

export default App