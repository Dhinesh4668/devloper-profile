import React from 'react'
import { Home, Projects, Skills, About } from './screens/index'
import {  Footer,} from './Components/Index'
import './App.css'
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