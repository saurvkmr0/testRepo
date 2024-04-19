import React from "react";
import flipkart from '../components/assets/flipkart.png';
import amazon from '../components/assets/amazon.png';

function BuyLink(){

    return(
        <div className="buylink">
            <p>Also Available On</p>
            <div className="ecommerce">
                <img src={flipkart} />
                <img src={amazon} />
            </div>


        </div>
    );
}

export default BuyLink;