import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
              At Credence CA Services, we are dedicated to delivering
              unparalleled Audit,Accounting, Taxation, advisory services, to
              businesses of all sizes and industries.Established by a team of
              seasoned Chartered Accountants. Our organization embodies a
              commitment to excellence, integrity, and innovationin the realm of
              corporate consultancy.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>{" "}
            </div>
            <div>
              <Link to="/about">Contact</Link>{" "}
            </div>
            <div>
              <Link to="/about">Blog</Link>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">
                303, Sri Venkateshwara Residency, 10th Cross, Maruthi Nagar, BTM
                Layout, Bengaluru 560068.
              </p>
            </div>
            <div>
              <p className="text-white mb-1">+91 9986904490</p>
            </div>
            <div>
              <p className="text-white mb-1">whenkat9999@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
