import React, { useState } from 'react'
import "./style.css";
import Navbar from "../src/components/Navbar";
import Content from './components/Content';

const App = () => {

  const [searchData, setSearchData] = useState("");
  const [btnValue, setBtnValue] = useState("all");

  function handleBtnChange(btnValue)
  {
    setBtnValue(btnValue);
  }

  function handleSearchDataFromNav(searchData)
  {
    setSearchData(searchData);
  }

  return (
    <div className='container max-w-full flex flex-col'>
        <Navbar onDataReceived={handleSearchDataFromNav} onBtnChange={handleBtnChange}/>
        <Content searchData={searchData} btnValue={btnValue}/>
    </div>
  )
}

export default App;