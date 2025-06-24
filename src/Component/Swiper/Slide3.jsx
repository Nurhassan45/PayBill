import React from 'react';
import TitasLogo from '../../assets/Link3.png'
const Slide3 = () => {
    return (
        <div>
            <div className=' w-full '>
                <section className="bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between">
                    {/* Text content */}
                    <div className="max-w-xl text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            <span className="text-blue-600 text-6xl">P</span>rominent IT and internet company in  <span className="text-blue-600">Bangladesh</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                        primarily known as an Internet Service Provider (ISP).
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
                    <div className=" md:w-1/2 mb-12 md:mb-0">
                        <img
                            src={TitasLogo}
                            alt="Hero Illustration"
                            className='h-[250px] '
                        />
                    </div>
                </section>
                {/* <img className='object-cover relative h-[500px] md:h-[600px] lg:h-[800px] w-full shadow-amber-50 mx-auto' src={heroImg} alt="" /> */}
            </div>
        </div>
    );
};

export default Slide3;