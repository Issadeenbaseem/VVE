import React from 'react'
import {  Link } from "gatsby"

export default function Side() {
    return (
        <>
          <aside className="side-widget">
  <div className="inner">
    <div className="logo"> <a href="index.html"><img src="/images/logo.png" alt="Image"/></a> </div>
   
    <div className="hide-mobile">
      
     
      <h6 className="widget-title">ADDRESS</h6>
      <address className="address">
      <p>23/5 Pannipitiya Road, Battaramulla,<br />
      10120, Sri Lanka</p>
      <p>Phone +94 77 759 0844 | +94 71 628 6611</p>
      </address>
      <h6 className="widget-title">FOLLOW US</h6>
      <ul className="social-media">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
    
    <div className="show-mobile">
      <div className="languages">
        <ul>
          <li><a href="#">en</a></li>
          <li><a href="#">ru</a></li>
        </ul>
      </div>
    
      <div className="site-menu">
        <ul>
          <li><a href="#">Consto</a><i className="lni lni-chevron-down-circle"></i>
            <ul>
              <li><Link to="">About Company</Link></li>
              <li><Link to="">Core Values</Link></li>
              <li><Link to="">Leadership</Link></li>
              <li><Link to="">Our History</Link></li>
              <li><Link to="">Offices</Link></li>
              <li><Link to="">Certificates</Link></li>
            </ul>
          </li>
          <li><Link to="">Services</Link></li>
          <li><Link to="">Projects</Link></li>
          <li><Link to="">News</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
      </div>
     
    </div>
    
    <small>  &#169;  2020 Virtue Value Engineering (Pvt) Ltd  <br /> <a href="https://pragicts.com/"><b style={{ color:"#FFFFFF"  }}>Engineered by </b><b style={{ color:"#F71735"  }}>PragICTS</b></a>  </small>

 </div>
</aside>
            
        </>
    )
}
