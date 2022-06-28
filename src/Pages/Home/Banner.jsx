import React from "react";
import ReactTyped from "react-typed";
import Button from "../../Components/Button/Button";
import myPic from "../../Images/Rayhan-removebg-preview.jpg";
const Banner = () => {
  return (
    <div
      id="banner"
      className="h-[100vh] flex justify-center items-center flex-col bg-[#181818]"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 0, 100% 43%, 100% 78%, 100% 100%, 73% 88%, 0 100%, 0% 43%, 0 0)",
      }}
    >
      <div
        className="w-60 h-60 rounded-full border overflow-hidden"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        <img src={myPic} alt="" className="hover:scale-105 duration-700" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-sans text-white my-1.5">
          Rayhan Mujumdar
        </h1>
        <ReactTyped
          className="text-gray-800 text-3xl"
          strings={[
            "I AM Frontend Developer",
            "I AM MERN stack Developer",
            "I AM React Developer",
          ]}
          typeSpeed={100}
          backSpeed={20}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            className="bg-transparent w-full text-center outline-none"
          />
        </ReactTyped>
        <div className="flex justify-center items-center gap-x-2">
          <Button
            target="blank"
            className="mt-2"
            href="https://www.fiverr.com/rayhan_1122?up_rollout=true"
          >
            <span className="mr-3">Fiverr</span>
            <span className="font-bold">FI</span>
          </Button>
          <Button
            target="blank"
            className="mt-2"
            href="https://www.linkedin.com/in/rayhanmujumdar/"
          >
            <span className="mr-3">Hire me</span>
            <i className="fa-brands fa-linkedin"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
