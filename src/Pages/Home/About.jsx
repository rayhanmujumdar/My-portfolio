import React from "react";
import { useLocation } from "react-router-dom";
import SetTitle from "../../Components/SetTitle/SetTitle";

const About = () => {
  const {hash} = useLocation()
  return (
    <div id="about" className="container md:mx-auto py-10">
      {hash.includes("about") && <SetTitle title={"About"}></SetTitle>}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img
            src="https://kishor-sutradhar.web.app/static/media/mySelf.f6a3af3ac1782a22b623.png"
            alt=""
            className="md:w-full w-[350px] mx-auto"
          />
        </div>
        <div className="mx-4">
          <h1 className="uppercase mt-5 text-6xl font-extrabold font-sans text-orange-500">
            about me
          </h1>
          <h3 className="text-3xl">
            I'm A Junior Front-End & MERN stack Developer
          </h3>
          <p className="py-4 text-xl text-gray-600">
            Hello, My name is Rayhan, My interest in web development started
            back in 2020. I have been developing websites and web apps as a
            MERN-stack developer for 1.5 years now. I am learning more and more
            and trying my best.I am working with
            technologies such as Html, CSS, Bootstrap, Tailwind CSS, JavaScript,
            React JS, Node JS, and Express. Js, MongoDB, Firebase
            Authentication, React query, React hooks, react animation, etc. We
            work hard to ensure that our client is 100% satisfied all time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
