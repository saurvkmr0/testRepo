import React from "react";
import brandLogo from "../components/assets/brandLogo.png";

function Navbar(){
    return(
        <div className="navwrap">
            <div className="navbar">
                <div className="navlogo">
                    <img src={brandLogo} />
                </div>
                <div className="navlink">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;