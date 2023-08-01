import React, { useEffect } from "react";
import logo from "../../images/logo/adao-logo.png";
import "../navbars/Navbar.css";
import { useLocation, Link } from "react-router-dom";

const NavbarContact = () => {
  //  Setting scroll to link section within page
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Setting active link CSS style
  const activeLinkStyle = {
    fontWeight: "bold",
    color: "#6a6969",
    borderBottom: "3px solid #6a6969",
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg desktop-nav d-none d-lg-block">
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
                class="nav-link me-2 link-white"
                aria-current="page"
                to="/#products"
                style={
                  location.pathname === "/" && location.hash === "#products"
                    ? activeLinkStyle
                    : null
                }
              >
                Products
              </Link>

              <Link
                class="nav-link me-2 link-white"
                to="/#exhibitions"
                style={
                  location.pathname === "/" && location.hash === "#exhibitions"
                    ? activeLinkStyle
                    : null
                }
              >
                Exhibitions
              </Link>

              <Link
                class="nav-link me-2 link-white"
                to="/#expert"
                style={
                  location.pathname === "/" && location.hash === "#expert"
                    ? activeLinkStyle
                    : null
                }
              >
                Expert
              </Link>

              <Link
                class="nav-link me-3 link-white"
                to="/news"
                style={location.pathname === "/news" ? activeLinkStyle : null}
              >
                News
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarContact;
