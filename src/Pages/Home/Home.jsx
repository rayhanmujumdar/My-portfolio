import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import SkillLogo from "./SkillLogo";
import Projects from "./Projects";
import Contact from './Contact'
import { HashLink } from "react-router-hash-link";
import About from "./About";
import ScrollSpy from "react-ui-scrollspy";
import SetTitle from "../../Components/SetTitle/SetTitle";
const Home = () => {
  const [scroll,setScroll] = useState(false)
  useEffect(() => {
    window.onscroll = () => scrollFunction()
    const scrollFunction = () => {
      if(window.document.body.scrollTop > 20 || window.document.documentElement.scrollTop > 20){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
  },[])
  // const topFunction = () => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  return (
    <ScrollSpy>
      <Banner></Banner>
      <SetTitle title={"Home"}></SetTitle>
      <SkillLogo></SkillLogo>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      {scroll && <HashLink smooth to="/#home" className="text-center md:leading-[56px] leading-10 cursor-pointer text-2xl fixed z-20 bottom-10 md:right-10 right-4 md:w-10 md:h-14 w-10 h-10 rounded-full bg-yellow-700 ">
        <i className="fa-solid fa-angle-up text-white md:animate-none animate-pulse"></i>
      </HashLink>}
    </ScrollSpy>
  );
};

export default Home;
