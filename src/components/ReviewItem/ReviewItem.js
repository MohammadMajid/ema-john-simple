import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, quantity, key, price, img } = props.product;

  return (
    <div className="review">
      <div className="img">
        <img src={img} alt="product-img" />
      </div>
      <div className="review-item">
        <h4 className="product-name">{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>
          <small>$ {price}</small>
        </p>
        <br />
        <button
          className="main-button" onClick={() => props.removeProduct(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
