import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import SkillLogo from "./SkillLogo";
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
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <Banner></Banner>
      <SkillLogo></SkillLogo>
      {scroll && <button onClick={topFunction} className="cursor-pointer text-2xl fixed bottom-20 right-16 w-10 h-14 rounded-full bg-yellow-700">
        <i class="fa-solid fa-angle-up text-white"></i>
      </button>}
    </div>
  );
};

export default Home;
