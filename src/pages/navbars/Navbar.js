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
              <Link class="nav-link me-2 link-white" to="#expert">
                Expert
              </Link>
              <Link class="nav-link me-2 link-white" to="#exhibitions">
                Exhibitions
              </Link>
              <Link class="nav-link me-3 link-white" to="#">
                News
              </Link>
              <Link to="/contact" className="nav-btn">
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
