import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import logo from "../../images/adao logo.jpg";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="d-none d-lg-block">
        <div className="container">
          <nav class="navbar navbar-expand-lg desktop-nav">
            <div class="container-lg">
              <Link class="navbar-brand" to="/">
                <img src={logo} alt="logo" className="logo-desktop" />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div class="navbar-nav">
                  <Link
                    class="nav-link me-2 "
                    aria-current="page"
                    to="#products"
                  >
                    Products
                  </Link>
                  {/* <Link
                className={
                  exactLocation[1] === "products"
                    ? "current-active nav-link"
                    : "nav-link"
                }
                to="/products"
              >
                Products
              </Link> */}
                  <Link class="nav-link me-2" to="#expert">
                    Expert
                  </Link>
                  <Link class="nav-link me-2" to="#exhibitions">
                    Exhibitions
                  </Link>
                  <Link class="nav-link me-3" to="#">
                    News
                  </Link>
                  <Link to="/contact" className="nav-link me-3">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="footer-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <p>Copyright 2023 - All Rights Resrved.</p>
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
                  className="socials"
                >
                  <AiOutlineMail />
                </Link>
                <Link
                  to="https://web.facebook.com/profile.php?id=100077348396583"
                  target="_blank"
                  className="socials"
                >
                  <FiFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/adao_group"
                  target="_blank"
                  className="socials"
                >
                  <FiInstagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/adao-group-427b46217"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>

                <p className="invisible">Lagos City</p>
              </div>
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

      {/* Mobile view */}

      <footer className="d-block d-lg-none">
        <nav className="">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>

          <div className="all-links">
            <div class="navbar-nav">
              <Link class="nav-link me-2 " aria-current="page" to="#products">
                Products
              </Link>
              <Link class="nav-link me-2" to="#expert">
                Expert
              </Link>
              <Link class="nav-link me-2" to="#exhibitions">
                Exhibitions
              </Link>
              <Link class="nav-link me-3" to="#">
                News
              </Link>
              <Link to="/contact" className="nav-link me-3">
                Contact
              </Link>
            </div>

            <div className="">
              <h6>Contact details</h6>
              <p>+234-817-3551-411</p>
              <p>+234-817-1375-644</p>
            </div>

            <div className="">
              <p>Copyright 2023 - All Rights Resrved.</p>
            </div>

            <div className="links-column">
              <h6>Our Socials</h6>
              <Link
                to="mailto:adaogroup@outlook.com"
                target="_blank"
                className="socials"
              >
                <AiOutlineMail />
              </Link>
              <Link
                to="https://web.facebook.com/profile.php?id=100077348396583"
                target="_blank"
                className="socials"
              >
                <FiFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/adao_group"
                target="_blank"
                className="socials"
              >
                <FiInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/in/adao-group-427b46217"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>

              <p className="invisible">Lagos City</p>
            </div>
          </div>
        </nav>

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
      </footer>
    </>
  );
};

export default Footer;
