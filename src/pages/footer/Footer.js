import React from "react";
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
            <a href="">
              <AiOutlineMail />
            </a>
            <a href="">
              <FiFacebook />
            </a>
            <a href="">
              <FiInstagram />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="col-md-4 section-three">
            <p>Copyright 2023 - All Rights Resrved.</p>
          </div>
        </div>

        <div className="attribution">
          <p>
            Created with ❤️ by <a href="">Lanre Adeolu</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
