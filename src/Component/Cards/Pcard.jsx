import React from 'react';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import Item from './item';

const Pcard = ({data}) => {
    let{category,icon,items}=data;
    return (
        <div>
             <div className="max-w-sm  h-[300px] bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
    
          {category}<span>{icon}</span>
        </h2>
        <p className="text-gray-600 mb-4 ">
          {
            items.map(res=><Item res={res}></Item>)
          }
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
        </div>
    );
};

export default Pcard;