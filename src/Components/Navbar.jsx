import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between p-5">
    <h1 className="font-bold text-4xl">Logo</h1>
    <div className="flex gap-3 items-center text-xl font-bold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Sign">Sign in</NavLink>
      <NavLink to="/Login">Login</NavLink>
    </div>
  </div>
  )
}

export default Navbar