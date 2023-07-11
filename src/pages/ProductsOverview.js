import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import img1 from "../images/products/img_3.jpg";
import img2 from "../images/products/img_43.png";
import img3 from "../images/products/img_49.jpg";
import img4 from "../images/products/img_50.jpg";

function ProductsOverview() {
  const navigate = useNavigate();

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);

  return (
    <main id="main-products" style={{ paddingBottom: "6rem" }}>
      <article id="products" className="container">
        <section>
          <h3 className="section-heading">Products</h3>
        </section>

        <div className="row">
          {/* Column 1 - Painting */}
          <div className="col-md-3" onClick={() => navigate("/products")}>
            <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
              <div
                class="card"
                onMouseEnter={() => setFlip1(!flip1)}
                style={{ width: "16rem", height: "50vh", borderRadius: "10px" }}
              >
                <div className="card-image">
                  <img
                    src={img1}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "50vh",
                    }}
                  />

                  <div class="carousel-caption text-dark fw-bold bg-light rounded">
                    <h5 style={{ fontWeight: "bolder" }}>PAINTING</h5>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                class="card"
                onMouseLeave={() => setFlip1(!flip1)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img1}
                    class="card-img-top"
                    alt="..."
                    style={{ opacity: "0.3", height: "50vh" }}
                  />

                  <div
                    class="carousel-caption text-light bg-dark rounded"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        padding: "10px",
                      }}
                    >
                      Click card to explore a collection of captivating
                      paintings, ranging from vibrant abstract masterpieces to
                      stunning landscapes and thought-provoking figurative
                      artwork.
                    </h5>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          {/* Column 2 - Sscuplture */}
          <div className="col-md-3">
            <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
              <div
                class="card"
                onMouseEnter={() => setFlip2(!flip2)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img2}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "50vh",
                    }}
                  />

                  <div class="carousel-caption text-dark fw-bold bg-light rounded">
                    <h5 style={{ fontWeight: "bolder" }}>SCULPTURE</h5>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                class="card"
                onMouseLeave={() => setFlip2(!flip2)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img2}
                    class="card-img-top"
                    alt="..."
                    style={{ opacity: "0.3", height: "50vh" }}
                  />

                  <div
                    class="carousel-caption text-light bg-dark rounded"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        padding: "10px",
                      }}
                    >
                      Click card and immerse yourself in the world of sculpture,
                      where traditional and contemporary styles converge,
                      showcasing the beauty of form and materials.
                    </h5>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          {/* Column 3 - Ceramics */}
          <div className="col-md-3">
            <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
              <div
                class="card"
                onMouseEnter={() => setFlip3(!flip3)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img3}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "50vh",
                    }}
                  />

                  <div class="carousel-caption text-dark fw-bold bg-light rounded">
                    <h5 style={{ fontWeight: "bolder" }}>CERAMICS</h5>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                class="card"
                onMouseLeave={() => setFlip3(!flip3)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img3}
                    class="card-img-top"
                    alt="..."
                    style={{ opacity: "0.3", height: "50vh" }}
                  />

                  <div
                    class="carousel-caption text-light bg-dark rounded"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        padding: "10px",
                      }}
                    >
                      Click card to discover the intricate world of ceramics,
                      where handcrafted pottery and unique ceramic artworks
                      captivate with their beauty and craftsmanship.
                    </h5>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          {/* Column 4 - Photography */}
          <div className="col-md-3">
            <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
              <div
                class="card"
                onMouseEnter={() => setFlip4(!flip4)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img4}
                    class="card-img-top"
                    alt="..."
                    style={{
                      height: "50vh",
                    }}
                  />

                  <div class="carousel-caption text-dark fw-bold bg-light rounded">
                    <h5 style={{ fontWeight: "bolder" }}>PHOTOGRAPHY</h5>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                class="card"
                onMouseLeave={() => setFlip4(!flip4)}
                style={{ width: "16rem", height: "50vh" }}
              >
                <div className="card-image">
                  <img
                    src={img4}
                    class="card-img-top"
                    alt="..."
                    style={{ opacity: "0.3", height: "50vh" }}
                  />

                  <div
                    class="carousel-caption text-light bg-dark rounded"
                    style={{ height: "30vh" }}
                  >
                    <h5
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        padding: "10px",
                      }}
                    >
                      Click card to experience the art of photography, featuring
                      captivating images that showcase the beauty of landscapes,
                      the essence of portraits, and the abstract in everyday
                      moments.
                    </h5>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ProductsOverview;
