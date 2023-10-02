import React, { useState } from "react";
import "./style.css";
import { navbar } from "../constants";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { TOGGLE_MOBILE_MENU } from "../context/reducer";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let { isMenuOpen, dispatch } = useAppContext();
  const handleToggle = () => {
    dispatch({
      type: TOGGLE_MOBILE_MENU,
      payload: !isMenuOpen,
    });
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <nav className="navbar container">
        <Link to={"/"} className="nav-logo">
          <div className="nav-logo-left logo-holder">
            <div className="bg-logo icon-bg"></div>
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
            Naturevista <span className="hub">hub</span>
          </h2>
        </Link>

        <div onClick={handleToggle} className={"navbar-menu-icon"}>
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          )}
        </div>

        <div className="navbar-links-and-social">
          <ul className="navbar-links">
            {navbar.navLinks.map((link, idx) => (
              <li className="link" key={idx}>
                <Link to={`/${link.to}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="social-links">
            {navbar.socialLinks.map((link, idx) => (
              <li className="social-link" key={idx}>
                <a href={`${link}`}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
