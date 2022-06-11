import React from 'react';
import ReactjsLogo from '../../Images/Icon/react-icon.png'
import NodejsLogo from '../../Images/Icon/Node.js.png'
import MongodbLogo from '../../Images/Icon/mongodb.svg'
import ExpressjsLogo from '../../Images/Icon/Express.js.png'

const SkillLogo = () => {
    return (
        <div className='bg-black bg-opacity-20 md:mx-10 rounded-md'>
        <div className='md:container mx-auto flex justify-evenly items-center my-3 py-3 '>
            <div className='flex flex-col justify-center items-center'>
                <img src={ReactjsLogo} alt="" className='filter-img md:w-32 w-20 md:opacity-40 hover:opacity-100 duration-500'/>
                <h4 className='md:text-xl font-semibold text-gray-800'>React.js</h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={NodejsLogo} alt="" className='filter-img md:w-32 w-20 md:opacity-40 hover:opacity-100 duration-500'/>
                <h4 className='md:text-xl font-semibold text-gray-800'>Node.js</h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={MongodbLogo} alt="" className='filter-img md:w-32 w-20 md:opacity-40 hover:opacity-100 duration-500'/>
                <h4 className='md:text-xl font-semibold text-gray-800'>MongoDB.js</h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={ExpressjsLogo} alt="" className='filter-img md:w-32 w-20 md:opacity-40 hover:opacity-100 duration-500'/>
                <h4 className='md:text-xl font-semibold text-gray-800'>Express.js</h4>
            </div>
        </div>
        </div>
    );
};

export default SkillLogo;