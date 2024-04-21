import React, { useContext, useEffect } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ToggleContext } from '../App';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useContext(ToggleContext);

  const addContactClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="searchBar flex w-full py-1 items-center gap-3">
      <div className="flex relative w-full ">
        <IoSearch className='absolute top-[8px] left-[10px] size-6 text-white'/>
        <input className='search bg-gray rounded-[10px] border border-white w-full h-10 text-white pl-[44px]' placeholder='Search Contact'></input>
      </div>
      <IoIosAddCircle className={`w-[72px] h-[72px] text-white ${isOpen ? 'open-add-contact' : 'close-add-contact'}`} onClick={addContactClick}/>
    </div>
  );
}

export default SearchBar;
