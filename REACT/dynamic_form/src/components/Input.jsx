import React from 'react';

function Input(props) {
  return (
        <div className='flex justify-between flex-col'>
            <label className='pb-2 font-semibold'>{props.label}</label>
            <input className='h-8 pl-2' type={props.type}/>
        </div>
  )
}

export default Input;