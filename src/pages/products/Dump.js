import React from "react";

const Dump = () => {
  return (
    <div>
      <article>
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
                    <div className="row ">
                      <div className="col-lg-3 col-md-3 col-10">
                        <div class="card" style={{ width: "15rem" }}>
                          <div className="card-image">
                            <img src={img11} class="card-img-top" alt="..." />
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              ADAO - Lorem ipsum dolor sit amet consectetur. b
                            </h6>
                            <p className="text-muted title-paragraph">
                              BY TOLAWEWE
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Painting
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Abstract
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-10">
                        <div class="card" style={{ width: "15rem" }}>
                          <div className="card-image">
                            <img src={img1} class="card-img-top" alt="..." />
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              ADAO - Lorem ipsum dolor sit amet consectetur.
                            </h6>
                            <p className="text-muted title-paragraph">
                              BY ODEYEMI SEUN
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Painting
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Landscape
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-10">
                        <div class="card" style={{ width: "15rem" }}>
                          <div className="card-image">
                            <img src={img5} class="card-img-top" alt="..." />
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              ADAO - Lorem ipsum dolor sit amet consectetur.
                            </h6>
                            <p className="text-muted title-paragraph">
                              BY KENNY ADAMSON
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Sculpture
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i> Wood
                                work
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              BY B. ALVIN
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Sculpture
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i> Metal
                                work
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-10">
                        <div class="card" style={{ width: "15rem" }}>
                          <div className="card-image">
                            <img src={img10} class="card-img-top" alt="..." />
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              ADAO - Lorem ipsum dolor sit amet consectetur.
                            </h6>
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Painting
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Landscape
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Scenery
                              </p>
                            </div>
                            <Link to="/adao-1" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Syntax */}

                      <div className="col-lg-3 col-md-3 col-10">
                        <div class="card" style={{ width: "15rem" }}>
                          <div className="card-image">
                            <img src={img12} class="card-img-top" alt="..." />
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              ADAO - Lorem ipsum dolor sit amet consectetur.
                            </h6>
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Painting
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Abstract
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
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
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
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
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
                            <div className="line"></div>
                            <div className="card-paragraph">
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i>{" "}
                                Sculpture
                              </p>
                              <p class="card-text">
                                <i class="bi bi-view-list card-icon"></i> Fibre
                                Glass in Bronze
                              </p>
                            </div>
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
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
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
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
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
                            <p className="text-muted title-paragraph">
                              Lorem, ipsum.
                            </p>
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
                            <Link to="#" class="btn btn-first">
                              View Art
                            </Link>
                            <Link to="#" class="btn btn-second">
                              Send Enquiry
                            </Link>
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
      </article>
    </div>
  );
};

export default Dump;
