import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="error-page d-none d-md-block">
        <div className="text-center container error-heading">
          <h1>Page Unavailable!</h1>
          <div className="go-back-link">
            <Link to="/">
              <FaAngleDoubleLeft /> Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-error-page d-block d-md-none">
        <div className="">
          <span>Page</span>
          <span>Not</span>
          <span>Found.</span>
        </div>

        <div className="go-back-link">
          <Link to="/">
            <FaAngleDoubleLeft /> Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
