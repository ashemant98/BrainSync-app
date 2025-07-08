import React, { useState } from 'react'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BtnBrain from './BtnBrain'
import BtnList from './BtnList'
import { Link } from 'react-router-dom';
import AddItemModal from './AddItemModal';
import Sharebrain from './Sharebrain';
import Viewbrain from './Viewbrain';
import BrainBtnGroup from './BrainBtnGroup';

const SidebarDashboard = () => {

   const [showModal, setShowModal] = useState(false);
   const [share, setShare] = useState(false);
   const [view, setView] = useState(false);


   const { user, logout } = useAuth();
   const navigate = useNavigate();

   const handleLogout = () => {
      logout();
      navigate("/");
   };

   return (
      <>
         <div className="sidebar fixed md:flex flex-col  z-15 top-0 left-0 h-screen items-center md:w-44 w-55 bg-zinc-800 text-white transform -translate-x-full transition-transform duration-300 ease-in-out md:translate-x-0">
            <div className='flex flex-col mx-auto w-11/12'>
               <nav className='flex flex-col w-full'>

                  {/* //logo */}
                  <Link to="/" className=" text-[1.5rem] rounded-md text-center md:text-3xl my-3.5  font-semibold text-white">
                     BrainSync
                  </Link>

                  <ul className=''>
                     {/* <li className="flex flex-col items-center space-y-1 sm:hidden">
                     <BtnBrain value='Add Brain' className=' py-2 rounded-md w-[95%]' onClick={() => setShowModal(true)} />
                     <BtnBrain value='Share Brain' className=' py-2 rounded-md w-[95%]' />
                     <BtnBrain value='View Brain' className=' py-2 rounded-md w-[95%]' />
                  </li> */}
                     <BrainBtnGroup
                        className="flex flex-col items-center w-full sm:hidden "
                        onAdd={() => setShowModal(true)}
                        onShare={() => setShare(true)}
                        onView={() => setView(true)}
                     />

                  </ul>

                  <ul >
                     <li className=' flex flex-col items-center '>
                        <BtnList value='All Links' className='' />
                        <BtnList value='YouTube Links' className='' />
                        <BtnList value='X links' className='' />
                        <BtnList value='Notes' className='' />
                        <BtnList
                           value="To Do List"
                           className="lg:hidden"
                           onClick={() => {
                              document.querySelector(".todo")?.classList.toggle("translate-x-full");
                           }}
                        />


                        <button
                           onClick={handleLogout}
                           className="mt-10 bg-rose-700 py-3 rounded-md w-[95%]  active:bg-zinc-300 ">Logout</button>
                     </li>
                  </ul>
               </nav>

            </div>
         </div>
         {showModal && <AddItemModal closeModal={() => setShowModal(false)} />}
         {share && <Sharebrain onClose={() => setShare(false)} />}
         {view && <Viewbrain onClose={() => setView(false)} />}
      </>
   )
}

export default SidebarDashboard

