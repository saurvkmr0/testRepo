import React from 'react'
import Header from '../components/Header';
import NoContactScreen from './NoContactScreen';
import ContactScreen from './ContactScreen';
import AddNewContact from '../components/AddNewContact';
import { useState } from 'react';

const Screen = ({contacts}) => {
  const [isAddContactButtonClicked, setIsAddContactButtonClicked] = useState(false);

  function handleAddNewContactStatus(data){
    setIsAddContactButtonClicked(data);
  }

console.log(contacts);
  return (
    <div className='w-[393px] h-[652px] bg-gray flex flex-col items-center pt-2 relative'>
        <Header dataReceived={handleAddNewContactStatus}/>
        {contacts.length?<ContactScreen contacts={contacts}/>:<NoContactScreen />}
        { isAddContactButtonClicked && <AddNewContact/>}
    </div>
  )
}

export default Screen