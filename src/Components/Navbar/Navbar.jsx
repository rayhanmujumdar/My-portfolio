import React, { useState } from "react";
import logo from "../../Images/logo.svg";
import Button from "../Button/Button";
import { HashLink } from "react-router-hash-link";
import useNavbar from "../../Hooks/useNavbar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navSize, navColor] = useNavbar();
  // new
  const location = useLocation();
  // console.log(navSize,navColor)

  // before:w-full before:h-1 before:bg-orange-500 before:absolute before:bottom-0 before:left-0
  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
      className={`fixed top-0 z-30 w-full flex flex-wrap items-center justify-between py-3 text-gray-200 navbar navbar-expand-lg`}
    >
      <div className={`container lg:bg-transparent p-2 mx-auto w-full flex flex-wrap items-center justify-between px-6 bg-[${navColor}]`}>
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
          className={`collapse navbar-collapse flex-grow items-center bg-[]`}
          id="navbarSupportedContent1"
        >
          <HashLink
            smooth
            to="/#home"
            className="text-xl text-white pr-2 font-semibold"
          >
            <img src={logo} alt="" />
          </HashLink>
          {/* Left links */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <HashLink
                smooth
                to="/#home"
                className={`relative nav-link text-white before:inline-block ${
                  location.hash === "#home" && "text-orange-500 "
                }`}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink
                smooth
                to="/#about"
                className={`relative nav-link text-white ${
                  location.hash === "#about" && "text-orange-500"
                }`}
              >
                About
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink
                smooth
                to="/#projects"
                className={`relative nav-link text-white ${
                  location.hash === "#projects" && "text-orange-500"
                }`}
              >
                Project
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink
                to="/#skills"
                smooth
                className={`relative nav-link text-white ${
                  location.hash === "#skills" && "text-orange-500"
                }`}
              >
                Skills
              </HashLink>
            </li>
            <li className="nav-item p-2">
              <HashLink
                smooth
                to="/#contact"
                className={`relative nav-link text-white ${
                  location.hash === "#contact" && "text-orange-500"
                }`}
              >
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
