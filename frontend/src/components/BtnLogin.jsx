import React from 'react'
import { useNavigate } from 'react-router-dom'



const BtnLogin = (className) => {
   
   const navigate = useNavigate();

   return (
      <button className={`bg-gray-600 hover:bg-gray-500 hover:cursor-pointer px-4 py-2 rounded-md font-semibold transition duration-200 hover:scale-103 active:scale-99 ${className}`}
         onClick={() => navigate("/sign?form=login")}>
         Sign in
      </button>
   )
}

export default BtnLogin