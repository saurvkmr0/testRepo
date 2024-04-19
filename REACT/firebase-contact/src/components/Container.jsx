import React from 'react'
import Screen from '../screens/Screen';

const Container = ({contacts}) => {
  
  return (
    <div className="flex justify-center items-center h-screen">
        <Screen contacts={contacts}/>
    </div>
    )
}

export default Container