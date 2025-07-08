import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import List2 from './List2';

const Viewbrain = ({ onClose }) => {
   const [viewLink, setViewLink] = useState('');
   const [showData , setShowData] = useState(false)
   const [data , setData] =useState([])

   const [userName ,  setUserName] = useState('')


   const handleSubmit = async(e) => {
      e.preventDefault();

      const res  = await axios.get(`http://localhost:3000/api/v1/content/viewContent/${viewLink}`,{
       
      }).then((res)=>{
           
           console.log(res)
          if(res.data.success){
            setData(()=>res.data.content)
            setShowData(()=>true)

            setUserName(()=>res.data.username)
          
            
          }
      })

    
   
    
      // Extract the share code from the link

      
      
       
   


      
   };

   return (

      
<>
      
      {showData? 
      <div className='viewBrainContent absolute  z-40 top-0  left-0 p-5 bg-zinc-600 h-full w-full '>
         {
            (showData)&&
               <List2 content={data } onClose={onClose} name={userName}></List2>
         }
      </div>:<div className="modal-animation fixed inset-0 bg-black/10 backdrop-blur-[5px] flex justify-center items-center z-50 transition-opacity duration-300">
         <div className="bg-zinc-600 backdrop-blur-[20px] p-6 rounded-xl w-[93%] max-w-md text-white border-2 border-orange-500 shadow-2xl shadow-black">
            <h2 className="text-xl font-bold mb-4 text-orange-500">View Brain</h2>

            <form
               onSubmit={handleSubmit}
               className="flex gap-4 flex-col sm:flex-row justify-start items-center"
            >
               <input
                  type="text"
                  placeholder="Paste shared link here..."
                  value={viewLink}
                  onChange={(e) => setViewLink(e.target.value)}
                  className="w-full p-2 rounded text-black placeholder:text-orange-300 outline-orange-500"
               />
               <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                     type="submit"
                     className="bg-orange-500 text-white px-4 py-2 rounded"
                  > View </button>
                  <button
                     onClick={onClose}
                     type="button"
                     className="underline text-white hover:text-red-500 px-4 py-2 rounded"
                  > Close </button>
               </div>
            </form>
         </div>
      </div>
}

    

</>


   );
};

export default Viewbrain;
