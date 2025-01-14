import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MainCard from './Components/Home/MainCard'
import './HomePage.css'

function HomePage() {
  return (
    
    <div className='homepage'>
        <div className='navbar'>
            <Navbar />
        </div>

        <div className='MainCard'>
            <MainCard />
        </div>

        <div className='Services'>
            <h1>Services</h1>
        </div>

        <div className='LookAround'>
            <h1>Look Around</h1>
        </div>

        <div className='Amanities'>
            <h1>Amanities</h1>
        </div>

        <div className='Foorter'>
            <h1>foorter</h1>
        </div>
    </div>
    
  )
}

export default HomePage
