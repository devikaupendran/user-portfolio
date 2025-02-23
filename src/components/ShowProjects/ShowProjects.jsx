import React, { useState, useEffect } from 'react';
import { myProjects } from '../../assets/myProjectsData'; // Your projects data
import './ShowProjects.css';

const ShowProjects = () => {

    // Scroll to the top when this page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //states for opening modal, selected project, index of current image, show video
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    // Handle image click (open modal, set the selected project , reset carousal to 1st image, remove show video and open modal)
    const handleImageClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setShowVideo(false);
        setModalOpen(true);
    };

    // Handle video button click (show video in the modal, set the selected project, Show the video instead of carousel)
    const handleVideoClick = (project) => {
        console.log(project);
        setModalOpen(true);
        setSelectedProject(project);
        setShowVideo(true);
    };

    //function to handle close in modal (Reset the selected project, Reset the video view)
    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
        setShowVideo(false);
    };

    // Carousel navigation
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === selectedProject.carousal.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? selectedProject.carousal.length - 1 : prevIndex - 1
        );
    };


    //render
    return (
        <div className="container show-projects-page">

            {/* -------------- view all projects -------------- */}
            <div className="allProjects d-flex flex-wrap gap-5 justify-content-center">
                {myProjects?.map((item, index) => (
                    <div className="project-item" key={index}>

                        {/* --------------Image and project name -------------- */}
                        <div className="imageOverlay">
                            <img src={item.appImg} alt={`Project ${index}`} className="img-fluid" />
                            <div className="title-overlay">
                                <p>{item.appName}</p>
                            </div>
                        </div>

                        {/* -------------- button for detailed view and show the video --------------  */}
                        <div className="viewBtn d-flex justify-content-between align-items-center">
                            <button className="custom-project-btn" onClick={() => handleImageClick(item)}>Details</button>
                            <button className="custom-project-btn"  onClick={() => handleVideoClick(item)}>Video</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --------------Modal with Overlay -------------- */}
            {modalOpen && selectedProject && (
                <div className="modal-overlay">
                    <div className="modal fade show d-block" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">

                            <div className={`modal-content ${showVideo ? 'video-modal' : 'image-modal'}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitle">
                                        {selectedProject.appName}
                                    </h5>
                                    <button type="button" className={`${showVideo ? 'btn-close-white' : 'btn-close'} btn-close`} onClick={closeModal} aria-label="Close">

                                    </button>
                                </div>

                                <div className='modal-body'>

                                    {/*-------------- If showing video --------------*/}
                                    {showVideo ? (
                                        <div className="video-container">
                                            <video width="320" height="540" autoPlay>
                                                <source src={selectedProject.videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                    ) : (
                                        // If showing image carousel
                                        <div className="carousel">
                                            <img
                                                src={selectedProject.carousal[currentImageIndex]}
                                                alt={`Carousel ${currentImageIndex}`}
                                                className="img-fluid carousel-img"
                                                width={'500px'} height={'500px'}
                                            />
                                            <div className="carousel-controls">
                                                <button onClick={goToPreviousImage} className="custom-btn btn-16">&laquo;</button>
                                                <button onClick={goToNextImage} className="custom-btn btn-16">&raquo;</button>
                                            </div>
                                        </div>
                                    )}

                                    {/*-------------- Project Details Section if not showing video --------------*/}
                                    {!showVideo && (
                                        <div className="project-details mt-3">
                                            <p><strong>Description:</strong> {selectedProject.description}</p>
                                            <div><b>Reference: </b><a href={selectedProject.reference} target="_blank" rel="noopener noreferrer">GitHub Link</a></div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowProjects;





