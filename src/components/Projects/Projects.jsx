import React from 'react'
import './Projects.css'
import { myProjects } from '../../assets/myProjectsData'
import { Link } from 'react-router-dom';

const Projects = () => {
    //render
    return (
        <div className='project-container' id='project'>

            {/* ---------- main title ----------  */}
            <div className="project-title">
                <h1>My Latest Projects</h1>
            </div>

            {/* ---------- Display only 2 projects ----------  */}
            <div className="projects">
                {
                    myProjects?.map((item, index) => {
                        return (
                            <img key={index} src={item.appImg} />
                        )
                    }).slice(0,2)
                }
            </div>

            {/* ---------- view all projects button ----------  */}
            <div className="project-showmore">
                <Link to="/new-projects">
                    <button className="show-btn"> View All Projects <span>&rarr;</span></button>
                </Link>
            </div>
        </div>
    )
}

export default Projects
