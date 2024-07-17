import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.png'
import nav_profile_icon from '../../assets/nav_profile_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={nav_logo} alt="" className="nav-logo" />
        <img src={nav_profile_icon} alt="By Alexandru Stoica" className="nav-profile" />
    </div>
  )
}

export default Navbar