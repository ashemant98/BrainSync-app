import React, { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import SidebarDashboard from '../components/SidebarDashboard';
import Footer from '../components/Footer';
import List from '../components/List';

import Todo from '../components/Todo';
import { ContentProvider } from '../context/contentContext';
// import Todo from '../components/Todo';

const Dashboard = () => {




  return (

    <ContentProvider>
    <div className="">
      <Navbar />
      <SidebarDashboard />
      <div className="relative flex justify-center h-full overflow-y-auto">
      <List  />
      <Todo/>
      </div>
      
    </div>
    </ContentProvider>
  )
}

export default Dashboard