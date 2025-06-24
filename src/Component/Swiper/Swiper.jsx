import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SwiperCom = () => {
    return (
        <>
        <Swiper
        className='relative group h-[600px] md:h-[550px] lg:h-[500px]'
        navigation={
            {
                prevEl:'.button-next-slide',
                nextEl:'.button-prev-slide',
                
            }
        }
        // height={600}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        >
            <SwiperSlide><Slide1></Slide1></SwiperSlide>
            <SwiperSlide><Slide2></Slide2></SwiperSlide>
            <SwiperSlide><Slide3></Slide3></SwiperSlide>
            <div className='absolute z-20 button-next-slide group-hover:left-0 -left-12   p-4 rounded-2xl   top-[40%]  text-white grid place-items-center bg-blue-400'><FaArrowLeft /></div>
            <div className='absolute  z-20 p-4 button-prev-slide rounded-2xl top-[40%] group-hover:right-0  -right-12  text-white grid place-items-center bg-blue-400'><FaArrowRight /></div>
        </Swiper>
        </>
    );
};

export default SwiperCom;