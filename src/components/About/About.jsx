import React from 'react'
import './About.css'
import profile_image from '../../assets/vijay.jpg'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>

            <div className="about-sections">
                
                {/* ----- About left section ------- */}
                <div className="about-left">
                    <img src={profile_image} alt="profile image" />
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* -----About right section ------- */}
                <div className="about-right">
                    <p>I am an experienced iOS Application Developer with one year of professional experience in this field. Throughout my career, I have had the privilage of collaborating with prestigious organization, contributing to their success and growth.</p>
                    <p>My passion for iOS Application Developer is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
            </div>
        </div>
    )
}

export default About
