import React from 'react';
import WasaImg from '../../assets/cwasa.png'
const Slide2 = () => {
    return (
        <div>
             <div className=' w-full '>
                    <section className="bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-center">
                  {/* Text content */}
                  <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    <span className="text-blue-600 text-6xl">P</span>rimary organization responsible for managing water supply, sewerage, and <span className="text-blue-600">storm water drainage. </span>
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
                    <img className='h-[250px] mx-auto w-[330px]'
                      src={WasaImg}
                      alt="Hero Illustration"
                      
                    />
                  </div>
                </section>
                        {/* <img className='object-cover relative h-[500px] md:h-[600px] lg:h-[800px] w-full shadow-amber-50 mx-auto' src={heroImg} alt="" /> */}
                    </div>
            
        </div>
    );
};

export default Slide2;