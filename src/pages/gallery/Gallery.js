import React from "react";
import img1 from "../../images/adao-4.png";
import img2 from "../../images/adao-15.png";
import img3 from "../../images/adao-6.png";
import img4 from "../../images/adao-7.png";
import img5 from "../../images/adao-14.png";
import img5sub from "../../images/adao-19ed.png";
import img6 from "../../images/adao-17.png";
import img7 from "../../images/adao-18.png";
import img8 from "../../images/adao-20.png";
import img9 from "../../images/adao-5ed.png";
import img10 from "../../images/adao-8.png";

const Gallery = () => {
  return (
    <>
      <div className="container" id="gallery">
        <h3 className="section-heading">Gallery</h3>
      </div>

      <article className="carou-mobile d-none">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div className="carou">
            <div className="">
              <button
                // class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span class="btn-prev-next" aria-hidden="true">
                  {" "}
                  <i class="bi bi-chevron-left"></i>
                </span>
              </button>
            </div>

            <div class="carousel-inner ">
              {/* Slide 1 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src={img1} alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 5 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 6 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              {/* Slide 7 */}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>

                  <div className="col-md-5">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                // class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span class="btn-prev-next" aria-hidden="true">
                  <i class="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Gallery;
