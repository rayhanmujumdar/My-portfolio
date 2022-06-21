import { useEffect, useState } from "react";

const useNavbar = () => {
  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("#181818");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("#181818");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });
  return [navSize, navColor];
};

export default useNavbar;
