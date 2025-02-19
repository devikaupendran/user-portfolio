import React from 'react'
import './Projects.css'
import mywork_data from '../../assets/mywork_data'

const Projects = () => {
    return (
        <div className='project-container' id='project'>
            <div className="project-title">
                <h1>My Latest Projects</h1>
            </div>
            <div className="projects">
                {
                    mywork_data?.map((item, index) => {
                        return (
                            <img key={index} src={item.w_img} />
                        )
                    })
                }
            </div>

            <div className="project-showmore">
                <button className="show-btn">Show More <span>&rarr;</span></button>
                
            </div>
        </div>
    )
}

export default Projects
