import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import Button from "../Button/Button";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#112B3C] text-gray-200 navbar navbar-expand-lg">
      <div className="container mx-auto w-full flex flex-wrap items-center justify-between px-6 ">
        <button
          onClick={() => setNavbar(!navbar)}
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {navbar ? (
            <i className="fa-solid fa-x text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <HashLink
            to="/"
            className="text-xl text-white pr-2 font-semibold"
            href="#"
          >
            <img src={logo} alt="" />
          </HashLink>
          {/* Left links */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <HashLink to="/" className="nav-link text-white" href="#">
                Home
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink to="/about" className="nav-link text-white" href="#">
                About
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink to="/project" className="nav-link text-white" href="#">
                Project
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink
                to="/portfolio"
                className="nav-link text-white"
                href="#"
              >
                Portfolio
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink smooth to="/#contact" className="nav-link text-white" >
                Contact
              </HashLink>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className={`${navbar && "mx-auto"}`}>
          {/* Icon */}
          <Button
            target="blank"
            href="https://drive.google.com/file/d/1PTqCP6G3r0mnEbe4QjgYPhhuR7dSE9Q7/view?usp=sharing"
          >
            Download CV
          </Button>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Navbar;
