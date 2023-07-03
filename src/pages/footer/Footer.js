import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import logo from "../../images/adao-logo.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 section-one">
            <img src={logo} alt="logo" width="35%" />
          </div>

          <div className="col-md-4 section-two">
            <Link to="mailto:adaogroup@outlook.com" target="_blank">
              <AiOutlineMail />
            </Link>
            <Link
              to="https://web.facebook.com/profile.php?id=100077348396583"
              target="_blank"
            >
              <FiFacebook />
            </Link>
            <Link to="https://www.instagram.com/adao_group" target="_blank">
              <FiInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/in/adao-group-427b46217"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </div>

          <div className="col-md-4 section-three">
            <p>Copyright 2023 - All Rights Resrved.</p>
          </div>
        </div>

        <div className="attribution">
          <p>
            Created with ❤️ by{" "}
            <Link
              to="https://my-portfolio-khaki-psi.vercel.app/"
              target="_blank"
            >
              Lanre Adeolu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
