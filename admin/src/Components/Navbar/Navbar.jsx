import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Luxecart</p>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
