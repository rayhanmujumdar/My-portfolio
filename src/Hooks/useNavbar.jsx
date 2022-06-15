import { useEffect, useState } from "react";

const useNavbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    function scrollFunction() {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos > 20) {
        setNav(true);
      } else {
        setNav(false)
      }
    }
  }, []);
  console.log(nav);
  return [nav, setNav];
};

export default useNavbar;
