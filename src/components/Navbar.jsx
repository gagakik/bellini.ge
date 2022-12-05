import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'


const Navbar = () => {
    return (
        <div className='container'>
            <div className='navbar'>
            <nav>
            <Link className='navi' to='/'>Home</Link>
            <Link className='navi' to='/about'>About</Link>
            <Link className='navi' to='/Services'>Services</Link>
            <Link className='navi' to='/Pricing'>Pricing</Link>
            <Link className='navi' to='/Gallery'>Gallery</Link>
            <Link className='navi' to='/Team'>Team</Link>
            <Link className='navi' to='/Blog'>Blog</Link>
            </nav>
            </div>
        </div>
    );
}

export default Navbar;
