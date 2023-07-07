import React, { useEffect, useState, useContext, createContext } from "react";
import logo from "../../images/adao-logo.png";
import "../navbars/Navbar.css";
import { useLocation, Link } from "react-router-dom";

// Create a context to store the active section
const ActiveSectionContext = createContext("");

const Navbar = () => {
  const location = useLocation();

  return (
    <ActiveSectionContext.Provider value={location.hash}>
      <Navigation />
    </ActiveSectionContext.Provider>
  );
};

const Navigation = () => {
  // Open the sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  // Close/hide the sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //  Setting scroll to link section within page
  const location = useLocation();
  const activeSection = useContext(ActiveSectionContext);

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("article");

      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          window.history.replaceState(null, null, `#${section.id}`); // Update the URL hash
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

              <Link
                to="/contact"
                className="nav-btn"
                style={
                  location.pathname === "/contact" ? activeLinkStyle : null
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav pt-3 d-block d-lg-none">
        <div id="mySidenav" className="sidenav">
          <Link class="navbar-brand closebtn-logo" to="#">
            <img src={logo} alt="logo" className="logo-overlap-mobile" />
          </Link>
          <Link to="#" class="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <div className="sidenav-links">
            <Link to="#products">Products</Link>
            <Link to="#expert">Expert</Link>
            <Link to="#exhibitions">Exhibitions</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <Link class="navbar-brand" to="/">
                <img src={logo} alt="logo" className="logo-mobile" />
              </Link>
            </div>
            <span onClick={openNav} className="hamburger col-6 text-end">
              <i class="bi bi-list"></i>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
