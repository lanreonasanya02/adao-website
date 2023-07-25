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
        <div className="modal-overlay">
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
        <div className="modal-overlay">
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
        <div className="modal-overlay">
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
        <div className="modal-overlay">
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

export { Painting, Sculpture, Ceramics, Photography };
