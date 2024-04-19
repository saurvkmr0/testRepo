import React from 'react';
import Button from './Button';

const NavBtn = ({onBtnChange}) => {

  function handleClick(event)
  {
    onBtnChange(event.target.value);
  }

  return (
    <div className='flex gap-5 justify-center'>
            <Button btnName="All" onClick={handleClick} value="all" />
            <Button btnName="Breakfast" onClick={handleClick} value="breakfast"/>
            <Button btnName="Lunch" onClick={handleClick} value="lunch"/>
            <Button btnName="Dinner" onClick={handleClick} value="dinner"/>
    </div>
  )
}

export default NavBtn;