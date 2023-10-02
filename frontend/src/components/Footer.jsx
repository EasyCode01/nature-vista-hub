import React from "react";
import { Link } from "react-router-dom";
import { footerContactInfo, footerProducts, navbar } from "../constants";

const Footer = () => {
  return (
    <section className="footer padding-y">
      <div className="container">
        <div className="footer-holder">
          <div className="brief-summary">
            <div className="top">
              <Link className="footer-logo-link" to="/">
                <div className="logo-holder">
                  <div className="icon-bg"></div>
                  <span className="logo-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M239.84 60.33a8 8 0 0 1-4.65 5.75L179 90.55a71.42 71.42 0 0 1 43.36 33.21a70.64 70.64 0 0 1 7.2 54.32a8 8 0 0 1-12.56 4.28l-81-61.68V224a8 8 0 0 1-16 0V120.68l-81 61.68a8 8 0 0 1-12.57-4.28a70.64 70.64 0 0 1 7.2-54.32A71.42 71.42 0 0 1 77 90.55L20.81 66.08a8 8 0 0 1-2.6-12.85a66.86 66.86 0 0 1 97.74 0a72.21 72.21 0 0 1 12 17a72.21 72.21 0 0 1 12.05-17a66.86 66.86 0 0 1 97.74 0a8 8 0 0 1 2.1 7.1Z"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="text">
                  <span className="nature-vista">Naturevista</span>{" "}
                  <span className="hub">hub</span>
                </h2>
              </Link>

              <p>
                Elementum nisi quis eleifend quam adipiscing. Cursus metus
                aliquam eleifend mi in nulla posuere sollicitudin
              </p>
            </div>
            <div className="bottom">
              <ul className="social-links">
                {navbar.socialLinks.map((link, idx) => (
                  <li className="social-link footer-link" key={idx}>
                    <a href={`${link}`}>{link.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h2 className="contact-info-heading">Contact information</h2>
            <ul className="icon-and-info">
              {footerContactInfo.map((info, idx) => (
                <li className="list" key={idx}>
                  <span className="icon">{info.icon}</span>
                  <div>
                    <p>{info.infoOne}</p>
                    <p>{info.infoTwo}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="shop-products">
            <h2 className="shop-prod">Shop Products</h2>
            <ul className="products">
              {footerProducts.map((prod, idx) => (
                <li key={idx} className="product">
                  <Link className="link">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0c-.446-.434-.481-1.041 0-1.574L11.295 10L7.548 6.092c-.481-.533-.446-1.141 0-1.576c.445-.436 1.197-.409 1.615 0z"
                        />
                      </svg>
                    </span>
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
