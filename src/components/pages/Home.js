import React from "react";
import Slider from "../inc/Slider.js";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc.js";
import service1 from "../images/Our_services.png";
import service2 from "../images/Support_Startups.png";
import service3 from "../images/Advisory_Service.png";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                At Credence CA Services, we are dedicated to delivering
                unparalleled Audit,Accounting, Taxation, advisory services, to
                businesses of all sizes andindustries. Established by a team of
                seasoned Chartered Accountants. Ourorganization embodies a
                commitment to excellence, integrity, and innovationin the realm
                of corporate consultancy. At Credence CA Services, we don'tjust
                offer services; we forge partnerships. We are committed
                tounderstanding your unique needs and delivering solutions that
                driveexcellence. With a blend of technical prowess and business
                acumen, we areyour steadfast allies in the journey towards
                financial prosperity.
              </p>
              <Link to="/about" className="btn-btn-warning shadow"></Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our vision and  mission */}
      <VMC />
      {/* Our Services */}
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12  mb-4 ">
              <h3 className="main-heading text-center">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={service1}
                  className="w-100 border-bottom"
                  alt="ourservices"
                />
                <div className="card-body">
                  <div className="underline"></div>
                  <p>something</p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={service2}
                  className="w-100 border-bottom"
                  alt="ourservices"
                />
                <div className="card-body">
                  <div className="underline"></div>
                  <p>something</p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={service3}
                  className="w-100 border-bottom"
                  alt="ourservices"
                />
                <div className="card-body">
                  <div className="underline"></div>
                  <p>something</p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
