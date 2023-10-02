import React from "react";
import Ratings from "./Ratings";

const FeaturedProduct = ({ item }) => {
  return (
    <div className="featured-product">
      <div className="sale">sale</div>
      <div className="image-container">
        <img src={item.src} alt="plant" />
      </div>
      <h3>{item.name}</h3>
      <p>Nettle leaf supports joint health and overall wellness</p>
      <p className="review">
        {[...Array(item.rating)].map((_, idx) => (
          <Ratings key={idx} />
        ))}
        <span style={{ color: "#258f67", fontSize: "18px" }}>
          {item.reviews} Reviews
        </span>
      </p>
    </div>
  );
};

export default FeaturedProduct;
