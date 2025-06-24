import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase_init';
import { toast, ToastContainer } from 'react-toastify';

const Regiester = () => {
    let [error,setError]=useState(" ");
    let navigate=useNavigate()
    let {handleRegiester,setUser,user,updateProfil}=use(AuthContext)
  let {state}=useLocation();

    let handleRegiesterFrom=(e)=>{
        e.preventDefault();
        // let from=e.target;
        let name=e.target.name.value;
        let photoUrl=e.target.photoUrl.value;
        // console.log(name,photoUrl)
        let email=e.target.email.value;
        let password=e.target.password.value;
        if(!/[A-Z]/.test(password))
        {
            return setError('Password Must be UpperCase!')
        }
        if(!/[a-z]/.test(password))
        {
            return setError('Password Must be LowerCase!')
        }
        if(password.length<6)
        {
            return setError('Password Must be greter then 6 character!')

        }
        setError('');
        // let data ={
// console.log(user);
        // }
        handleRegiester(email,password)
        .then(()=>{
          // console.log(res)
          updateProfil({displayName:name,photoURL:photoUrl})
          .then(()=>{
            setUser({...user,displayName:name,photoURL:photoUrl})
          })
          navigate('/')
        })

        .catch(err=>toast(err.message));
    }

     let provider=new GoogleAuthProvider();
            let handleWithGoogle=()=>{
                signInWithPopup(auth,provider)
                .then(()=>{
                  {
                    state?navigate(`${state}`):navigate('/')
                  }
                })
            }
    return (
       <>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
   <div>
    <ToastContainer></ToastContainer>
    <h1 className='text-4xl text-primary font-bold'>Register Now!</h1>
   </div>
    <div className="card bg-base-100   shrink-0 shadow-2xl">
      <div className="card-body w-[350px] mx-auto">
        <form onSubmit={handleRegiesterFrom} className="fieldset">
        <label className="label">Name</label>
        <input type="text" name='name' required className="input" placeholder="Name" />
        <label className="label">Photo Url</label>
        <input type="text" name='photoUrl'required className="input" placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' required className="input" placeholder="Password" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button type='submit' className="btn   btn-primary mt-4 ">Register</button>
          <p className='text-[13px] mt-4 text-red-800'>{error}</p>
          <button onClick={handleWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='text-[13px]'>If you have an account then go to ? <span  className='text-[15px] hover:underline text-emerald-600'><Link to={'/login'}>Login</Link></span></p>

        </form>
      </div>
    </div>
  </div>
</div>
       </>
    );
};

export default Regiester;