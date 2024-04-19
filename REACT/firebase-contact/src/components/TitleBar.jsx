import React from 'react'
import logo from '../assets//logos_firebase.png'

const TitleBar = () => {
  return (
    <div className="titleBar w-[361px] h-[60px] flex justify-center items-center font-bold text-xl gap-2 bg-white rounded-[10px] ">
        <div className="logo">
            <img src={logo} />
        </div>
        <h2>Firebase Contact App</h2>
    </div>
    )
}

export default TitleBar