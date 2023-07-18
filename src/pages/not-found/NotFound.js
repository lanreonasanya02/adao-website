import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaAngleDoubleLeft } from "react-icons/fa";

const NotFound = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="error-page">
      <div
        className="text-center align-self-center text-white container"
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
        }}
      >
        <h4>
          Oops...The page you are looking for doesn't exist! It may be that you
          put it in the wrong address.
        </h4>

        <div className="go-back-link">
          <Link to="/">
            <FaAngleDoubleLeft /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
