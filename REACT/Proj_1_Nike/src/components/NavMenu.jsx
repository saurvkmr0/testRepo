import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu()
{
    return(
        <div className='navmenu'>
            <ul>
                <li><NavLink to ="/">HOME</NavLink></li>
                <li><NavLink to ="/location">LOCATION</NavLink></li>
                <li><NavLink to ="/about">ABOUT</NavLink></li>
                <li><NavLink to ="/contact">CONTACT</NavLink></li>
            </ul>
        </div>
    );
}

export default NavMenu;