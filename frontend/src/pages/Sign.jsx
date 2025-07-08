import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Sign = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const formType = searchParams.get("form");
   const navigate = useNavigate();

   const [toggle, setToggle] = useState(false); 

   
   useEffect(() => {
      if (formType === 'signup') {
         setToggle(true);
      } else {
         setToggle(false); // default to login
      }
   }, [formType]);

   const toggleForm = () => {
      const newForm = toggle ? "login" : "signup";
      setSearchParams({ form: newForm });
      setToggle(!toggle);
   };

   return (
      <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 -z-10 bg-[url('BGlog.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
         </div>

         <div className="z-10 w-full max-w-md px-4">
            {toggle ? <Signup /> : <Login />}
            <p className="text-white text-center mt-2">
               {toggle ? "Already have an account?" : "Don't have an account?"}{" "}
               <button
                  className="underline text-orange-400 cursor-pointer hover:text-green-600"
                  onClick={toggleForm}
               >
                  {toggle ? "Log in" : "Sign up"}
               </button>
            </p>
         </div>
      </div>
   );
};

export default Sign;
