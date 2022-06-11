import React from "react";
import ReactjsLogo from "../../Images/Icon/react-icon.png";
import NodejsLogo from "../../Images/Icon/Node.js.png";
import MongodbLogo from "../../Images/Icon/mongodb.svg";
import ExpressjsLogo from "../../Images/Icon/Express.js.png";
import OwlCarousel from "react-owl-carousel";

const SkillLogo = () => {
  const logos = [
    { id: 1, logo: ReactjsLogo, name: "React.js" },
    { id: 2, logo: NodejsLogo, name: "Node.js" },
    { id: 3, logo: MongodbLogo, name: "MongoDB.js" },
    { id: 4, logo: ExpressjsLogo, name: "express.js" },
  ];
  return (
    <div className=" md:mx-10 rounded-md">
      <div className="md:container mx-auto flex justify-evenly items-center my-3 py-3">
        <OwlCarousel items={4} autoplay={true} autoplayTimeout={2000} loop>
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="item mx-auto md:w-32 w-20 flex flex-col justify-center items-center"
          >
            <img
              src={logo.logo}
              alt=""
              className="filter-img md:opacity-40 hover:opacity-100 duration-500"
            />
            <h4 className="md:text-xl font-semibold text-gray-800">
              {logo.name}
            </h4>
          </div>
        ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default SkillLogo;
