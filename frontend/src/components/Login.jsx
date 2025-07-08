import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
   const { login } = useAuth();
   const navigate = useNavigate();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMsg, setErrorMsg] = useState("");
   const [successMsg, setSuccessMsg] = useState("");
   const [loading, setLoading] = useState(false);

   const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      try {
         const res = await axios.post("http://localhost:3000/api/v1/user/login", {
            username,
            password,
         
         });

         console.log(res)
         const foundUser = res.data;
         console.log(foundUser.success) // ✅ fixed

         if(foundUser.success===true)
            {
         // You can also set success message
         setSuccessMsg("✅ Login Successful!");

         login(foundUser.username, foundUser.token); // `token` is from dummyjson
         console.log(foundUser.token)
         navigate("/dashboard");
      }
      else{
          
            console.error("signin failed", foundUser.message);
            alert(`signinFailed:   ${foundUser.message}`);
      }
      } catch (err) {
         console.error(err);
         setErrorMsg("Login failed: " + (err.response?.data?.message || err.message));
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="relative flex items-center justify-center px-4 py-1">
         <form
            onSubmit={submitHandler}
            className="bg-orange-500/20 px-10 py-10 w-full max-w-md rounded-xl flex flex-col gap-5 shadow-lg"
         >
            <h2 className="text-3xl font-bold text-white">Sign-In</h2>

            {/* Success or Error Messages */}
            {errorMsg && <p className="text-red-400 font-semibold">{errorMsg}</p>}
            {successMsg && <p className="text-green-400 font-semibold">{successMsg}</p>}

            {/* Username */}
            <div className="flex flex-col gap-1">
               <label htmlFor="username" className="text-white text-sm">
                  Username
               </label>
               <input
                  required
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="logs px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
               />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
               <label htmlFor="password" className="text-white text-sm">
                  Password
               </label>
               <input
                  required
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="logs px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
               />
            </div>

            {/* Submit Button */}
            <button
               type="submit"
               disabled={loading}
               className="cursor-pointer px-4 py-3 bg-orange-500/80 backdrop-blur-md text-white rounded-md font-semibold transition duration-200 hover:scale-105 shadow-md shadow-orange-500/40 active:scale-100 active:bg-orange-500 disabled:opacity-50"
            >
               {loading ? "Signing in..." : "Sign in"}
            </button>
         </form>
      </div>
   );
};

export default Login;
