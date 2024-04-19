import React from 'react'

const Button = ({btnName, onClick, value}) => {
  return (
    <button className='text-white text-base font-normal px-3 py-1.5 bg-red-600 rounded flex justify-end' onClick={onClick} value={value}>{btnName}</button>
  )
}

export default Button;