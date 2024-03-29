import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/products/img_3.jpg";
import img2 from "../../images/products/img_43.png";
import img3 from "../../images/products/img_95.jpeg";
import img4 from "../../images/products/img_116.jpeg";
import "./Home.css";

function ProductsOverview() {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    // Pass the clicked item ID as a parameter to the "/products" route
    navigate(`/products/${itemId}`);
  };

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);

  return (
    <main id="main-products">
      <article id="products" className="container-lg">
        <section>
          <h3 className="section-heading">Products</h3>
          <p className="overview-page">
            Discover our exquisite collection of products! Click or tap on a
            card to explore the stunning galleries showcasing the beauty and
            uniqueness of each product. Embrace the artistry and find your
            perfect piece today!
          </p>
        </section>

        <div className="product-overview-container">
          {/* Column 1 - Painting */}
          <div className="" onClick={() => handleItemClick("paintings")}>
            <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
              <div
                className="card each-card"
                onMouseEnter={() => setFlip1(!flip1)}
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
                    <h6 style={{ fontWeight: "bolder" }}>
                      PAINTINGS & DRAWINGS
                    </h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div class="card each-card" onMouseLeave={() => setFlip1(!flip1)}>
                <div className="card-image">
                  <img
                    src={img1}
                    class="card-img-top"
                    alt="..."
                    style={{
                      opacity: "0.3",
                      height: "50vh",
                      borderRadius: "10px",
                      cursor: "pointer",
                      hover: {
                        cursor: "pointer",
                      },
                    }}
                  />

                  <div
                    class="carousel-caption text-light bg-dark rounded"
                    style={{ height: "30vh" }}
                  >
                    <h5 className="flip-side-text">
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

          {/* Column 2 - Scuplture */}
          <div className="" onClick={() => handleItemClick("sculptures")}>
            <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
              <div class="card each-card" onMouseEnter={() => setFlip2(!flip2)}>
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
                    <h6 style={{ fontWeight: "bolder" }}>SCULPTURES</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div class="card each-card" onMouseLeave={() => setFlip2(!flip2)}>
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
                    <h5 className="flip-side-text">
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
          <div className="" onClick={() => handleItemClick("ceramics")}>
            <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
              <div class="card each-card" onMouseEnter={() => setFlip3(!flip3)}>
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
                    <h6 style={{ fontWeight: "bolder" }}>CERAMICS</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div class="card each-card" onMouseLeave={() => setFlip3(!flip3)}>
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
                    <h5 className="flip-side-text">
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
          <div className="" onClick={() => handleItemClick("photography")}>
            <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
              <div class="card each-card" onMouseEnter={() => setFlip4(!flip4)}>
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
                    <h6 style={{ fontWeight: "bolder" }}>PHOTOGRAPHY</h6>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div class="card each-card" onMouseLeave={() => setFlip4(!flip4)}>
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
                    <h5 className="flip-side-text">
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
