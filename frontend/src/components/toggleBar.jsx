import React, { useState } from "react";

const Navbar = () => {
   const [showSidebar, setShowSidebar] = useState(false);

   const toggleSidebar = () => {
      setShowSidebar((prev) => !prev);
   };

   return (
      <>
         <button
            className="md:hidden"
            onClick={toggleSidebar}
         >
            <i className="fa-solid fa-bars text-2xl active:text-orange-500 cursor-pointer" />
         </button>

         <SidebarDashboard showSidebar={showSidebar} />
      </>
   );
};
F