import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const Navbar = () => {
    // Setting the initial active menu to 'home'
    const [menu, setMenu] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    //open the side menu
    const openMenu = () => {
        menuRef.current.style.right="0";
        setIsMenuOpen(true);
    }

    //for closing the side menu
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
        setIsMenuOpen(false);
    }

    // Function to handle menu item click and set the active menu
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem); 
    }

    return (
        <div className='navbar'>
            <h1> Vijay</h1>

            {/* ------------------ Side Menu Open Icon ------------- */}
            <img src={menuOpen} onClick={openMenu} className='nav-mobile-open' alt="open menu"/>

            <ul className='nav-menu' ref={menuRef}>

                {/* ------------------Side Menu Close Icon ------------- */}
                <img src={menuClose} onClick={closeMenu} className='nav-mobile-close' alt="close menu" />

                <li className={menu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
                    <AnchorLink className='anchor-link' href='#hero' > <p>Home</p> </AnchorLink>
                </li>

                <li className={menu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>
                    <AnchorLink className='anchor-link' offset={50} href='#about' >  <p>About Me</p> </AnchorLink>
                </li>

                <li className={menu === 'services' ? 'active' : ''} onClick={() => handleMenuClick('services')} >
                    <AnchorLink className='anchor-link' offset={50} href='#service' >  <p>Services</p> </AnchorLink>
                </li>

                <li className={menu === 'projects' ? 'active' : ''} onClick={() => handleMenuClick('projects')} >
                    <AnchorLink className='anchor-link' offset={50} href='#project' > <p>Projects</p> </AnchorLink>
                </li>

                <li className={menu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')} >
                    <AnchorLink className='anchor-link' offset={50} href='#contact' > <p>Contact</p> </AnchorLink>
                </li>
            </ul>

            {/* --------- connect with me button ------------  */}
            <button className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me </AnchorLink></button>
        </div>
    );
};

export default Navbar;
