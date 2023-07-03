import React from "react";
import { Link } from "react-router-dom";
import "./Experts.css";

const Experts = () => {
  return (
    <main id="main-expert">
      <div className="container" id="expert">
        <h3 className="section-heading">Expert</h3>
      </div>

      <section className="container">
        <p>
          Our services include a number of crucial areas to guarantee a smooth
          art supply process for branded hotels: art curation, art procurement,
          custom artwork, art installation, art maintenance and conservation,
          and art engagement programs.
        </p>

        <p>
          Have a question, need to know more information about our products,
          company or delivery? Contact us and ask anything.
        </p>

        <Link to="#contact" className="btn expert-btn">
          Contact Expert
        </Link>
      </section>
    </main>
  );
};

export default Experts;
