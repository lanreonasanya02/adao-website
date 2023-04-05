import React from "react";
import logo from "../../images/adao-logo.png";
import logoMobile from "../../images/adao-logo.png";
import "../navbars/Navbar.css";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  // Open the sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  // Close/hide the sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // Setting active class
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const exactLocation = pathname.split("/");
  console.log(exactLocation);

  return (
    <>
      <nav class="navbar navbar-expand-lg desktop-nav py-3 d-none d-lg-block">
        <div class="container-lg">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo-desktop" />
          </a>
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
              <a
                class="nav-link me-2 link-white"
                aria-current="page"
                href="#products"
              >
                Products
              </a>
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
              <a class="nav-link me-2 link-white" href="#">
                Experts
              </a>
              <a class="nav-link me-2 link-white" href="#gallery">
                Gallery
              </a>
              <a class="nav-link me-3 link-white" href="#">
                News
              </a>
              <a href="/contact" className="nav-btn">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav pt-3 d-block d-lg-none">
        <div id="mySidenav" className="sidenav">
          <a class="navbar-brand closebtn-logo" href="#">
            <img src={logo} alt="logo" className="logo-overlap-mobile" />
          </a>
          <a href="#" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="sidenav-links">
            <a href="#products">Products</a>
            <a href="#">Experts</a>
            <a href="#gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <a class="navbar-brand" href="/">
                <img src={logo} alt="logo" className="logo-mobile" />
              </a>
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
