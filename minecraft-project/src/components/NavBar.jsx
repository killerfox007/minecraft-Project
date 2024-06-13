import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <h2><NavLink to="/">Home</NavLink></h2>
      <h2><NavLink to="/Mobs">Mobs</NavLink></h2>
      <h2><NavLink to="/MobForm">Create Mob</NavLink></h2>
    </div>
  )
}

export default NavBar