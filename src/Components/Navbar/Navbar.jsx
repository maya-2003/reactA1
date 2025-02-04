import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [closeNav, setCloseNav] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <NavLink to="/">
          <span className="navbar-brand text-uppercase fw-bolder fs-3 text-white">
            Start React
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={closeNav ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setCloseNav(!closeNav)}
        >
          <i
            className={`fa-solid ${
              closeNav ? "fa-xmark" : "fa-bars"
            } icon-menu`}
          ></i>
        </button>

        <div
          className={`collapse navbar-collapse ${closeNav ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink to="/portfolio" activeClassName="active">
              <li className="nav-item me-3">
                <span className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3">
                  Portfolio
                </span>
              </li>
            </NavLink>

            <NavLink to="/about" activeClassName="active">
              <li className="nav-item me-3">
                <span className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3">
                  About
                </span>
              </li>
            </NavLink>

            <NavLink to="/contact" activeClassName="active">
              <li className="nav-item me-3">
                <span className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3">
                  Contact
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}