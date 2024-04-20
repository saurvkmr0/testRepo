import React, { useContext } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ToggleContext } from '../App';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useContext(ToggleContext);

  function addContactClick() {
    setIsOpen(!isOpen);
    const addCloseBtn = document.getElementById('addAndClose');
    const contactScreen = document.getElementById('contact-screen');
    if (isOpen) {
      addCloseBtn.classList.add('close-add-contact');
      addCloseBtn.classList.remove('open-add-contact');
      contactScreen.classList.remove('add-blur');
    } else {
      addCloseBtn.classList.add('open-add-contact');
      addCloseBtn.classList.remove('close-add-contact');
      contactScreen.classList.add('add-blur');
    }
    // console.log(isOpen);
  }

  return (
    <div className="searchBar flex w-full py-1 items-center gap-3">
      <div className="flex relative w-full ">
        <IoSearch className='absolute top-[8px] left-[10px] size-6 text-white'/>
        <input className='search bg-gray rounded-[10px] border border-white w-full h-10 text-white pl-[44px]' placeholder='Search Contact'></input>
      </div>
      <IoIosAddCircle className='w-[72px] h-[72px] text-white' id='addAndClose' onClick={addContactClick}/>
    </div>
  );
}

export default SearchBar;
