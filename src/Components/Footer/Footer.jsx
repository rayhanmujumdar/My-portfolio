import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#181818]">
      <div className="container md:mx-auto text-white flex md:justify-between md:flex-row justify-center flex-col py-6 items-center gap-y-2">
        <div className="flex md:items-start justify-center items-center flex-col">
          <ul className="flex gap-x-2">
            <li title="Twitter" className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://twitter.com/Rayhan_Mujumdar" target="blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li title="Linkedin" className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a
                href="https://www.linkedin.com/in/rayhanmujumdar/"
                target="blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li title="Facebook" className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a
                href="https://www.facebook.com/profile.php?id=100009009442063"
                target="blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li title="Github" className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://github.com/rayhanmujumdar" target="blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li title="Gmail" className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="mailto:rayhanmujumdar0177@gmail.com" target="blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li title="Fiverr" className="w-6 h-6 bg-[#00C16B] text-center text-white rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://www.fiverr.com/rayhan_1122?up_rollout=true" target="blank">
                <span className="font-bold">FI</span>
              </a>
            </li>
          </ul>
          <div className="mt-1.5">
            <a href="tel:01776464695">
              <span className="text-xl text-yellow-700">Phone:</span>{" "}
              <span className="hover:underline">+8801776464695</span>
            </a>
          </div>
        </div>
        <h4 className="text-3xl font-mono">Rayhan Mujumdar</h4>
        <p>© {year} All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
