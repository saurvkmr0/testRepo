import React from 'react'
import wallpaper from '../assets/purple_leaf2.png';
import Input from './Input';
import CheckBox from './CheckBox';
import Button from './Button';




const Frame = () => {
  function submitClicked(event)
  {
    event.preventDefault();
    // console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(event.target[4].value);
    console.log(event.target[5].value);
    console.log(event.target[6].value);
    console.log(event.target[7].value);
  };
  return (
    <div className='frame flex flex-row p-16'>
        <div className='bgPart'>
        <img className="heroWallpaper" src={wallpaper} />
        </div>

        <div className='formPart bg-white px-20 flex flex-col justify-center'>
          <h1 className='heroText text-4xl pb-5 font-bold'>Sign up</h1>
          <form className='form grid grid-rows-3 grid-cols-2 gap-8' onSubmit={submitClicked}>

          <Input label="FIRST NAME" />
          <Input label="LAST NAME" />
          <Input label="PHONE"/>
          <Input label="EMAIL" type="email"/>
          <Input label="PASSWORD" type="password"/>
          <Input label="CONFIRM PASSWORD" type="password"/>  

          <CheckBox label="I accept terms and conditions" type="checkbox"/>
          <CheckBox label="I want to receive news" type="checkbox"/>   
          <Button buttonText="Reset" type="reset" color="#272155" />
          <Button buttonText="Sign up" type="submit" color="#5f317d"/>

          </form>
        </div>

    </div>
  );
}

export default Frame