import React from 'react'
import { Link } from 'react-router-dom'
// import './PageNotFound.css'
const PageNotFound = () => {
  return (
    <center>
        <div className='pnf-container'>
            <h1>404</h1>
            <p style={{color: "gray"}}>page not found</p>
            <Link to="/"  className='btn btn-outline-danger m-2'>Back to Home</Link>
        </div>
    </center>
  )
}

export default PageNotFound