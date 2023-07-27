import React from "react";
import "../exhibitions/Exhibitions.css";
import img1 from "../../images/exhibitions/IMG_1453.jpg";
import img2 from "../../images/exhibitions/IMG_1435.jpg";
import img3 from "../../images/exhibitions/IMG_001.jpg";
import { Link } from "react-router-dom";

const ExhibitionsHome = () => {
  return (
    <>
      <main id="home-exhibitions" className="d-none d-lg-block">
        <article id="exhibitions">
          <section className="container-lg">
            <h3 className="section-heading">Exhibitions</h3>

            <section className="gallery-section">
              <div className="container">
                <div className="grid-container">
                  <div className="exhibit-column">
                    <div className="card-image first-column">
                      <img src={img1} alt="exhibition-1" />
                    </div>
                  </div>

                  <div className="exhibit-column">
                    <div className="nested-columns">
                      <div className="card-image">
                        <img src={img3} alt="exhibition-2" />
                      </div>

                      <div className="card-image ">
                        <img src={img2} alt="exhibition-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="expert-btn-container">
              <Link to="/exhibitions" class="btn expert-btn">
                See Exhibitions
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default ExhibitionsHome;
