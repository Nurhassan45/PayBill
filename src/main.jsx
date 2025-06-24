import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router";
import './index.css'
// import App from './App.jsx'
import { router } from './Router/Router.jsx';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
