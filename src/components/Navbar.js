import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
  <div className="container">
    <div className="logo"> <Link to="/"><img src="/images/logo.png" alt="Image"/></Link> </div>
    
    <div className="site-menu">
      <ul>
       
        <li><Link to="/service">Services</Link></li>
          <li><Link to="">Media</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
   
    <div className="hamburger">
      <div id="hamburger"> <span></span> <span></span> <span></span> </div>
      <div id="cross"> <span></span> <span></span> </div>
    </div>
     
      </div>
 
        </nav>
            
        </>
    )
}
