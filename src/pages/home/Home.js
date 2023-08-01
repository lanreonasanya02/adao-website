import React, { useEffect } from "react";
import "../home/Home.css";
import { Link } from "react-router-dom";
import Navbar from "../navbars/Navbar";
import img from "../../images/home/adao-19ed.png";
import img2 from "../../images/home/adao-18.png";
import Overview from "../overview/Overview";
import Footer from "../footer/Footer";
import ProductsOverview from "./ProductsOverview";
import ExhibitionsHome from "./ExhibitionsHome";
import Experts from "../experts/Experts";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

const Home = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header>
        <Navbar />

        <div className="container-lg header-hero">
          <div className="">
            <div className="row align-items-center">
              <div className="fw-bold header-hero-text col-md-6">
                <h1 className="display-4">
                  African Diversified Art Odyssey (ADAO)
                </h1>

                <h5 className="fst-italic text-muted">
                  Art Consultancy | Art Supply | Contemporary Artists'
                  Representation | Art Exhibitions
                </h5>
                <br />

                <Link
                  to="#products"
                  className="btn header-btn d-none d-lg-block"
                >
                  View Collections
                </Link>
              </div>

              <div className="col-md-6 m-auto">
                <img src={img} alt="african-art" width="45%" />
                <img src={img2} alt="african-art" width="55%" />

                <Link
                  to="#products"
                  className="btn mobile-header-btn d-block d-lg-none"
                >
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Overview />
      <ProductsOverview />
      <ExhibitionsHome />
      <Experts />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;

/* <h1 className="display-6 animate-charcter d-none d-lg-block">
    African Diversified Art Odyssey Group (ADAO)
    </h1> */
