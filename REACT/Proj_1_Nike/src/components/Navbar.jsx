import React from 'react';
import NavMenu from './NavMenu';
import brandLogo from '../components/assets/brand_logo.png'
import { NavLink } from 'react-router-dom';

function Navbar()
{
    return(
        <div className='navwrap'>
            <img src={brandLogo} alt="logo"></img>
            <NavMenu />
            <NavLink to="/login"><button className='loginbtn'>Login</button></NavLink>
        </div>
    );
}

export default Navbar;