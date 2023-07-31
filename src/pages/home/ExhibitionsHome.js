import React from "react";
import "../exhibitions/Exhibitions.css";
import img1 from "../../images/exhibitions/IMG_1453.jpg";
import img2 from "../../images/exhibitions/IMG_1435.jpg";
import img3 from "../../images/exhibitions/IMG_5744.jpg";
import img4 from "../../images/exhibitions/IMG_5754.jpg";
import img5 from "../../images/exhibitions/IMG_1895.jpg";
import img6 from "../../images/exhibitions/IMG_1886.jpg";
import img7 from "../../images/exhibitions/IMG_1872.jpg";
import img8 from "../../images/exhibitions/IMG_1560.jpg";
import img9 from "../../images/exhibitions/IMG_4255.jpg";
import img10 from "../../images/exhibitions/IMG_4883.jpg";
import img11 from "../../images/exhibitions/IMG_3349.jpg";
import img12 from "../../images/exhibitions/IMG_2173.jpg";
import img13 from "../../images/exhibitions/IMG_2163.jpg";
import img14 from "../../images/exhibitions/IMG_001.jpg";
import img15 from "../../images/exhibitions/IMG_1887.jpg";
import img16 from "../../images/exhibitions/IMG_1868.jpg";
import img17 from "../../images/exhibitions/IMG_1729.jpg";
import img18 from "../../images/exhibitions/IMG_1681.jpg";
import img19 from "../../images/exhibitions/IMG_1676.jpg";
import img20 from "../../images/exhibitions/IMG_1576.jpg";

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
          <p className="overview-page mb-5">
            Swipe through a captivating gallery of artistic wonders! Here, we
            take you on an enchanting visual journey through a diverse
            collection of art exhibitions that have graced our gallery walls.
            Immerse yourself in a symphony of colors, emotions, and creativity
            as each image narrates its own unique story.
          </p>

          <div
            id="carouselExampleTest"
            className="carousel slide carousel-fade mobile-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img1} alt="exhibition-1" />
                </div>
              </div>
              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img2} alt="exhibition-2" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img3} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img4} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img5} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img6} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img7} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img8} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img9} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img10} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img11} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img12} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img13} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img14} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img15} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img16} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img17} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img18} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img19} alt="exhibition-3" />
                </div>
              </div>

              <div
                className="carousel-item slide-container"
                data-bs-interval="3000"
              >
                <div className="gallery-image">
                  <img src={img20} alt="exhibition-3" />
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
