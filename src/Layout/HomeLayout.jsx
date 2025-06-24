import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
// import AuthProvider from '../context/AuthProvider';

const HomeLayout = () => {
    return (
        <>
        <Navbar></Navbar>
       
        <div className='md:w-11/12 mx-auto'>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
      
        
        </>
    );
};

export default HomeLayout;