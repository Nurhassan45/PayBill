import React, { use } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { motion } from "motion/react"

import { auth } from '../../Firebase/Firebase_init';
import { AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router';

const HaederCard = ({show}) => {
      let navigate=useNavigate();
    
    let {user,amountTaak}=use(AuthContext);
    
        // let {displayName,email}=user

    
    // console.log(user)
    let handleLogout=()=>{
             signOut(auth)
             .then(()=>{alert('logOut');
                navigate('/')
             }
            )
        }
//   {show ? <motion.div key="box" exit={{ opacity: 0 }} /> : null}
    return (
        <AnimatePresence>
       
       { user && <><motion.div key="box" exit={{ opacity: 0 }}  className={`bg-white text-black border-1 border-black rounded-2xl p-4 justify-center gap-2 flex z-10 absolute transition duration-700 ${show||'top-[80%] grid'} right-0 top-[-150%] duration-700`}>
        <h1 className='text-xl border-b-1 font-bold'>{user?.displayName}</h1>
        <p><span className='font-bold '>Email: </span>{user?.email}</p>
        <p className='font-bold'>{amountTaak} Taka</p>
 <Link  onClick={handleLogout}> <div className='btn btn-primary mx-auto w-full'>Logout</div>  </Link>

        {/* <Link  >Logout</Link> */}
    </motion.div>

    </>}
</AnimatePresence>

       
    );
};

export default HaederCard;