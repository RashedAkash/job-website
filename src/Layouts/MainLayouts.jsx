import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className=' max-w-5xl mx-auto overflow-hidden'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;