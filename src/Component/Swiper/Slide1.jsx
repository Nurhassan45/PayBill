import React from 'react';
// import heroImg from '../../assets/photo-1521791055366-0d553872125f.avif'
import DescoImg from '../../assets/DescoImg.png'
import {motion} from 'framer-motion'
import { fadein } from '../../Varient';
const Slide1 = () => {
    return (
        <>
        <motion.div
        variants={fadein('left',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
        className=' w-full '>
        <section className="bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        DESCO Smart Prepaid <span className="text-blue-600">Metering</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
        Platform of Individual's Service Alternative (POISA)
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image or illustration */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <img
          src={DescoImg}
          alt="Hero Illustration"
          
        />
      </div>
    </section>
            {/* <img className='object-cover relative h-[500px] md:h-[600px] lg:h-[800px] w-full shadow-amber-50 mx-auto' src={heroImg} alt="" /> */}
        </motion.div>

        </>
    );
};

export default Slide1;