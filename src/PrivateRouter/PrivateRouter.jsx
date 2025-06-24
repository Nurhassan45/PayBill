import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Component/Loading/Loading';

const PrivateRouter = ({children}) => {
   let {user,loading}=use(AuthContext);
   let location=useLocation();
   // console.log(location)
   if(loading)
   {
      return <Loading></Loading>
   }
   if(user)
   {
    return children;
   }
   else
   {
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
   }
};

export default PrivateRouter;