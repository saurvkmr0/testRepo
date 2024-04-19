import React from 'react';
import heroimage from './assets/heroImage.svg';
import InputFrom from './InputFrom';

function Section()
{
    return(
        <div className='section'>
            <div className='title'>
                <h1>CONTACT US</h1>
                <h6>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </h6>
            </div>
            <div className='frame'>
                <div className='form'>
                    <InputFrom />
                </div>
                <div className='heroimage'>
                    <img src={heroimage} />
                </div>
            </div>
        </div>
    );
}

export default Section;