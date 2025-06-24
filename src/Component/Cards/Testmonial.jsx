import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
// import { fadein } from '../../Varient';
const Testmonial = () => {
    let [testimonials,setTestimoials]=useState([]);
    useEffect(()=>{
        fetch('testomonial.json').then(res=>res.json()).then(data=>setTestimoials(data))
    },[])
    console.log(testimonials)
    return (
        <motion.div
        
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">What Our Users Say</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Blue header strip */}
                <div className="bg-blue-600 h-3 w-full"></div>
                
                {/* Card content */}
                <div className="p-6 flex-grow">
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote with highlighted text */}
                  <p className="text-gray-700 mb-6 text-lg italic">
                    {testimonial.quote.split(testimonial.highlight).map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < testimonial.quote.split(testimonial.highlight).length - 1 && (
                          <span className="text-blue-600 not-italic font-semibold">
                            {testimonial.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                
                {/* Author footer */}
                <div className="px-6 pb-6 pt-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
};

export default Testmonial;