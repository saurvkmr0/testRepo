import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';
import Content from './Content';

const GamePage = () => {

  var diceValue;
  var keyPadValue=0;
  const [newScore, setNewScore] = useState("0");
  function handleDiceData(data)
  {
    diceValue=data;
    calcScore();
    if(data==="reset")
    {
      setNewScore(0);
    }
    console.log("from dice ",diceValue);
  }

  function handleKeyPadData(data)
  {
    keyPadValue=data; 
    console.log("from key ",keyPadValue);
  }

  function calcScore()
  {
    if(diceValue===keyPadValue)
    {
      setNewScore(Number(newScore+diceValue));
    }
    else
    {
      setNewScore(Number(newScore-2));
    }
  }
  
  return (
    <div className='mx-20 my-12'>
      <ScoreBoard score={newScore} onDataReceived={handleKeyPadData} />
      <Content onDataReceived={handleDiceData}/>
    </div>
  )
}

export default GamePage;