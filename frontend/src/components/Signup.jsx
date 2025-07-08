import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const submitHandler = async (e) => {
      e.preventDefault();
   
      try {
         const res = await axios.post('http://localhost:3000/api/v1/user/signup', {
           
          
          username, password 
           
         });
         
         console.log(res)
        
         

         
   
         if (res.data.success===true) {
            console.log("signin  successful", res);
            
            alert("sign Successful");
            <Login></Login>
            // You can store token: localStorage.setItem('token', data.token);
         } else {
            console.log(res.data.message)
            console.error("signin failed", res.data.message);
            alert(`signinFailed:`);
         }
   
      } catch (error) {
         console.error("Error during login", error);
         alert("Something went wrong! Please try again.");
      }
   
      setUsername("");
      setPassword("");
   };
   

   return (
      <div className="relative flex items-center justify-center overflow-hidden">

         {/* ✅ Form Card */}
         <form
            className="bg-orange-500/20 px-10 py-10 md:w-full rounded-xl flex flex-col gap-4 shadow-lg"
            onSubmit={submitHandler}
         >
            <h2 className="text-left text-3xl font-bold text-white">Sign-Up</h2>

            <div className="flex flex-col gap-0.5">
               <label htmlFor="username" className="text-left pl-2 text-white">Username</label>
               <input
                  className="logs"
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </div>

            <div className="flex flex-col gap-0.5">
               <label htmlFor="email" className="text-left pl-2 text-white">Email</label>
               <input
                  className="logs"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>

            <div className="flex flex-col gap-0.5">
               <label htmlFor="password" className="text-left pl-2 text-white">Password</label>
               <input
                  className="logs"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>

            <div className="flex flex-col gap-0.5">
               <label htmlFor="confirmPassword" className="text-left pl-2 text-white">Confirm Password</label>
               <input
                  className="logs"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </div>

            <button className="cursor-pointer px-4 py-3 bg-orange-500/80 backdrop-blur-md text-white rounded-md font-semibold transition duration-200 hover:scale-105 shadow-md shadow-orange-500/40">
               Sign up
            </button>
            </form>
      </div>
   );
};

export default Signup;
