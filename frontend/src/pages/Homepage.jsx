import React from "react";
import "./style/homepage.css";
import Hero from "./Hero";
import FeaturedProduct from "../components/FeaturedProduct";
import { featuredProducts } from "../constants";

const Homepage = () => {
  return (
    <section className="">
      <div className="hero-container">
        <Hero />
      </div>
      <section className="featured-product-wrapper padding-y">
        <div className="container">
          <div className="top">
            <h2>Featured Products</h2>
            <p>Suscipit tellus mauris a diam maecenas sed enim ut sem.</p>
            <p>Turpis egestas maecenas pharetra convallis posuere</p>
          </div>

          <div className="featured-products">
            {featuredProducts.map((prod, idx) => (
              <FeaturedProduct item={prod} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Homepage;
