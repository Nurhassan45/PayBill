import React from 'react';
import Pcard from './Pcard';
import {motion} from 'framer-motion'
import { fadein } from '../../Varient';
const PolicyCards = ({PolicyData}) => {
    // console.log(PolicyData)
    return (
        <>
        <h1 className='text-center underline mx-auto text-3xl font-bold text-primary mt-4 lg:mt-12 mb-4'>Policy</h1>
        <motion.dev
        variants={fadein('up',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className='flex flex-wrap justify-center items-center gap-4 md:gap-4 lg:gap-8  mx-auto'>
            {
                PolicyData.map(data=><Pcard data={data}></Pcard>)
            }
        </motion.dev>
        </>

    );
};

export default PolicyCards;