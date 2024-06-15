import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img
            alt="Logo"
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          {""}
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
          <ul class="navbar-nav ms-auto mx-5 px-5 ">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    TAX PLANNING SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MANAGEMENT CONSULTANCY SERVICES
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    AUDIT AND ASSURANCE SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ACCOUNTING AND BOOKKEEPING
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ADVISORY SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    CORPORATE SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REGULATORY AND COMPLIANCE SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RISK MANAGEMENT AND ADVISORY SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MANAGEMENT CONSULTING
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    SPECIALIZED SERVICES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    FINANCIAL ADVISORY SERVICES
                  </a>
                </li>
              </ul>
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
