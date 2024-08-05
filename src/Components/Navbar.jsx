import { NavLink, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/Aboutus'
import Signup from '../Pages/Signup'
import Shop from '../Pages/Shop'
export default function Navbar() {
  return (
    <>
      <div className='bg-[#17202a] text-white border-b text-2xl font-bold border-white h-[4rem] flex justify-between items-center'>
        <div>
          <h1 className='ml-2 text-4xl' >Lets Shop</h1>
        </div>

        <div className='flex justify-center items-center space-x-5 text-2xl mx-7'>
          <NavLink to="/" className='hover:border border-white p-1' >Home</NavLink>
          <NavLink to="/Shop" className='hover:border border-white p-1'>Shop</NavLink>
          <NavLink to="/About" className='hover:border border-white p-1'>About</NavLink>
          <NavLink to="/Users" className='hover:border border-white p-1'>Sign up</NavLink>
        </div>
      </div>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/Shop' element={ <Shop/> } />
        <Route path='/About' element={ <About/> } >
         
         <Route path="/user/:username" element={<UserInfo />} />
         
         </Route>
        <Route path='/Users' element={ <Signup /> } />
      </Routes>
    </>
  )
}
