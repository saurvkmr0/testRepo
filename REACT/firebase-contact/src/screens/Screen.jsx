import React, { useContext } from 'react'
import Header from '../components/Header';
import NoContactScreen from './NoContactScreen';
import ContactScreen from './ContactScreen';
import AddNewContact from '../components/AddNewContact';
import { ToggleContext } from '../App';

const Screen = ({contacts}) => {
  const [isOpen, setIsOpen] = useContext(ToggleContext);

  return (
    <div className='w-[393px] h-[652px] bg-gray flex flex-col items-center pt-2 relative'>
        <Header/>
        {contacts.length?<ContactScreen contacts={contacts}/>:<NoContactScreen />}
        { isOpen && <AddNewContact/>}
    </div>
  )
}

export default Screen