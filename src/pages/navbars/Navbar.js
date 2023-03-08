import React from "react";
import logo from "../../images/adao logo.jpg";
import "../navbars/Navbar.css";

const Navbar = () => {
  return (
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
            <a class="nav-link me-2" href="#">
              News
            </a>
            <button className="nav-btn">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
