import React, { useState } from 'react'
import KeypadBtn from './KeypadBtn';

const ScoreBoard = ({ onDataReceived, score }) => {

  const [keyPadValue, setKeyPadValue] = useState("0");
  const [isSelectValue, setIsSelectValue] = useState([]);
  
  function handelClick(value)
  {
    setKeyPadValue(value);
    onDataReceived(value);

    setIsSelectValue(prevState => {
      const updatedArray = [...prevState];  
      updatedArray.fill(0);
      updatedArray[value - 1] = 1;  
      return updatedArray;  
    });

    // console.log(isSelectValue);
  }


  return (
    <div className='h-40 flex items-center justify-between text-center '>
        <div className='text-8xl font-medium'>{score}
            <p className='text-2xl' > Total Score</p>
        </div>
        <div className='flex flex-col text-end gap-4 font-bold'>
            <div className='flex gap-6'>
                <KeypadBtn btnNum="1" onClick={()=>{handelClick(1)}} isSelect={isSelectValue[0]}/>
                <KeypadBtn btnNum="2" onClick={()=>{handelClick(2)}} isSelect={isSelectValue[1]}/>
                <KeypadBtn btnNum="3" onClick={()=>{handelClick(3)}} isSelect={isSelectValue[2]}/>
                <KeypadBtn btnNum="4" onClick={()=>{handelClick(4)}} isSelect={isSelectValue[3]}/>
                <KeypadBtn btnNum="5" onClick={()=>{handelClick(5)}} isSelect={isSelectValue[4]}/>
                <KeypadBtn btnNum="6" onClick={()=>{handelClick(6)}} isSelect={isSelectValue[5]}/>
            </div>
            <p className='text-2xl' >Select Number</p>
        </div>
    </div>
  )
}

export default ScoreBoard;