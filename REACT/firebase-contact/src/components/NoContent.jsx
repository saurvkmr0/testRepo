import React from 'react'
import noContact from '../assets/Hands Contact.png';

const NoContent = () => {
  return (
    <div className="noContact flex items-center gap-[21.5px]">
        <img src={noContact} />
        <div className="font-bold text-xl gap-2 text-white">No Contact Found</div>
    </div>
    )
}

export default NoContent;