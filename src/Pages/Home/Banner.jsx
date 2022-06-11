import React from 'react';
import ReactTyped from 'react-typed';
import Button from '../../Components/Button/Button';
import myPic from '../../Images/Rayhan-removebg-preview.jpg'
const Banner = () => {
  // clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
    return (
        <div className="h-[93vh] flex justify-center items-center flex-col bg-[#112B3C]" style={{"clipPath": 'polygon(50% 0%, 100% 0, 100% 43%, 100% 78%, 100% 100%, 73% 82%, 0 100%, 0% 43%, 0 0);'}}>
      <div className="w-60 h-60 bg-red-500 rounded-full border overflow-hidden" style={{'clipPath': "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"}}>
        <img src={myPic} alt="" className="hover:scale-105 duration-700"/>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-sans text-white my-1.5">Rayhan Mujumdar</h1>
        <ReactTyped
          className="text-gray-800 text-3xl"
          strings={[
            "I AM Frontend Developer",
            "I AM MERN stack Developer",
            "I AM React Developer",
          ]}
          typeSpeed={70}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            className="bg-transparent w-full text-center outline-none"
          />
        </ReactTyped>
        <Button target="blank" className='mt-2' href='https://drive.google.com/file/d/1PTqCP6G3r0mnEbe4QjgYPhhuR7dSE9Q7/view?usp=sharing'>Download CV</Button>
      </div>
    </div>
    );
};

export default Banner;