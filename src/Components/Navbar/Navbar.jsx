import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.svg'
import Button from '../Button/Button';

const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#0B0E13] text-gray-200 navbar navbar-expand-lg">
        <div className="container mx-auto w-full flex flex-wrap items-center justify-between px-6 ">
          <button onClick={() => setNavbar(!navbar)} className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {navbar ? <i className="fa-solid fa-x text-2xl"></i>:<i className="fa-solid fa-bars text-2xl"></i>}
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
            <Link to='/' className="text-xl text-white pr-2 font-semibold" href="#">
              <img src={logo} alt="" />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <Link to='/' className="nav-link text-white" href="#">Home</Link>
              </li>
              <li className="nav-item p-2">
                <Link to='/about' className="nav-link text-white" href="#">About</Link>
              </li>
              <li className="nav-item p-2">
                <Link to='/project' className="nav-link text-white" href="#">Project</Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/portfolio" className="nav-link text-white" href="#">Portfolio</Link>
              </li>
              <li className="nav-item p-2">
                <Link to='/contact' className="nav-link text-white" href="#">Contact</Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className={`${navbar && 'mx-auto'}`}>
            {/* Icon */}
            <Button target="blank" href='https://drive.google.com/file/d/1PTqCP6G3r0mnEbe4QjgYPhhuR7dSE9Q7/view?usp=sharing'>Download CV</Button>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    );
};

export default Navbar;