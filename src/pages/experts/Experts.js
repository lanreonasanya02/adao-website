import React from "react";
import { Link } from "react-router-dom";
import "./Experts.css";

const Experts = () => {
  return (
    <main id="main-expert">
      <article id="expert">
        <div className="container-lg">
          <h3 className="section-heading">Expert</h3>
        </div>

        <section className="container-lg">
          <div className="expert-paragraph">
            <p>
              Our services include a number of crucial areas to guarantee a
              smooth art supply process for branded hotels: art curation, art
              procurement, custom artwork, art installation, art maintenance and
              conservation, and art engagement programs. Have a question, need
              to know more information about our products, company or delivery?
              Contact us and ask anything.
            </p>
          </div>

          <div className="expert-btn-container">
            <Link to="/contact" class="btn expert-btn">
              Contact Expert
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Experts;
