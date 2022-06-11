import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#0B0E13]">
      <div className="container md:mx-auto text-white flex md:justify-between md:flex-row justify-center flex-col py-3 items-center gap-y-2">
        <div>
          <ul className="flex gap-x-2">
            <li className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://twitter.com/Rayhan_Mujumdar" target="blank"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://www.linkedin.com/in/rayhanmujumdar/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://www.facebook.com/profile.php?id=100009009442063" target='blank'><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li className="w-6 h-6 bg-white text-center text-black rounded-full hover:bg-gray-700 hover:text-white duration-500">
              <a href="https://github.com/rayhanmujumdar" target="blank"><i class="fa-brands fa-github"></i></a>
            </li>
          </ul>
        </div>
        <h4 className="text-3xl font-mono">Rayhan Mujumdar</h4>
        <p>© {year} All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
