import React from "react";

const InputLog = ({ type = "", id = "", placeholder = "", value, onChange, className = "" }) => {
   return (
      <input
         className={`logs px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-400 ${className}`}
         type={type}
         id={id}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
   );
};

export default InputLog;
