import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { GrUpdate } from 'react-icons/gr';
import UpdatePFrom from '../../Pages/UpdatePFrom';

const ProfileCard = () => {
    let {user}=use(AuthContext);
    let [profileData,setProfileData]=useState(false);
    let updateP=()=>{
        
       setProfileData(!profileData)
    }
    console.log(user)
    return (
        <div className='flex justify-center items-center flex-col'>
            <img className='relative rounded-full  w-[250px] h-[250px]' src={user?.photoURL} alt="" />
            <h1 className='text-2xl font-bold text-blue-500'>{user.displayName}</h1>
            <h1 className='text-2xl font-bold text-blue-500'>{user.email}</h1>
            <div className='mt-4 bg-blue-400  top-[30%] right-[30%] rounded-full cursor-pointer p-4 flex justify-center items-center gap-2 text-white' onClick={()=>updateP()}><h1>Click here for update</h1><GrUpdate size={20} /></div>
            {
            profileData&&<UpdatePFrom setProfileData={setProfileData}></UpdatePFrom>
            }
        </div>
    );
};

export default ProfileCard;