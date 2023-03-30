import React from "react";
import "../products/Product.css";
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
import img11 from "../../images/adao-2.png";
import img12 from "../../images/adao-3.png";
import img13 from "../../images/adao-1.png";

const Products = () => {
  return (
    <>
      <div className=" container ">
        <h3 className="section-heading">Products</h3>
      </div>
      <section className="d-none d-lg-block">
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

            <div className="">
              <div class="carousel-inner">
                {/* Slide 1 */}
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img1} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Painting
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Landscape
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Scenery
                            </p>
                          </div>
                          <a href="/adao-1" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img9} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Metal
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img2} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Wood
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              3-dimensional
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img3} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Metal
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img12} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Painting
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Abstract
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img10} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Painting
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Abstract
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img13} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Painting
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Abstract
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img11} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Painting
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Abstract
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img8} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Wood
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img5sub} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Wood
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img6} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Metal
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img7} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h6 class="card-title">
                            ADAO - Lorem ipsum dolor sit amet consectetur.
                          </h6>
                          <div className="line"></div>
                          <div className="card-paragraph">
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i>{" "}
                              Sculpture
                            </p>
                            <p class="card-text">
                              <i class="bi bi-view-list card-icon"></i> Metal
                            </p>
                          </div>
                          <a href="#" class="btn btn-first">
                            View Product
                          </a>
                          <a href="#" class="btn btn-second">
                            Send Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
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
      </section>

      <section className="carou-mobile d-block d-lg-none">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <div class="card">
                <div className="card-image">
                  <img src={img13} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Landscape
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Scenery
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img12} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img4} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Metal
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img11} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img9} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Metal
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Outdoor
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img10} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img3} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Metal
                    </p>
                  </div>
                  <a href="#" class="btn btn-first">
                    View Product
                  </a>
                  <a href="#" class="btn btn-second">
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="btn-prev-next" aria-hidden="true">
              <i class="bi bi-chevron-left"></i>
            </span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="btn-prev-next" aria-hidden="true">
              <i class="bi bi-chevron-right"></i>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Products;
