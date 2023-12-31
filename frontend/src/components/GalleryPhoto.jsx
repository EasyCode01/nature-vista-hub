import React from "react";
import { Link } from "react-router-dom";

const GalleryPhoto = ({ item }) => {
  return (
    <div className="gallery-photo">
      <div className="image-wrapper">
        <img src={item.src} alt="plants" />
      </div>
      <div className="gallery-details">
        <div>
          <h2>{item.plantName}</h2>
          <p>{item.title}</p>
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.293 3.96a4.771 4.771 0 1 1 6.747 6.747l-3.03 3.03l-1.415-1.413l3.03-3.031a2.771 2.771 0 1 0-3.918-3.92l-3.031 3.031l-1.414-1.414l3.03-3.03Zm2.12 6.04l-5.415 5.414L8.584 14l5.414-5.414L15.413 10Zm-7.01 1.676l-3.03 3.031a2.771 2.771 0 1 0 3.92 3.92l3.03-3.031l1.414 1.414l-3.03 3.03a4.771 4.771 0 1 1-6.748-6.747l3.03-3.03l1.415 1.413Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhoto;
