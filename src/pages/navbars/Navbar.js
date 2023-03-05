import React from "react";
import logo from "../../images/adao-logo.png";
import "../navbars/Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg nav-bar">
      <div class="container-lg">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="logo" width="15%" />
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
              PRODUCTS
            </a>
            <a class="nav-link me-2" href="#">
              EXPERTS
            </a>
            <a class="nav-link me-2" href="#">
              MEDIA
            </a>
            <a class="nav-link me-2" href="#">
              NEWS
            </a>
            <a class="nav-link btn btn-secondary text-white py-2 px-4" href="#">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
