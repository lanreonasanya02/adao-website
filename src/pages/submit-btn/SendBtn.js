import React from "react";
import "../products/Product.css";

const SendBtn = ({ title }) => {
  const openForm = () => {
    window.open(
      "https://form.jotform.com/231938646635568",
      "blank",
      "scrollbars=yes,toolbar=no,width=700,height=500"
    );
  };

  return (
    <div>
      <button onClick={openForm} class="btn btn-second">
        {title}
      </button>
    </div>
  );
};

export default SendBtn;
