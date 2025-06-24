import React from 'react';
import SwiperCom from '../Component/Swiper/Swiper';
import { useLoaderData } from 'react-router';
import PolicyCards from '../Component/Cards/PolicyCards';
import About from './About';
// import Footer from '../Footer/Footer';
import NewsInformatin from './NewsInformatin';
import Testmonial from '../Component/Cards/Testmonial';

const Home = () => {
    let PolicyData=useLoaderData();
    // console.log(PolicyData);
    return (
       <>
       <div className=''>
        
       <SwiperCom></SwiperCom>

      
       <PolicyCards PolicyData={PolicyData}></PolicyCards>
       {/* <h1>Name: {import.meta.env.VITE_name || 'Not found'}</h1> */}
       <About></About>
       <NewsInformatin/>
       <Testmonial></Testmonial>
       {/* <Footer></Footer> */}
       </div>
       

       </>
    );
};

export default Home;