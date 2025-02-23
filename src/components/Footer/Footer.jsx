import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            {/* -------------- footer top section -------------- */}
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Vijay</h1>
                    <p>I am an experienced iOS Application Developer with one year of professional experience in this field.</p>
                </div>
                <div className="social-buttons">
                    <a href="https://www.linkedin.com/in/vijaylal-s/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                        <span className="social-button__inner">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                    </a>
                    <a href="https://github.com/Miraclevijaylal" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                        <span className="social-button__inner">
                            <i className="fab fa-github"></i>
                        </span>
                    </a>
                </div>
            </div>

            <hr />

            {/* -------------- footer bottom section -------------- */}
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
