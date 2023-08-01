import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import logo from "../../images/logo/adao logo.jpg";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="d-none d-md-block">
        <div className="container-lg navbar-container">
          <div className="footer-body">
            <div className="row ">
              <div className="col-md-4">
                <p>Copyright 2023 - All Rights Reserved.</p>
              </div>

              <div className="col-md-4 section-two">
                <h6>Contact details</h6>
                <p>+234-817-3551-411</p>
                <p>+234-817-1375-644</p>
              </div>

              <div className="col-md-3 section-three">
                <h6>Our Socials</h6>
                <Link
                  to="mailto:adaogroup@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Send us a mail"
                  >
                    <AiOutlineMail />
                  </span>
                </Link>
                <Link
                  to="https://web.facebook.com/profile.php?id=100077348396583"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Visit Us On Facebook"
                  >
                    <FiFacebook />
                  </span>
                </Link>
                <Link
                  to="https://www.instagram.com/adao_group"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Visit Us On Instagram"
                  >
                    <FiInstagram />
                  </span>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/adao-group-427b46217"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Check Us Out On LinkedIn"
                  >
                    <FaLinkedinIn />
                  </span>
                </Link>

                <p className="invisible">Lagos City</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile view */}

      <footer className="d-block d-md-none">
        <div className="">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>

          <div className="all-links">
            <div class="navbar-nav">
              <h6>Website links</h6>
              <Link class="nav-link me-2 " aria-current="page" to="/#products">
                Products
              </Link>
              <Link class="nav-link" to="/#expert">
                Expert
              </Link>
              <Link class="nav-link" to="/#exhibitions">
                Exhibitions
              </Link>
              <Link class="nav-link" to="/news">
                News
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>

            <div className="text-center">
              <h6>Contact details</h6>
              <p>+234-817-3551-411</p>
              <p>+234-817-1375-644</p>

              <div className="links-column mt-5">
                <h6>Our Socials</h6>
                <Link
                  to="mailto:adaogroup@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Send us a mail"
                  >
                    <AiOutlineMail />
                  </span>
                </Link>
                <Link
                  to="https://web.facebook.com/profile.php?id=100077348396583"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Visit Us On Facebook"
                  >
                    <FiFacebook />
                  </span>
                </Link>
                <Link
                  to="https://www.instagram.com/adao_group"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Visit Us On Instagram"
                  >
                    <FiInstagram />
                  </span>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/adao-group-427b46217"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="tt"
                    data-bs-placement="bottom"
                    title="Check Us Out On LinkedIn"
                  >
                    <FaLinkedinIn />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p>Copyright 2023 - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
