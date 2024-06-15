import React from "react";
import ourteams from "../images/Our_Team.png";
function Aboutus() {
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <h4>About us</h4>
        </div>
      </section>
      <section>
        <div className="ms-5 px-0">
          <img src={ourteams} alt="ourservices" />
        </div>
      </section>
    </div>
  );
}
export default Aboutus;
