import React from "react";
import { Link } from "react-router-dom";
import "../products/Product.css";

const SendBtn = ({ title }) => {
  return (
    <div>
      <Link to="/contact" class="btn btn-second">
        {title}
      </Link>
    </div>
  );
};

export default SendBtn;
