import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import HaederCard from '../Cards/HaederCard';
import { LiaAmazonPay } from 'react-icons/lia';
import { motion } from "motion/react"

import './header.css'
const Navbar = () => {
  let{user}=use(AuthContext);
  // let navigate=useNavigate();
  let [show,setShow]=useState(true);
  let handleHeaderCard=()=>{
    setShow(!show);
  }
  // console.log(user)
    let links=<>
    
      <motion.li  whileHover={{scale:1.2,textShadow:'1px 1px 10px skyblue'  
        ,boxShadow:'2px 2px 20px 2px blue'}}
        whileTap={{scale:0.8}} className='font-bold'><NavLink to={'/'}>Home</NavLink></motion.li>
      <li className='mx-[10px] font-bold'><NavLink to={'/bills'}>Bills</NavLink></li>
      <li className='font-bold'><NavLink to={'/Profile'}>Profile</NavLink></li>
       
    
    </>
    return (
        <div className='sticky top-0 z-20'>
            <motion.div layoutId="underline" className="navbar  bg-base-100 shadow-sm relative lg:w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex justify-center items-center'>
    <div className='text-primary'>
    <LiaAmazonPay size={40}/>
    </div>
    <a className="btn btn-ghost text-xl text-primary">Pay Bills</a>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end mr-4">
    {/* <Link to={'/login'}>Login</Link> */}
  </div>
  {
    user ? <>
    <img onClick={handleHeaderCard} className='w-12 cursor-pointer border-2 rounded-full' src={user.photoURL} alt="" />
    </>:<>
    <div className='flex justify-center items-center gap-4 font-bold '>
    <Link className='hover:bg-gray-100 p-4' to={'/register'}>Register</Link>

    <Link className='hover:bg-gray-100 p-4' to={'/login'}>Login</Link>
    </div>
    </> 
  }
  {
        show?'':<>
     
        <HaederCard show={show}></HaederCard>
        
        </>
       }
</motion.div>
        </div>
    );
};

export default Navbar;