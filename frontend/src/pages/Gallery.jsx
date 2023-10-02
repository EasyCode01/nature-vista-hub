import React from "react";
import "./style/gallery.css";
import { Link } from "react-router-dom";

import GalleryPhoto from "../components/GalleryPhoto";
import { galleryPhotos } from "../constants";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-bg banner">
        <div className="gallery-content banner-content container">
          <h1>GALLERY</h1>
          <div>
            <Link to="/">Home</Link>
            <span style={{ color: "#fff", fontSize: "20px " }}> | </span>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>
      </div>

      <div className="padding-y container">
        <div className="section-two">
          <div>
            <p className="recent">RECENT PROJECT</p>
            <h2 className="our-gallery">Our Gallery</h2>
          </div>
        </div>

        <div className="gallery-wrapper">
          {galleryPhotos.map((item, idx) => (
            <GalleryPhoto key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
