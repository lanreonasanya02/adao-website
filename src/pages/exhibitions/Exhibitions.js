import React, { useEffect } from "react";
import "../exhibitions/Exhibitions.css";
import img1 from "../../images/exhibitions/IMG_1453.jpg";
import img2 from "../../images/exhibitions/IMG_1435.jpg";
import img3 from "../../images/exhibitions/IMG_1474.jpg";
import img4 from "../../images/exhibitions/IMG_1441.jpg";
import img5 from "../../images/exhibitions/IMG_1481.jpg";
import img6 from "../../images/exhibitions/IMG_1437.jpg";
import img7 from "../../images/exhibitions/IMG_1475.jpg";
import img8 from "../../images/exhibitions/IMG_1440.jpg";
// import img9 from "../../images/exhibitions/IMG_1480.jpg";
// import img10 from "../../images/exhibitions/IMG_1478.jpg";
import img11 from "../../images/exhibitions/IMG_1476.jpg";
import img12 from "../../images/exhibitions/adao-9.png";
import img13 from "../../images/exhibitions/adao-10.png";
import img14 from "../../images/exhibitions/adao-11.png";
import img15 from "../../images/exhibitions/IMG_1445.jpg";
import img16 from "../../images/exhibitions/IMG_1448.jpg";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";

const Exhibitions = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main id="main-exhibitions" className="d-none d-lg-block">
        <Navbar />
        <section className="container-lg">
          <div className="return-link">
            <Link to="/">
              <FaAngleDoubleLeft /> Return Home
            </Link>
          </div>
          <h3 className="productCards-heading">Exhibitions</h3>
          <p>
            Welcome to the exhibitions section of our website, a captivating
            showcase of artistic wonders! Here, we take you on an enchanting
            visual journey through a diverse collection of art exhibitions that
            have graced our gallery walls. Immerse yourself in a symphony of
            colors, emotions, and creativity as each image narrates its own
            unique story.
          </p>

          <p className="productCards-paragraph">
            From contemporary masterpieces to timeless classics, this section
            offers a window into the boundless world of artistry, where
            imagination knows no boundaries. Join us in celebrating the talent
            and vision of artists from around the globe, and let these
            breathtaking displays inspire your own artistic spirit. Enjoy the
            artistry, passion, and inspiration that await you in our
            ever-growing gallery of exhibitions.
          </p>

          <section className=" gallery-section">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
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
              </div>
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active" data-bs-interval="4000">
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
                </div>

                {/* Slide 2 */}
                <div className="carousel-item" data-bs-interval="3000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img4} alt="exhibition-4" />
                          </div>

                          <div className="card-image ">
                            <img src={img5} alt="exhibition-5" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img2} alt="exhibition-6" />
                          </div>

                          <div className="card-image ">
                            <img src={img11} alt="exhibition-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item" data-bs-interval="3000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img8} alt="exhibition-8" />
                          </div>

                          <div className="card-image ">
                            <img src={img7} alt="exhibition-9" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img6} alt="exhibition-10" />
                          </div>

                          <div className="card-image ">
                            <img src={img7} alt="exhibition-11" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="carousel-item" data-bs-interval="3000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img12} alt="exhibition-12" />
                          </div>

                          <div className="card-image ">
                            <img src={img13} alt="exhibition-13" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="card-image first-column">
                          <img src={img14} alt="exhibition-14" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />

      {/* Mobile */}
      <main className="d-block d-lg-none" id="main-exhibitions">
        <div className="container-lg" id="exhibitions">
          <h3 className="section-heading">Exhibitions</h3>

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
                  <img src={img8} alt="exhibition-1" />
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
                  <img src={img15} alt="exhibition-3" />
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
                  <img src={img16} alt="exhibition-3" />
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

export default Exhibitions;
