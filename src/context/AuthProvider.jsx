import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase_init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { Navigate, } from 'react-router';
export let AuthContext=createContext();
const AuthProvider = ({children}) => {
    let[user,setUser]=useState(null);
      let [idData,setIdData]=useState([]);
      let[loading,setLoading]=useState(true);
      let[amountTaak,setAmount]=useState(10000);
   
    let handleLogin=(email,password)=>{
        // alert();
       return signInWithEmailAndPassword(auth,email,password)

    }
    // let handleNav=()=>{
    //     return <Navigate to={'/'}></Navigate>
    // }
    let handleLogout=()=>{
         signOut(auth)
         .then(()=>alert('logOut'))
    }
    // let provider=new GoogleAuthProvider();
    // let handleWithGoogle=()=>{
    //     signInWithPopup(auth,provider)
    //     .then(()=>{
    //         navigate('/')
    //     })
    // }
    useEffect(()=>{
        let unSbscribe=onAuthStateChanged(auth,res=>{
           setUser(res);
           setLoading(false);
        })
        return ()=> unSbscribe();
    },[])

    let handleRegiester=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    let updateProfil=(displayName)=>{
        return updateProfile(auth.currentUser,displayName)
    }
    let data={
        handleLogin,
        user,
        amountTaak,
        setAmount,
        idData,
        // handleWithGoogle,
        setIdData,
        loading,
        setLoading,
        handleLogout,
        setUser,
        handleRegiester,
        updateProfil,
    }
    return <AuthContext value={data}>{children}</AuthContext>
};

export default AuthProvider;