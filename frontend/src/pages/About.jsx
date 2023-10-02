import React from "react";
import "./style/about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about-us">
      <div className="bg-image banner">
        <div className="banner-content  container">
          <h1>ABOUT US</h1>
          <div>
            <Link to="/">Home</Link>
            <span style={{ color: "#fff", fontSize: "20px " }}> | </span>
            <Link to="about-us">About us</Link>
          </div>
        </div>
      </div>

      <div className="section-two padding-y container">
        <div className="left">
          <div className="content">
            <p className="welcome">WELCOME TO NATURE VISTA HUB</p>

            <h2 className="nuture">
              Nurturing Well-Being in Harmony with Nature.
            </h2>

            <div>
              <p style={{ textAlign: "justify" }}>
                At LifeNatureWonderHub ,we are stewards of nature's canvas,
                capturing the essence of life through breathtaking images and
                the healing power of herbs. Our journey is rooted in a passion
                for the natural world. Join us as we weave stories with each
                snapshot, and explore the therapeutic wonders of herbs that
                enhance well-being.
              </p>
              <p style={{ marginTop: 15, marginBottom: 15 }}>
                Learn more about the synergy of nature and wellness at
                LifeNatureWonderHub. Our canvas is a mosaic of captivating
                nature pictures, our remedy is the potent embrace of herbs, and
                our guide is the eloquence found within the pages of carefully
                curated books.
              </p>
              <p>
                Embark on a journey with us where each image, herb, and word
                invites you to a world of holistic well-being and literary
                discovery. Welcome to a harmonious haven.
              </p>
            </div>

            <div className="quality">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="currentColor"
                      d="M4 14c0 2.333 1.4 7 7 7c0-2.333-1.4-7-7-7zm3-6V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5S7 9.667 7 8zm13 6c0 2.333-1.4 7-7 7c0-2.333 1.4-7 7-7z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 21c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7zm0 0h1m0 0v-8m0 8h1m-1-8c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5zm1 8c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7z"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <img
              src="https://cdn.xxl.thumbs.canstockphoto.com/young-plant-stock-images_csp30112350.jpg"
              alt="plant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
