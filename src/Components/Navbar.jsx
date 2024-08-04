import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'
import { NavLink, Route, Routes } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="bg-zinc-700 flex justify-between p-5">
        <h1 className="font-bold text-4xl">Logo</h1>
        <div className="flex gap-3 items-center text-xl font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Signin">Sign in</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signin' element={<Signin/>} />
      </Routes>
    </div>

  )
}

export default Navbar