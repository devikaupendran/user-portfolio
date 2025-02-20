import React from 'react';
import './CustomNavbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='customNavbar'>
            <Link to={'/'}><h1> Vijay</h1></Link> 

            {/* ---------- connect with me button ----------  */}
            <button className="customNav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </button>
        </div>
    );
};

export default Navbar;
