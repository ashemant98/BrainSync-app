import axios from 'axios';
import React, { useState } from 'react';

const Sharebrain = ({ onClose }) => {
   const [shareLink, setShareLink] = useState(null);

   const handleGenerate = async() => {

      const res = await axios.post('http://localhost:3000/api/v1/content/shareLink',
                  {
           
            share:true
            
              // This is the body
         },
         {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         }
      
      )
      console.log(res)
      setShareLink(res.data.shareLink);
   };

   const handleDelete = async() => {

      const res = await axios.post('http://localhost:3000/api/v1/content/shareLink',
                  {
           
            share:false
            
   
         },
         {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         }
      
      )
      console.log(res)
      setShareLink("Link removed successfully");
   };

   return (
      <div className="modal-animation fixed inset-0 bg-black/10 backdrop-blur-[5px] flex justify-center items-center z-50 transition-opacity duration-300">
         <div className="bg-zinc-600 backdrop-blur-[20px] p-6 rounded-xl w-[93%] max-w-md  text-white border-2 border-orange-500 shadow-2xl shadow-black">
            <h2 className="text-xl font-bold mb-4 text-orange-500">Share Your Brain</h2>

            {/* toggle between generate and delete buttons */}

            {shareLink ? (
               <div className="space-y-4">
                  <div className='flex gap-4 justify-start'>

{/* print link here in p tag */}
                  <p className="break-all text-blue-600 underline">{shareLink}</p>
                  <i onClick={() => navigator.clipboard.writeText(shareLink)}
                  className="fa-solid fa-copy active:text-blue-600 text-md cursor-pointer mt-1"/>

                  </div>
                  <button
                     onClick={handleDelete}
                     className="w-full bg-red-500 text-white px-4 py-2 rounded"
                  >
                     Delete Link
                  </button>
               </div>
            ) : (
               <button
                  onClick={handleGenerate}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded"
               >
                  Generate Link
               </button>
            )}

            <button
               onClick={onClose}
               className="mt-4 my-auto underline text-white hover:text-red-500 px-4 py-2 rounded"
            >
               Close
            </button>
         </div>
      </div>
   );
};

export default Sharebrain;
