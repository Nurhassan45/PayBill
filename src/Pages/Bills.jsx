import React from 'react';
import { useLoaderData } from 'react-router';
import BillCard from '../Component/Cards/BillCard';

const Bills = () => {
    let data=useLoaderData();
    // console.log(data)
    return (
        <div>
           
            <div className="CardsContainer mt-4 grid grid-cols-1 gap-4">
            {
                data.map((itemData,index)=><BillCard key={index} itemData={itemData}></BillCard>)
            }
            </div>
           
        </div>
    );
};

export default Bills;