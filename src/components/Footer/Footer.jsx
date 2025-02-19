import React from 'react'
import './Footer.css'
import userIcon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Vijay</h1>
                    <p>I am an experienced iOS Application Developer with one year of professional experience in this field.</p>
                </div>

                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={userIcon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                </div> */}
            </div>

            <hr />

            <div className="footer-bottom">
                <p className='footer-bottom-left'>&copy; 2025 Vijay lal.S . All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
