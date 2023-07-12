import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../products/Product.css";
import { allProducts } from "./Data";

const Products = () => {
  const { itemId } = useParams();
  const [selectedItem, setSelectedItem] = useState(itemId || null);

  const renderSelectedComponent = () => {
    // Add your logic to determine the component to render based on the selected item
    switch (selectedItem) {
      case "paintings":
        return <Painting />;
      case "sculptures":
        return <Sculpture />;
      // case "ceramics":
      //   return <Ceramics />;
      // case "photography":
      //   return <Photography />;
      default:
        return <NoComponent />;
    }
  };

  function Painting() {
    const filteredProducts = allProducts.filter(
      (product) => product.category === "Painting"
    );
    return (
      <>
        <h3>Painting</h3>
        <div className="card-container">
          {filteredProducts.map((product) => {
            const { id, category, subCategory, title, image, author } = product;

            return (
              <div key={id} className="card-style">
                <div class="card">
                  <div className="card-header"></div>
                  <div className="card-image">
                    <img src={image} class="card-img-top" alt={title} />
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">{title}</h6>
                    <p className="text-muted title-paragraph">By {author}</p>
                    <div className="line"></div>
                    <div className="card-paragraph">
                      <p class="card-text">
                        <i class="bi bi-view-list card-icon"></i> {category}
                      </p>
                      <p class="card-text">
                        <i class="bi bi-view-list card-icon"></i> {subCategory}
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
            );
          })}
        </div>
      </>
    );
  }

  function Sculpture() {
    const filteredProducts = allProducts.filter(
      (product) => product.category === "Sculpture"
    );
    return (
      <>
        <h3>Sculpture</h3>
        <div className="card-container">
          {filteredProducts.map((product) => {
            const { id, category, subCategory, title, image, author } = product;

            return (
              <div key={id} className="card-style">
                <div class="card" style={{ width: "15rem" }}>
                  <div className="card-header"></div>
                  <div className="card-image">
                    <img src={image} class="card-img-top" alt={title} />
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">{title}</h6>
                    <p className="text-muted title-paragraph">By {author}</p>
                    <div className="line"></div>
                    <div className="card-paragraph">
                      <p class="card-text">
                        <i class="bi bi-view-list card-icon"></i> {category}
                      </p>
                      <p class="card-text">
                        <i class="bi bi-view-list card-icon"></i> {subCategory}
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
            );
          })}
        </div>
      </>
    );
  }

  function NoComponent() {
    return <div>Oops....No Component yet! Sorry</div>;
  }

  return (
    <main id="main-products">
      <article id="products" className="container">
        <section>
          <p className="go-back">
            <Link to="/"> Return Home</Link>
          </p>
          <h3 className="section-heading">Products</h3>
        </section>

        {renderSelectedComponent()}
      </article>

      {/* Mobile */}
      <section className="carou-mobile d-block d-lg-none">
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
