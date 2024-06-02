import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img
            alt="Logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {""}
          CredenceCA
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link active">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link active">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
