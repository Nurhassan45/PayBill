import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';

const UpdatePFrom = ({setProfileData}) => {
    let {updateProfil,setUser,user}=use(AuthContext);
    let handleUpdate=(e)=>{
        e.preventDefault();
        let name=e.target.name.value;
        let photo=e.target.photoUrl.value;
        console.log(name,photo);
        updateProfil({displayName:name,photoURL:photo})
        .then(()=>{
          setUser({...user,displayName:name,photoURL:photo})
        })
    }
    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Updated Name:</label>
          <input type="text" name='name' className="input" placeholder="Enter Update User Name!" />
          <label className="label">Updated Photo Url:</label>
          <input type="text" name='photoUrl' className="input" placeholder="Enter Update Photo Url" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button type='submit' className="btn btn-primary mt-4">Submit</button>
          <button onClick={()=>setProfileData(false)} className="btn btn-neutral mt-4">Cancel</button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdatePFrom;