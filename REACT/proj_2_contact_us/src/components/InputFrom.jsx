import React from 'react';
import message from './assets/message.png';
import message2 from './assets/message2.png';
import phone from './assets/phone.png';

function InputFrom (){
    return(
        <div>
            <div className='btns'>
                <button><img src={message}/> VIA SUPPORT CHAT</button>
                <button><img src={phone}/>VIA CALL</button>
                <button className='span-row'><img src={message2}/> VIA EMAIL FORM</button>
            </div>
            <div className='inputfield'>
                <p>Name</p>
                <input></input>
                <p>E-Mail</p>
                <input></input>
                <p>TEXT</p>
                <input className='inputtext'></input>
                <button className='submitbtn'>SUBMIT</button>
            </div>
        </div>
    );
}

export default InputFrom;