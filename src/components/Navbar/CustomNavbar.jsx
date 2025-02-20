import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={'/'}><h1> Vijay</h1></Link> 

            {/* ---------- connect with me button ----------  */}
            <button className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </button>
        </div>
    );
};

export default Navbar;
