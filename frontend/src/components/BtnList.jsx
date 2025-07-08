import React from 'react'

const BtnList = ({ value = "", className = "", onClick }) => {
   return (
      <button className={` py-3 rounded-md w-[95%] hover:cursor-pointer active:opacity-70 ${className} border-b border-white hover:scale-105`}
      onClick={onClick}
      >{value}</button>
   )
}

export default BtnList