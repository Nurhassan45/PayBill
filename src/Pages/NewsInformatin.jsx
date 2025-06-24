import React from 'react';
import pic1 from '../../src/assets/photo-1521791055366-0d553872125f.avif'
import pic2 from '../../src/assets/photo-1521791136064-7986c2920216.avif'
import pic3 from '../../src/assets/photo-1550565118-3a14e8d0386f.avif'
import pic4 from '../../src/assets/photo-1554224155-6726b3ff858f.avif'
const NewsInformatin = () => {
    return (
        <div className=''>
            <h1 className='text-center mx-auto text-3xl font-bold text-primary underline'>Information</h1>
            {/* <h1>Your News and Information</h1> */}
            <div className='cardContainer flex flex-wrap justify-center my-4 md:my-8 lg:my-12 items-center gap-4 md:gap-4 lg:gap-8  mx-auto'>
                <div className='w-full md:w-[45%] lg:w-[23%] mx-auto flex flex-col justify-center items-center'>
                    <img className='h-[200px] rounded-2xl w-[300px]' src={pic1} alt="" />
                    <p>Relief Fund In Place At Alister Bank: How You Can Help</p>
                </div>

                <div className='w-full md:w-[45%] lg:w-[23%] mx-auto flex flex-col justify-center items-center'>
                    <img className='h-[200px] rounded-2xl w-[300px]' src={pic2} alt="" />
                    <p>When NOT Using Credit Cards Can Hurt You</p>
                </div>

                <div className='w-full md:w-[45%] lg:w-[23%] mx-auto flex flex-col justify-center items-center'>
                    <img className='h-[200px] rounded-2xl w-[300px]' src={pic3} alt="" />
                    <p>Keep Your Children Safe from Financial Fraud</p>
                </div>

                <div className='w-full md:w-[45%] lg:w-[23%] mx-auto flex flex-col justify-center items-center'>
                    <img className='h-[200px] rounded-2xl w-[300px]' src={pic4} alt="" />
                    <p>You’re Making More Money. Here’s How to Save</p>
                </div>
            </div>
        </div>
    );
};

export default NewsInformatin;