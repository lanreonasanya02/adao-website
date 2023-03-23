import React from "react";
import "../home/Home.css";
import Navbar from "../navbars/Navbar";
import Products from "../products/Products";

// import SideNav from "../navbars/SideNav";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        {/* <SideNav /> */}

        <div className="container header-hero">
          <div className="fw-bold header-hero-text">
            <h1 className="display-6 animate-charcter d-none d-lg-block">
              African Diversified Art Odyssey Group (ADAO)
            </h1>

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

              <a
                href="#"
                className="btn header-btn d-block d-lg-none fst-italic"
              >
                See Collections
              </a>
            </div>

            <h5 className="fst-italic d-none d-lg-block">
              {" "}
              Art Consultancy, Represention of Old & Modern Contemporary
              Artists, Supply, Exhibitions...
            </h5>
            <br />
            <p className="d-none d-lg-block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quos iusto illum repellat et voluptatum magnam neque ipsa in
              obcaecati, quisquam at quae, incidunt accusamus laborum
              exercitationem deserunt rerum atque ad iste. Ratione veniam
              architecto corporis laborum ullam recusandae cupiditate eos
              praesentium quasi, quia incidunt officiis doloribus. Tempora, eius
              sapiente!
            </p>

            <a href="#" className="btn header-btn d-none d-lg-block">
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      <Products />
    </>
  );
};

export default Home;
