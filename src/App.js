import React from 'react'
import {Home,Projects,Skills,About} from './screens/index'
import {Footer, Nav, PageNotFound} from './Components/Index'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"


const App = () => {
  return (
   <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>
    
   </BrowserRouter>
  )
}

export default App