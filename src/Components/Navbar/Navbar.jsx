import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#0B0E13] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button onClick={() => setNavbar(!navbar)} className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
            <Link to='/' className="text-xl text-white pr-2 font-semibold" href="#">Rayhan</Link>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <Link to='/' className="nav-link text-white" href="#">Home</Link>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">Project</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">Portfolio</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className={`${navbar && 'mx-auto'}`}>
            {/* Icon */}
            <a target="blank" href='https://drive.google.com/file/d/1PTqCP6G3r0mnEbe4QjgYPhhuR7dSE9Q7/view?usp=sharing' type="download" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Download CV</a>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    );
};

export default Navbar;