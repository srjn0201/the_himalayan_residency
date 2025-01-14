import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="nav">
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      <div className='links'>  
        {/* <ul className='navBar'>
            <li><a href="#home" className="link">Home</a></li>
            <li><a href="#about" className="link">About</a></li>
            <li><a href="#services" className="link">Services</a></li>
            <li><a href="#contact" className="link">Contact</a></li>
        </ul> */}
        <h1>Links</h1>
      </div>
      <div className='btn'>
        {/* <button className='btn'>Login</button> */}
        <h1>Login</h1>
      </div>
    </nav>
  )
}

export default Navbar
