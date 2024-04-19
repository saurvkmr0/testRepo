import React from 'react'

const KeypadBtn = ({btnNum,onClick,isSelect}) => {
  // console.log("passed: ",isSelect);
  return (
    <div>
      <button className={isSelect?'keypad_btn_selected':'keypad_btn_unselect'} onClick={onClick}>{btnNum}</button>
    </div>
  )
}

export default KeypadBtn;