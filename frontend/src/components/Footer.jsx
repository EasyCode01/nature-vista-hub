import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="padding-y">
      <div className="container">
        <div className="footer-holder">
          <div className="brief-summary">
            <div className="top">
              <Link to="/">
                <div>
                  <div className="bg-logo"></div>
                  <span className="logo-icon"></span>
                </div>
                <h2 className="text">
                  <span>Naturevista</span> <span>hub</span>
                </h2>
              </Link>

              <p>
                Elementum nisi quis eleifend quam adipiscing. Cursus metus
                aliquam eleifend mi in nulla posuere sollicitudin
              </p>
            </div>
            <div className="bottom">
              <ul className="social-links"></ul>
            </div>
          </div>
          <div className="contact-info">
            <h2 className="contact-info">Contact information</h2>
            <div className="icon-and-info">
              <span className="icon"></span>
              <div>
                <p>+1-202-555-0133</p>
                <p>+1-202-555-0133</p>
              </div>
            </div>
            <div className="icon-and-info">
              <span className="icon"></span>
              <div>
                <p>+1-202-555-0133</p>
                <p>+1-202-555-0133</p>
              </div>
            </div>
            <div className="icon-and-info">
              <span className="icon"></span>
              <div>
                <p>+1-202-555-0133</p>
                <p>+1-202-555-0133</p>
              </div>
            </div>
          </div>
          <div className="shop-products">
            <h2 className="shop-prod">Shop Products</h2>
            <ul className="products">
              <li className="product">
                <Link>
                  <span></span>
                  <span>Flower</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
