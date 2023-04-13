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
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="logo" width="40%" />
          </div>

          <div className="col-md-4">
            <a href="">
              <AiOutlineMail />
            </a>{" "}
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

          <div className="col-md-4">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
