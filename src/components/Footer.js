import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
        <div>
            
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="widget-title">CONTACT INFO</h6>
                  <address>
                    <p>
                    123/5 Pannipitiya Road, Battaramulla, 
                      <br />
                      10120, Sri Lanka
                    </p>
                    <p>+94 11 364 1642</p>
                   
                    <p> <a href="mailto:info@virtue.lk">info@virtue.lk</a> </p>

                    
                  </address>
                  
                </div>
                

               

               
                <div className="col-12">
                  <div className="footer-bottom">
                    
                    <span>  &#169;  2020 Virtue Value Engineering (Pvt) Ltd |  <a href="https://pragicts.com/"><b style={{ color:"#FFFFFF"  }}>Engineered by </b><b style={{ color:"#F71735"  }}>PragICTS</b></a>  </span>
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/#" className="scroll-top">
              <i className="lni lni-arrow-up"></i> <small>Scroll Up</small>
            </Link>
          </footer>
            
        </div>
    )
}
export default Footer
