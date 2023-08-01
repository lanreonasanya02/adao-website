import { useEffect, useState } from "react";
import "./Product.css";
import { allProducts } from "./Data";
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import SendBtn from "../submit-btn/SendBtn";

function Painting() {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = allProducts.filter(
    (product) =>
      product.category === "Painting" || product.category === "Drawing"
  );

  return (
    <>
      <h3 className="productCards-heading">Paintings & Drawings</h3>

      <div className="productCards-para-container">
        <p>
          Welcome to our Paintings and Drawings section, a captivating gallery
          that unveils a tapestry of artistic brilliance! Here, we invite you to
          embark on a visual odyssey through a mesmerizing array of art
          paintings that embody the essence of creativity and expression and the
          raw emotion captured within the lines of exquisite drawings. Our
          gallery unveils an eclectic mix of styles, genres, and themes, each a
          testament to the unique visions of our talented artists. Each stroke
          of the brush, every hue carefully chosen, and the emotions etched upon
          the canvas, together form a symphony of captivating narratives.
        </p>

        <p className="productCards-paragraph">
          Whether you're a seasoned art connoisseur or a curious explorer, we
          invite you to immerse yourself in the magic of visual art, where
          imagination knows no bounds. Be inspired, be moved, and be captivated
          by the evocative narratives woven into each brushstroke and pencil
          mark. Experience the transformative power of art as you journey
          through our gallery of paintings and drawings and let your imagination
          take flight!
        </p>
      </div>

      <div className="card-container">
        {filteredProducts.map((product) => {
          const { id, category, subCategory, image, author } = product;

          return (
            <div key={id} className="card-style">
              <div class="card">
                <div className="card-header"></div>
                <div className="card-image">
                  <img src={image} class="card-img-top" alt={category} />
                </div>
                <div class="card-body">
                  <h6 class="card-title">By {author}</h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {category}
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {subCategory}
                    </p>
                  </div>

                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Art
                  </button>

                  <SendBtn title={"Send Enquiry"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            {selectedProduct && (
              <div className="product-container">
                <div className="product-image">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.category}
                  />
                </div>

                <div className="product-details">
                  <h4>By {selectedProduct.author}</h4>
                  <h4>
                    {selectedProduct.category}, {selectedProduct.subCategory}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <ScrollToTop />
    </>
  );
}

function Sculpture() {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = allProducts.filter(
    (product) => product.category === "Sculpture"
  );
  return (
    <>
      <h3 className="productCards-heading">Sculptures</h3>

      <div className="productCards-para-container">
        <p>
          Discover our Sculptures section, a realm of three-dimensional
          artistry! Experience stunning sculptures, each a masterpiece of
          creativity and craftsmanship. From stone to metal, wood to clay,
          immerse in textures and captivating narratives. Explore contemporary
          abstracts to timeless figurative pieces. Indulge your senses, touch
          art, and embrace the transformative power of sculptural expression.
        </p>

        <p className="productCards-paragraph">
          Explore the captivating world of sculptures, where art transcends the
          boundaries of the two-dimensional and invites you to touch the very
          soul of creativity. Embrace the tactile allure and immerse yourself in
          the transformative power of sculptural expression. Enjoy the journey
          through our gallery of sculptures, where each creation stands as a
          testament to the beauty of art in its tangible form.
        </p>
      </div>

      <div className="card-container">
        {filteredProducts.map((product) => {
          const { id, category, subCategory, image, author } = product;

          return (
            <div key={id} className="card-style">
              <div class="card">
                <div className="card-header"></div>
                <div className="card-image">
                  <img src={image} class="card-img-top" alt={category} />
                </div>
                <div class="card-body">
                  <h6 class="card-title">By {author}</h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {category}
                    </p>
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {subCategory}
                    </p>
                  </div>
                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Art
                  </button>

                  <SendBtn title={"Send Enquiry"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            {selectedProduct && (
              <div className="product-container">
                <div className="product-image">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.category}
                  />
                </div>

                <div className="product-details">
                  <h4>By {selectedProduct.author}</h4>
                  <h4>
                    {selectedProduct.category}, {selectedProduct.subCategory}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ScrollToTop />
    </>
  );
}

// Ceramics
function Ceramics() {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = allProducts.filter(
    (product) => product.category === "Ceramics"
  );
  return (
    <>
      <h3 className="productCards-heading">Ceramics</h3>

      <div className="productCards-para-container">
        <p className="productCards-paragraph">
          Welcome to our Ceramics section, a captivating showcase of exquisite
          artistry and the timeless beauty of clay. Discover delicately
          handcrafted vases, intricately sculpted figurines, and more. Immerse
          yourself in the allure of unique glazes and forms. Whether you're an
          avid collector or a curious enthusiast, we invite you to explore the
          charm and allure of ceramics, where the artistic journey unfolds
          through the hands of talented artisans. Embrace the tactile beauty, be
          inspired by the interplay of colors and forms, and immerse yourself in
          the timeless art of ceramics. Enjoy the journey through our gallery,
          where each ceramic piece whispers the secrets of its creation and the
          passion of its maker.
        </p>
      </div>

      <div className="card-container">
        {filteredProducts.map((product) => {
          const { id, category, image, author } = product;

          return (
            <div key={id} className="card-style">
              <div class="card">
                <div className="card-header"></div>
                <div className="card-image">
                  <img src={image} class="card-img-top" alt={category} />
                </div>
                <div class="card-body">
                  <h6 class="card-title">By {author}</h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {category}
                    </p>
                  </div>
                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Art
                  </button>

                  <SendBtn title={"Send Enquiry"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            {selectedProduct && (
              <div className="product-container">
                <div className="product-image">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.category}
                  />
                </div>

                <div className="product-details">
                  <h4>By {selectedProduct.author}</h4>
                  <h4>{selectedProduct.category}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ScrollToTop />
    </>
  );
}

// Photography
function Photography() {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = allProducts.filter(
    (product) => product.category === "Photography"
  );
  return (
    <>
      <h3 className="productCards-heading">Photography</h3>

      <div className="productCards-para-container">
        <p className="productCards-paragraph">
          Welcome to our Photography section, a captivating visual journey
          through breathtaking moments frozen in time. Explore a mesmerizing
          collection of images, from intimate portraits to stunning landscapes,
          each capturing the essence of the world around us. Immerse yourself in
          the artistry and storytelling prowess of talented photographers, as
          they invite you to see the world through their eyes. Whether you're a
          photography enthusiast or simply appreciate visual storytelling, be
          inspired and moved by the evocative narratives woven into each frame.
          Enjoy the transformative power of photography as you explore our
          gallery of captivating images.
        </p>
      </div>

      <div className="card-container">
        {filteredProducts.map((product) => {
          const { id, category, image, author } = product;

          return (
            <div key={id} className="card-style">
              <div class="card">
                <div className="card-header"></div>
                <div className="card-image">
                  <img src={image} class="card-img-top" alt={category} />
                </div>
                <div class="card-body">
                  <h6 class="card-title">Shot By {author}</h6>
                  <div className="line"></div>
                  <div className="card-paragraph">
                    <p class="card-text">
                      <i class="bi bi-view-list card-icon"></i> {category}
                    </p>
                  </div>
                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Photo
                  </button>

                  <SendBtn title={"Send Enquiry"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            {selectedProduct && (
              <div className="product-container">
                <div className="product-image">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.category}
                  />
                </div>

                <div className="product-details">
                  <h4>Shot By {selectedProduct.author}</h4>
                  <h4>{selectedProduct.category}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ScrollToTop />
    </>
  );
}

export { Painting, Sculpture, Ceramics, Photography };
