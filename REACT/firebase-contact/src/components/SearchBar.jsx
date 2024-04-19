import React, { useEffect } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';


const SearchBar = ({dataReceived}) => {

    const [addNewContact, setAddNewContact] = useState(false);

    useEffect(()=>{
        dataReceived(addNewContact);
    },[addNewContact, dataReceived]);

    function addContactClick()
    {
        if(addNewContact==false)
        {
            setAddNewContact(true);
            document.getElementById('addAndClose').classList.add('open-add-contact');
            document.getElementById('addAndClose').classList.remove('close-add-contact');
            document.getElementById('contact-screen').classList.add('add-blur');
            
        }
        if(addNewContact==true)
        {
            setAddNewContact(false);
            document.getElementById('addAndClose').classList.add('close-add-contact');
            document.getElementById('addAndClose').classList.remove('open-add-contact');
            document.getElementById('contact-screen').classList.remove('add-blur');
            
        }
    }
    
  return (
    <div className="searchBar flex w-full py-1 items-center gap-3">
        <div className="flex relative w-full ">
            <IoSearch className='absolute top-[8px] left-[10px] size-6 text-white'/>
            <input className='search bg-gray rounded-[10px] border border-white w-full h-10 text-white pl-[44px]' placeholder='Search Contact'></input>
        </div>
        <IoIosAddCircle className='w-[72px] h-[72px] text-white' id='addAndClose' onClick={addContactClick}/>
    </div>
    )
}

export default SearchBar;