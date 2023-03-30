import React from "react";
import "../home/Home.css";
import Navbar from "../navbars/Navbar";
import Products from "../products/Products";
import img from "../../images/adao-19ed.png";
import img2 from "../../images/adao-18.png";

// import SideNav from "../navbars/SideNav";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        {/* <SideNav /> */}

        <div className="container header-hero">
          <div className="d-none d-lg-block">
            <div className="row align-items-center">
              <div className="fw-bold header-hero-text col-md-6 ">
                {/* <h1 className="display-6 animate-charcter d-none d-lg-block">
              African Diversified Art Odyssey Group (ADAO)
            </h1> */}
                <h1 className="display-4 d-none d-lg-block">
                  African Diversified Art Odyssey (ADAO)
                </h1>

                <h5 className="fst-italic  text-muted">
                  {" "}
                  Art Consultancy, Represention of Old & Modern Contemporary
                  Artists, Supply, Exhibitions...
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

                <a href="#" className="btn header-btn d-none d-lg-block">
                  Get In Touch
                </a>
              </div>

              <div className="col-md-6 m-auto">
                <img src={img} alt="african-art" width="45%" />
                <img src={img2} alt="african-art" width="55%" />
              </div>
            </div>
          </div>

          <div className="d-block d-lg-none text-start mobile-heading">
            <h2 className="display-1">An</h2>
            <h2 className="display-1">
              <span>A</span>frican
            </h2>
            <h2 className="display-1">
              <span>D</span>iversified
            </h2>
            <h2 className="display-1">
              <span>A</span>rt
            </h2>
            <h2 className="display-1">
              <span>O</span>dyssey
            </h2>

            <a href="#" className="btn header-btn d-block d-lg-none fst-italic">
              See Collections
            </a>
          </div>
        </div>
      </header>

      <Products />
    </>
  );
};

export default Home;
