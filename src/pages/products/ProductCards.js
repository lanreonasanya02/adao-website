import { useEffect, useState } from "react";
import "./Product.css";
import { allProducts } from "./Data";
import { Link } from "react-router-dom";

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
    (product) => product.category === "Painting"
  );

  return (
    <>
      <h3 className="section-heading">Painting</h3>
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

                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Art
                  </button>

                  <Link
                    to="https://form.jotform.com/231938646635568"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-second"
                  >
                    Send Enquiry
                  </Link>
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
                    alt={selectedProduct.title}
                  />
                </div>

                <div className="product-details">
                  <h2>{selectedProduct.title}</h2>
                  <h5>{selectedProduct.author}</h5>
                  <h4>
                    {selectedProduct.category}, {selectedProduct.subCategory}
                  </h4>
                  <h4>{selectedProduct.description}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
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
      <h3 className="section-heading">Sculpture</h3>
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
                  <button
                    class="btn btn-first"
                    onClick={() => openModal(product)}
                  >
                    View Art
                  </button>

                  <Link
                    to="https://form.jotform.com/231938646635568"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-second"
                  >
                    Send Enquiry
                  </Link>
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
                    alt={selectedProduct.title}
                  />
                </div>

                <div className="product-details">
                  <h2>{selectedProduct.title}</h2>
                  <h5>{selectedProduct.author}</h5>
                  <h4>
                    {selectedProduct.category}, {selectedProduct.subCategory}
                  </h4>
                  <h4>{selectedProduct.description}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export { Painting, Sculpture };
