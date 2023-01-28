import { UpIcon } from "@assets/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import classnames from "classnames";

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", handleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollTop}
          className={classnames("btn-scrollup", {
            "btn-scrollup--animate": isVisible,
          })}
        >
          <UpIcon classname="btn-scrollup__icon" />
        </button>
      )}
    </>
  );
};

export default ScrolltoTop;
