import React from "react";
import "../exhibitions/Exhibitions.css";
import img1 from "../../images/adao-4.png";
import img2 from "../../images/adao-15.png";
import img3 from "../../images/adao-6.png";
import img4 from "../../images/adao-7.png";
import img5 from "../../images/adao-14.png";
import img11 from "../../images/adao-19.png";
import img7 from "../../images/adao-18.png";
import img8 from "../../images/adao-20.png";
import img9 from "../../images/adao-5ed.png";
import img10 from "../../images/adao-8.png";
import img12 from "../../images/adao-16.png";
import img13 from "../../images/adao-5ed.png";
import img14 from "../../images/adao-9.png";
import img15 from "../../images/adao-10.png";
import img16 from "../../images/adao-11.png";

const Exhibitions = () => {
  return (
    <>
      <main id="main-exhibitions" className="d-none d-md-block">
        <div className="container" id="exhibitions">
          <h3 className="section-heading">Exhibitions</h3>
        </div>

        <section className=" gallery-section">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="gallery-buttons">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className=" col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img16} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img15} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img14} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className=" col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img8} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img4} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img11} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className=" col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img1} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img7} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img10} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className=" col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img9} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img3} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img5} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className=" col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img13} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img2} className="card-img-top" alt="..." />
                      </div>
                    </div>

                    <div className="col-md-4 col-10 card-image">
                      <div className="gallery-image">
                        <img src={img12} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile */}
      <main className="d-block d-md-none" id="main-exhibitions">
        <div className="container" id="exhibitions">
          <h3 className="section-heading">Exhibitions</h3>
        </div>
        <div
          id="carouselExampleTest"
          className="carousel slide mobile-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active slide-container"
              data-bs-interval="4000"
            >
              <div className="gallery-image">
                <img src={img9} alt="exhibition-1" />
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
                <img src={img5} alt="exhibition-2" />
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
                <img src={img12} alt="exhibition-3" />
              </div>
              <div className="carousel-caption">
                <h5>ADAO - Exhibition C</h5>
                <p>Venice, Italy</p>
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
      </main>
    </>
  );
};

export default Exhibitions;
