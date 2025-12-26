import React from 'react'
import "../Home/Home.css"
import Navbar from "../Home/AdminLayout"
import HomePage from '../Home/AdminBody'

const Home = () => {
  return (
    <div className='body'>
         <Navbar/>
         <HomePage/>
    </div>
  )
}

export default Home
