import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo"  className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMentListItem">Home</Link> 
            <Link className="desktopMentListItem">Clients</Link>   
            <Link className="desktopMentListItem">portfolio</Link>   
            <Link className="desktopMentListItem">About</Link>   
  
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt="" className='desktopMenuImg'/> 
           Contact Me
        </button>
    </nav>
  )
}

export default Navbar
