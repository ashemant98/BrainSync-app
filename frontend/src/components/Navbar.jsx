import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BtnBrain from './BtnBrain';
import AddItemModal from './AddItemModal';
import Sharebrain from './Sharebrain';
import Viewbrain from './Viewbrain';
import BrainBtnGroup from './BrainBtnGroup';



const Navbar = () => {
   const [showModal, setShowModal] = useState(false);
   const [share, setShare] = useState(false);
   const [view, setView] = useState(false);


   return (
      <>
         <nav className="flex relative z-10 justify-between md:justify-end items-center px-4 md:px-5 py-3 bg-zinc-800 border-b border-zinc-800 border-b-orange-500">
            {/* Logo / Home Link */}
            <Link to="/" className="text-xl md:hidden sm:text-3xl py-1 font-semibold text-white w-10 sm:w-50">
               BrainSync
            </Link>

            {/* Button Group - Hidden on small screens */}
            <div className="flex BrainBtn">
               <BrainBtnGroup
                  className="hidden sm:flex"
                  onAdd={() => setShowModal(true)}
                  onShare={() => setShare(true)}
                  onView={() => setView(true)}
               />

               {/* Hamburger Icon - Only visible on small screens */}
               <button
                  className="md:hidden mt-1.5"
                  onClick={() => {
                     document.querySelector(".sidebar")?.classList.toggle("-translate-x-full");
                  }}
               >
                  <i className="fa-solid fa-bars text-2xl active:text-orange-500 cursor-pointer" />
               </button>
            </div>
         </nav>

         {/* AddItemModal appears when showModal is true */}
         {showModal && <AddItemModal closeModal={() => setShowModal(false)} />}
         {share && <Sharebrain onClose={() => setShare(false)} />}
         {view && <Viewbrain onClose={() => setView(false)} />}


      </>
   );
};

export default Navbar;
