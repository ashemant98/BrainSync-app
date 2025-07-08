import axios from 'axios';
import React, { useState, useContext } from 'react';

import { ContentContext } from '../context/contentContext';

const AddItemModal = ({ closeModal }) => {
   const [cType, setType] = useState("youTube");
   const [title, setTitle] = useState("");
   const [link, setLink] = useState("");
   const [note, setNote] = useState("")




   {/*contact not being used`````````````|*/}
   const { content, refreshContent } = useContext(ContentContext);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const newItem = {
         cType,
         title,
         link: cType !== "Notes" ? link : "",
         note: cType === "Notes" ? note : "",
      };


      if (newItem === "") return;

      const res = await axios.post('http://localhost:3000/api/v1/content/addContent',
         {
            title,
            cType,
            link,
            note  // This is the body
         },
         {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         }
      )

      console.log("Added Item:", res);
      refreshContent();
      // You can pass this data up via props or save it to context/localstorage
      closeModal();
   };

   return (
      <div className="modal-animation fixed inset-0 bg-black/10 backdrop-blur-[5px] flex justify-center items-center z-50 transition-opacity duration-300">

         <div className="bg-zinc-600 backdrop-blur-[20px] p-6 rounded-xl w-[93%] max-w-md  text-white border-2 border-orange-500 shadow-2xl shadow-black">

            <h2 className="text-3xl font-extrabold mb-4 text-orange-600">Add New {cType}</h2>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
               <select
                  className="p-2 border rounded outline-none border-orange-500 bg-transparent text-black font-semibold"
                  value={cType}
                  onChange={(e) => setType(e.target.value)}
               >
                  <option value="youTube"
                     className='text-black font-semibold'
                  >YouTube</option>
                  <option value="Twitter"
                     className='text-black font-semibold'
                  >Twitter</option>
                  <option value="Notes"
                     className='text-black font-semibold'
                  >Notes</option>
               </select>

               <input
                  type="text"
                  className="p-2 border rounded outline-none border-orange-500 bg-transparent text-black font-semibold placeholder:text-orange-300"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
               />

               {cType !== "Notes" ? (
                  <input
                     type="url"
                     className="p-2 border rounded outline-none border-orange-500  placeholder:text-orange-300 text-black"
                     placeholder="Paste link"
                     value={link}
                     onChange={(e) => setLink(e.target.value)}
                     required
                  />
               ) : (
                  <textarea
                     className="p-2 border rounded outline-none border-orange-500 h-50 placeholder:text-gray-500 text-black font-semibold"
                     placeholder="Write your note..."
                     value={note}
                     onChange={(e) => setNote(e.target.value)}
                     required
                  />
               )}

               <div className="flex justify-between mt-2">
                  <button type="submit" className="bg-orange-500 text-white px-7 py-2 rounded hover:cursor-pointer active:scale-97">Add</button>
                  <button type="button" className="bg-orange-600 text-white px-4 py-2 rounded hover:cursor-pointer active:scale-97" onClick={closeModal}>Cancel</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddItemModal;
