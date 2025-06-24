import React from 'react';
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'
import { fadein } from '../../Varient';
const BillCard = ({itemData}) => {
    // console.log(itemData)
    let {id,due_date,amount,bill_name,organization,category_icon,organization_logo}=itemData
    let navigate=useNavigate();
    let handleDetails=()=>{
        navigate(`/detailsCard/${id}`) 
    }
    return (
        <>
         <motion.div
           variants={fadein('right',0.3)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{once:false,amount:0.7}}
         
         className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200 flex">
      {/* Left Column - Logo */}
      <div className="w-1/3 flex flex-col items-center justify-between">
        <div className="flex items-center justify-center h-32 w-32 bg-blue-100 rounded-full">
          {/* <span className="text-3xl font-bold text-blue-600">NESCO</span> */}
          <img src={organization_logo} alt="" />
        </div>
        <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={category_icon} alt="" />
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="w-2/3 pl-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-500">{organization}</h2>
          <p className="text-gray-600 mb-4 ">{bill_name}</p>
          
          <div className="mb-2">
            <p className="text-lg font-semibold text-gray-700">
              Amount: <span className="text-blue-600">{amount} BDT</span>
            </p>
            <p className="text-sm text-gray-500">
              Due Date: {due_date}
            </p>
          </div>
        </div>

        <div>
          <button onClick={handleDetails} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200">
            See Details
          </button>
          
        </div>
      </div>
    </motion.div>
        </>
    );
};

export default BillCard;