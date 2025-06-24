import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const DetailsBillCard = () => {
    let {id}=useParams();
    let {idData,setIdData,setAmount,amountTaak}=use(AuthContext);
  let [icon,setIcon]=useState(false);

    let data=useLoaderData();
    // let [show,setShow]=useState(false);
    let navigate =useNavigate();
  //  console.log(data);
  
    let [userData,setUserData]=useState([]);
    let {due_date,amount,bill_name,organization,category_icon,organization_logo}=userData;
// console.log(userData)
    // console.log(id,data);
    let convertedAmount=parseInt(amount);
    // console.log(convertedAmount)
    useEffect(()=>{
        let SingleData=data?.find(res=>res.id==id);
        setUserData(SingleData);
    },[data,id])
    let handlePayBill=()=>{
      let sId=idData.find(res=>res==id)
     if(sId)
     {
      

      toast.warn('You already Pay the Bill!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce
        });
     }
     else
      {
        setIcon(true);
        toast.success('Pay SuccesFully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => navigate('/bills')
          });
        setAmount(amountTaak-convertedAmount)
      setIdData([...idData,id]);
      setTimeout
      
      // navigate('/bills');
      }

    }
    console.log(idData)
    return (
       <>
             <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200 flex">
      {/* Left Column - Logo */}
      <div className="w-1/3 flex flex-col items-center justify-between">
        <div className="flex items-center justify-center h-32 w-32 bg-blue-100 rounded-full">
          {/* <span className="text-3xl font-bold text-blue-600">NESCO</span> */}
          <img src={organization_logo} alt="" />
        </div>
        <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={category_icon} alt="" />
        </div>
        {
          icon&&<h1>✅ </h1>
          

        }
        <ToastContainer/>
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
          <button onClick={handlePayBill}  className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200">
           pay Bill
          </button>
          
        </div>
      </div>
    </div>
       </>
    );
};

export default DetailsBillCard;