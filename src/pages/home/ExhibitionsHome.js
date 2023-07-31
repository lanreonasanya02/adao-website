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

      {/* Mobile */}
      <main className="d-block d-lg-none" id="main-exhibitions">
        <div className="container-lg" id="exhibitions">
          <h3 className="section-heading">Exhibitions</h3>

          <div
            id="carouselExampleTest"
            className="carousel slide carousel-fade mobile-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active slide-container"
                data-bs-interval="4000"
              >
                <div className="gallery-image">
                  <img src={img1} alt="exhibition-1" />
                </div>
                <div className="carousel-caption">
                  <h5>ADAO - Exhibition A</h5>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img2} alt="exhibition-2" />
                </div>
                <div className="carousel-caption">
                  <h5>ADAO - Exhibition B</h5>
                  <p>Texas, United States</p>
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img2} alt="exhibition-3" />
                </div>
                <div className="carousel-caption">
                  <h5>ADAO - Exhibition C</h5>
                  <p>Venice, Italy</p>
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img3} alt="exhibition-3" />
                </div>
                <div className="carousel-caption">
                  <h5>ADAO - Exhibition D</h5>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img3} alt="exhibition-3" />
                </div>
                <div className="carousel-caption">
                  <h5>ADAO - Exhibition E</h5>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleTest"
              data-bs-slide="prev"
            >
              <span class="btn-prev-next" aria-hidden="true">
                <i class="bi bi-chevron-left"></i>
              </span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleTest"
              data-bs-slide="next"
            >
              <span class="btn-prev-next" aria-hidden="true">
                <i class="bi bi-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ExhibitionsHome;
