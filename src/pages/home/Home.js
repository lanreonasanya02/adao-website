import React from "react";
import "../home/Home.css";
import { Link } from "react-router-dom";
import Navbar from "../navbars/Navbar";
import Products from "../products/Products";
import img from "../../images/adao-19ed.png";
import img2 from "../../images/adao-18.png";
import Exhibitions from "../exhibitions/Exhibitions";
import Overview from "../overview/Overview";
import Experts from "../experts/Experts";
import Footer from "../footer/Footer";

// import SideNav from "../navbars/SideNav";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        {/* <SideNav /> */}

        <div className="container header-hero">
          <div className="">
            <div className="row align-items-center">
              <div className="fw-bold header-hero-text col-md-6 ">
                {/* <h1 className="display-6 animate-charcter d-none d-lg-block">
              African Diversified Art Odyssey Group (ADAO)
            </h1> */}
                <h1 className="display-4">
                  African Diversified Art Odyssey (ADAO)
                </h1>

                <h5 className="fst-italic  text-muted">
                  {" "}
                  Art Consultancy/Art Supply/Contemporary Artists
                  Representation/Art Exhibitions...
                </h5>
                <br />
                <p className="d-none">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quos iusto illum repellat et voluptatum magnam neque
                  ipsa in obcaecati, quisquam at quae, incidunt accusamus
                  laborum exercitationem deserunt rerum atque ad iste. Ratione
                  veniam architecto corporis laborum ullam recusandae cupiditate
                  eos praesentium quasi, quia incidunt officiis doloribus.
                  Tempora, eius sapiente!
                </p>

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
      <Products />
      <Exhibitions />
      <Experts />
      <Footer />
    </>
  );
};

export default Home;
