import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  // Import Router components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import { motion } from 'framer-motion';
import Services from './components/Services/Services';
import Animation from './components/Animation/Animation';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomNavbar from './components/Navbar/CustomNavbar'

// Import the new page component
import ShowProjects from './components/ShowProjects/ShowProjects';  // The new page component

const App = () => {
    const location = useLocation();
    // Scroll to top when the page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            {location.pathname === "/new-projects" ? (
                <CustomNavbar /> // Render custom navbar for /new-projects
            ) : (
                <Navbar /> // Default navbar for other routes
            )}

            {/* Define Routes for the app */}
            <Routes>
                {/* Route for the main page */}
                <Route path="/" element={
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Hero />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <About />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center "
                        >
                            <Skills />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Experience />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Services />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Projects />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Contact />
                        </motion.div>

                        <Animation />
                        <Footer />
                    </>
                } />

                {/* Route for the new page */}
                <Route path="/new-projects" element={

                    <>
                        <ShowProjects />

                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false }}
                            className="h-screen flex items-center justify-center"
                        >
                            <Contact />
                        </motion.div>
                    </>

                } />  {/* The new page */}
            </Routes>



        </div>
    );
}

export default App;
