import React from 'react';

function checkBox(props) {
  return (
        <div className='flex gap-5 items-center'>
            <input className='check w-6 h-6' type={props.type} name={props.name}/>
            <label className='font-normal text-base'>{props.label}</label>
        </div>
  )
}

export default checkBox;