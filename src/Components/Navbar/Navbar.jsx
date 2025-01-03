import React, { useState } from "react";
import "./NavbarStyle.css";

export default function Navbar() {
  const [closeNav, setCloseNav] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-brand text-uppercase fw-bolder fs-3 text-white btn btn-link"
        >
          Start React
        </button>
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
            <li className="nav-item me-3">
              <button className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3 btn btn-link portfolio">
                Portfolio
              </button>
            </li>
            <li className="nav-item me-3">
              <button className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3 btn btn-link">
                About
              </button>
            </li>
            <li className="nav-item me-3">
              <button className="nav-link text-uppercase fw-bold p-3 my-4 rounded-3 btn btn-link">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
