import React from "react";
import { Link } from "react-router-dom";
import { SiReactos } from "react-icons/si";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div classNameName="navbar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          NBA Insights {"     "}
          <SiReactos size={30} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="navigation-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
