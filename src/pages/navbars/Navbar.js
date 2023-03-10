import React from "react";
import logo from "../../images/adao logo.jpg";
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
      <nav class="navbar navbar-expand-lg nav-bar">
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

      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick={closeNav()}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      {/* <!-- Use any element to open the sidenav --> */}
      <span onclick={openNav}>
        <i class="bi bi-list"></i> Open
      </span>

      {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
      {/* <div id="main">...</div> */}
    </>
  );
};

export default Navbar;
