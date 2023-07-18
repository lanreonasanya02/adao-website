/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../products/Product.css";
import Navbar from "../navbars/Navbar";
import { Painting, Sculpture } from "./ProductCards";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Products = () => {
  const { itemId } = useParams();
  const [selectedItem, setSelectedItem] = useState(itemId || null);

  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "paintings":
        return <Painting />;
      case "sculptures":
        return <Sculpture />;

      default:
        return <NoComponent />;
    }
  };

  function NoComponent() {
    // Scroll To top
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return <div>Oops....No Component yet! Sorry</div>;
  }

  return (
    <main id="main-products">
      <Navbar />
      <article id="products" className="container">
        <div className="return-link">
          <Link to="/">
            <FaAngleDoubleLeft /> Return Home
          </Link>
        </div>

        {renderSelectedComponent()}
      </article>

      {/* Mobile */}
      <section className="carou-mobile d-none d-lg-none">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY TOLAWEWE</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
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
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY ODEYEMI SEUN</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Landscape
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
            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY KENNY ADAMSON</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Wood work
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

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY B. ALVIN</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Metal work
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

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY LOREM IPSUM</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
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

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY LOREM IPSUM</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
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

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY LOREM IPSUM</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Painting
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Abstract
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

            <div class="carousel-item">
              <div class="card">
                <div className="card-image">
                  <img src="" class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title">
                    ADAO - Lorem ipsum dolor sit amet consectetur.
                  </h6>
                  <p className="text-muted title-paragraph">BY LOREM IPSUM</p>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> Sculpture
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
    </main>
  );
};

export default Products;
