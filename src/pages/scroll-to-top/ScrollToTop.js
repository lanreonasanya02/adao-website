import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Scroll.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Show or hide the button based on scroll position
      setShowButton(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top-button ${showButton ? "show" : ""}`}
      onClick={handleScrollToTop}
    >
      <span className="tt" data-bs-placement="top" title="Back to top">
        <FaArrowUp className="scroll-to-top-icon" />
      </span>
    </button>
  );
};

export default ScrollToTop;
