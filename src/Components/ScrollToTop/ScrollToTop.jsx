import React, { useEffect, useState } from "react";
import { GrLinkTop } from "react-icons/gr";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () =>
      window.pageYOffset > 600 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisible);
    return () => window.addEventListener("scroll", toggleVisible);
  }, []);

  return isVisible ? (
    <div className="scroll">
      <a href="#top" aria-label="top">
        <GrLinkTop className="scrollIcon"/>
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
