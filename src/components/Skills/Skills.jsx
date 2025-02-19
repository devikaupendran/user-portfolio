import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import React from 'react'
import './Skills.css'
import iphone from '../../assets/iphone.png'
import swift from '../../assets/swift.png'
import swiftUI from '../../assets/swiftui.png'

const Skills = () => {

    return (
        <div className="skills-section">

            <div className="skills-left">
                <div className="skills">
                    <div className="skill">
                        <div className="image-group">
                            <img src={swift} />
                            <span>UIKit</span>
                        </div>
                        <div className="percentage">
                            <hr style={{width:'70%'}}/> <span>7.5</span>
                        </div>

                    </div>

                    <div className="skill">
                        <div className="image-group">
                            <img src={swiftUI} />
                            <span>Swift UI</span>
                        </div>

                        <div className="percentage">
                            <hr style={{width:'50%'}}/> <span>5 </span>
                        </div>

                    </div>
                </div>
            </div>

            <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.4 }} className="skills-right">
                <img src={iphone} />
            </motion.div>
        </div>
    )
}

export default Skills
