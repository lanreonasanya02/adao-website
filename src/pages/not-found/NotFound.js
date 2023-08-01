import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { FaAngleDoubleLeft } from "react-icons/fa";

const NotFound = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="error-page d-none d-md-block">
        <div
          className="text-center  container"
          style={{
            height: "100vh",
          }}
        >
          <h1>The page you are looking for doesn't exist!</h1>

          <div className="go-back-link">
            <Link to="/">
              <FaAngleDoubleLeft /> Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-error-page">
        <div className="d-block d-md-none">
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
