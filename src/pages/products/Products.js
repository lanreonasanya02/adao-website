import React from "react";
import "../products/Product.css";
import img1 from "../../images/adao-4.png";
import img2 from "../../images/adao-15.png";
import img3 from "../../images/adao-6.png";
import img4 from "../../images/adao-7.png";
import img5 from "../../images/adao-14.png";
import img6 from "../../images/adao-17.png";
import img7 from "../../images/adao-18.png";
import img8 from "../../images/adao-20.png";
import img9 from "../../images/adao-5.png";
import img10 from "../../images/adao-8.png";
import img11 from "../../images/adao-2.png";
import img12 from "../../images/adao-3.png";
import img13 from "../../images/adao-1.png";

const Products = () => {
  return (
    <>
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-lg-3 col-md-4 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img12} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-lg-3 col-md-4 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img8} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-10">
                      <div class="card" style={{ width: "15rem" }}>
                        <div className="card-image">
                          <img src={img5} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Go somewhere
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
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img1} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img12} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img4} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img11} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img9} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img10} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src={img3} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
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
