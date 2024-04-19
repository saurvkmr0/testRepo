import React from 'react'

function Button({...rest}) {
  return (
    <div>
        <button {...rest} className='font-normal' type={rest.type} style={{backgroundColor:rest.color, padding:"5px 0px", width:"80px", color:"white", borderRadius:"5px"}} >{rest.buttonText}</button>
    </div>
  )
}

export default Button;