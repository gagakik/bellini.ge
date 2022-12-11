import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import {FaBars} from 'react-icons/fa'
import { VscChromeClose} from "react-icons/vsc";
import { IconContext } from 'react-icons' //sanaxavia


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className='container'>
            <div className='navbar'>
            <FaBars onClick={showSidebar} className={sidebar ? 'burger' : 'burger active'}/>
            <nav onClick={showSidebar} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <VscChromeClose className='close'/>
                <ul>
                    <li><Link className='navi' to='/'>Home</Link></li>
                    <li><Link className='navi' to='/about'>About</Link></li>
                    <li><Link className='navi' to='/Services'>Services</Link></li>
                    <li><Link className='navi' to='/Pricing'>Pricing</Link></li>
                    <li><Link className='navi' to='/Gallery'>Gallery</Link></li>
                    <li><Link className='navi' to='/Team'>Team</Link></li>
                    <li><Link className='navi' to='/Blog'>Blog</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default Navbar;
 