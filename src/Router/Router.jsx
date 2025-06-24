import { createBrowserRouter } from "react-router";
// import Test from "./Test";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Bills from "../Pages/Bills";
import Profile from "../Pages/Profile";
import Login from "../SignSection/Login";
import Regiester from "../SignSection/Regiester";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import DetailsBillCard from "../Component/Cards/DetailsBillCard";
import HaederCard from "../Component/Cards/HaederCard";
// import LogOut from "../SignSection/LogOut";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {
            index:true,
            Component:Home,
            hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
            loader:()=>fetch('/Policy.json')

        },
        {
            path:'/bills',
            hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
            loader:()=>fetch('/bills.json'),
            element:<PrivateRouter><Bills></Bills></PrivateRouter>
        },
        {
            path:'/Profile',
            element:<PrivateRouter><Profile></Profile></PrivateRouter>
        },
        {
            path:'/login',
            Component:Login,
        },
        {
            path:'/register',
            Component:Regiester
        },
        {
            path:'/detailsCard/:id',
            hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
            loader:()=>fetch('/bills.json'),
            Component:DetailsBillCard
        },
        {
            path:'/headerCard',
            Component:HaederCard,
        }
       
      ]
    },
   

  ]);