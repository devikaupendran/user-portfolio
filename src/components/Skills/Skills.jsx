
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import React from 'react'
import './Skills.css'
import iphone from '../../assets/iphone.png'
import swift from '../../assets/swift.png'
import swiftUI from '../../assets/swiftui.png'

const Skills = () => {
    //render
    return (

        //  -------------- Skills section --------------
        <div className="skills-section">

            {/* -------------- Left section --------------  */}
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className="skills-left">
                <div className="skills">

                    {/* ------ UI KIT -------- */}
                    <div className="skill">
                        <div className="image-group">
                            <img src={swift} />
                            <span>UIKit</span>
                        </div>
                    </div>

                    {/* ------ SWIFT UI  -------- */}
                    <div className="skill">
                        <div className="image-group">
                            <img src={swiftUI} />
                            <span>Swift UI</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* -------- Iphone image with transition --------*/}
            <motion.div variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className="skills-right">
                <img src={iphone} />
            </motion.div>
        </div>
    )
}

export default Skills