import React from 'react';

const BtnBrain = ({ className = "", value = "", onClick = () => { } }) => {
   return (
      <button className={`px-3 py-2 rounded-md font-semibold text-white active:text-gray-300 active:scale-98 hover:bg-zinc-700 ${className}`}
         onClick={onClick}
         >
         {value}
      </button>
   );
};

export default BtnBrain;
