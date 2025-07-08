import React from 'react'

const BGimg = (className) => {
   return (
      <div className={`w-full max-w-md mx-auto p-1 ${className}`}>
         <img
            src="bgimg.png"
            alt="Background"
            className="w-full h-full object-cover"
         />
      </div>
   )
}

export default BGimg