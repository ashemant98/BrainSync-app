import React from 'react'
import { useNavigate } from 'react-router-dom'


const BtnSignup = (className) => {

   const navigate = useNavigate();

   return (
      <button className={`bg-orange-500 hover:bg-rose-600 px-4 py-2 rounded-md font-semibold transition duration-200 hover:scale-103 hover:cursor-pointer  active:scale-99  ${className}`}
         onClick={() => navigate("/sign?form=signup")} >
         Sign up
      </button >
   )
}

export default BtnSignup