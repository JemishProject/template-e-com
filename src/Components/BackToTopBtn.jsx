import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
export const BackToTopBtn = () => {
  const [gotoTop, setGoToTop] = useState(false);

  const scrollbtn = () => {
    let hight = 20;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > hight) {
      setGoToTop(true);
    } else {
      setGoToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollbtn);
    return () => window.removeEventListener("scroll", scrollbtn);
  }, []);

  const topbtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="flex relative justify-center items-center">
      {gotoTop && (
        <div
          className="w-14 h-14 flex justify-center items-center cursor-pointer text-4xl text-white bg-black rounded-full fixed bottom-20 right-20"
          onClick={topbtn}
        >
          <BsArrowUp />
        </div>
      )}
    </div>
  );
};
