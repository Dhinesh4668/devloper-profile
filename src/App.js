import React from 'react'
import Home from './screens/Home/Home'
import Projects from './screens/Projects/Projects'
import Skills from './screens/Skills/Skills'
import About from './screens/About/About'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Skills' element={<Skills />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App