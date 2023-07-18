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

    return <div>Oops....Nothing to see here yet! Sorry</div>;
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
    </main>
  );
};

export default Products;
