import React from "react";
import "../home/Home.css";
import Navbar from "../navbars/Navbar";
// import SideNav from "../navbars/SideNav";

const Home = () => {
  return (
    <header>
      <Navbar />
      {/* <SideNav /> */}

      <div className="container-lg header-hero">
        <div className="fw-bold ">
          <h1 className="display-5">
            An African Diversified Art Odyssey Group -
          </h1>

          <h5>
            {" "}
            Art Consultancy, Represention of Old & Modern Contemporary Artists,
            Supply, Exhibitions...
          </h5>
          <br />
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quos iusto illum repellat et voluptatum magnam neque ipsa in
            obcaecati, quisquam at quae, incidunt accusamus laborum
            exercitationem deserunt rerum atque ad iste. Ratione veniam
            architecto corporis laborum ullam recusandae cupiditate eos
            praesentium quasi, quia incidunt officiis doloribus. Tempora, eius
            sapiente!
          </p>

          <a href="#" className="btn btn-secondary header-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Home;
