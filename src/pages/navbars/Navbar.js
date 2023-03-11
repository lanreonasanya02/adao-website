import React from "react";
import logo from "../../images/adao logo.jpg";
import logoMobile from "../../images/adao-logo.png";
import "../navbars/Navbar.css";

const Navbar = () => {
  // Open the sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  // Close/hide the sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg desktop-nav d-none d-md-block">
        <div class="container-lg">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              alt="logo"
              width="15%"
              className="border border-1 border-dark rounded"
            />
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
              <a class="nav-link active me-2" aria-current="page" href="#">
                Products
              </a>
              <a class="nav-link me-2" href="#">
                Experts
              </a>
              <a class="nav-link me-2" href="#">
                Media
              </a>
              <a class="nav-link me-3" href="#">
                News
              </a>
              <button className="nav-btn">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav py-3 d-block d-md-none">
        <div id="mySidenav" className="sidenav">
          <a class="navbar-brand closebtn-logo" href="#">
            <img src={logoMobile} alt="logo" width="25%" />
          </a>
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="sidenav-links">
            <a href="#">Products</a>
            <a href="#">Experts</a>
            <a href="#">Media</a>
            <a href="#">News</a>
          </div>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <a class="navbar-brand" href="/">
                <img
                  src={logo}
                  alt="logo"
                  width="35%"
                  className="border border-1 border-dark rounded"
                />
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
