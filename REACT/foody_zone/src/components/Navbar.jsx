import React from 'react';
import logoImg from './assets/Foody Zone.svg'
import Search from './Search';
import NavBtn from './NavBtn';

const Navbar = ({ onDataReceived, onBtnChange }) => {

  return (
    <div className='navbar pb-8'>
        <div className='flex md:flex-row sm:flex-col flex-col mx-32 mt-20 mb-14'>
        <div className='flex flex-col items-center md:flex-row justify-between w-full gap-y-5'>
          <div className='logo'><img src={logoImg} /></div>
          <div><Search onDataReceived={onDataReceived}/></div>
          </div>
        </div>
        <NavBtn onBtnChange={onBtnChange}/>
    </div>
  )
}

export default Navbar;