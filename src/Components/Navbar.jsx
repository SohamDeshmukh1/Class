import { NavLink, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import ContactUs from '../Pages/ContactUs'
import Shop from '../Pages/Shop'
export default function Navbar() {
  return (
    <>
      <div className='bg-black text-white border border-white'>
        <div className='flex'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">ContactUs</NavLink>
        </div>
      </div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/Shop' element={ <Shop/> } />
        <Route path='/About' element={ <About/> } />
        <Route path='/Contact' element={ <ContactUs/> } />
      </Routes>
    </>
  )
}
