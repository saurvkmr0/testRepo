import React from "react";
import heroShoe from '../components/assets/shoe_image.png'
import BuyLink from "./BuyLink";

function Frame()
{
    return(
        <div className="frame">
            <div className="frame1">
                <h1>
                YOUR FEET 
                DESERVE
                THE BEST
                </h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="buttonarea">
                    <button className="shopbtn">Shop Now</button>
                    <button className="categorybtn">Category</button>
                </div>
                <BuyLink />
            </div>
            <div className="frame2">
                <img src={heroShoe} alt="hero shoe image" />
            </div>
        </div>
    );
}

export default Frame;