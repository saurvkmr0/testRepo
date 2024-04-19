import React from 'react'
import TitleBar from './TitleBar'
import SearchBar from './SearchBar'

const NoContactScreen = ({dataReceived}) => {


  return (
    <div className=" ">
      <TitleBar />
      <SearchBar dataReceived={dataReceived}/>
    </div>
  )
}

export default NoContactScreen