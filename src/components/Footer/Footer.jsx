import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt=""/>
              <p>Experience delicious meals delivered fresh and fast, right to your doorstep. We’re here to satisfy your cravings anytime, anywhere with secure payments and real-time order tracking. Whether it’s breakfast, lunch, or a midnight snack, we’ve got you covered.</p>
              <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
              </div>
                </div>
                <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul><li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li></ul>
                    
                    </div>
                    <div className="footer-content-right">
                      <h2>Get In Tounch</h2>
                      <ul><li>+91-9087643434</li>
                      <li>conatact@desitadka.com</li></ul>

                    </div>
                
            
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 desitadka.com All Rights Are Reserved</p>

      
    </div>
  )
}

export default Footer
