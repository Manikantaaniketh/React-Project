import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='footer'>
      <div className="footertop">

        <div className="box">
          <span id='contact1'>Contact Us</span>
          <span>+91 9392776522</span>
          <span>manikantabondugula@gmail.com</span>
          <span>JNTU, Hyderabad / India</span>
        </div>

        <div className="box">
          <span id='services'>Our Services</span>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/Listing" className="footer-link">Add Listing</Link>
          <Link to="/Houses" className="footer-link">Rent Houses</Link>
          <Link to="/About" className="footer-link">About Us</Link>
        </div>

        <div className="box">
          <span id='Quick'>Quick Link</span>
          <Link to="/Contact" className="footer-link">Help Center</Link>
          <Link to="/Shortlist" className="footer-link">Shortlist</Link>
          <Link to="/Contact" className="footer-link">Contact</Link>
        </div>

        <div className="box">
          <span id='logo'>Lease Hub</span>
          <Link to="/Contact">
            <button>Contact Us</button>
          </Link>
        </div>

      </div>

      <div className="footerbuttom">
        <span>Privacy Policy | | </span>
        <span>Use of terms</span>
      </div>
    </div>
  )
}

export default Footer
