import React from "react";
import { navbar } from "../constants";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { TOGGLE_MOBILE_MENU } from "../context/reducer";

const MobileMenu = () => {
  let { isMenuOpen, dispatch } = useAppContext();

  const handleCloseMenu = () => {
    dispatch({
      type: TOGGLE_MOBILE_MENU,
      payload: false,
    });
  };
  return (
    <section className={`mobile-menu ${isMenuOpen ? "open-mobile-menu" : ""}`}>
      <div className="container">
        <div className="mobile-link-holder">
          <ul className="moblie-links">
            {navbar.navLinks.map((link, idx) => (
              <li onClick={handleCloseMenu} className="link" key={idx}>
                <Link to={`/${link.to}`}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <ul className="mobile-social-link">
            {navbar.socialLinks.map((link, idx) => (
              <li className="social-link" key={idx}>
                <a href={`${link}`}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
