import React from "react";
import "./InfoTab.css";

function InfoTab() {
  return (
    <div className="col-sm-12">
      <div className="row info-tab">
          <div className="col-md-6 col-sm-6 info-image-tab">
            <img className="profile-image img-thumbnail" src="https://www.w3schools.com/bootstrap/bandmember.jpg" alt="Random Name"/>
          </div>
          <div className="col-md-6 col-sm-6 info-text-tab">
            <p>
              <strong>Shubham Agrawal</strong>
            </p>
            <p>
              <italic>A philanthropist is someone who engages in philanthropy; donating his or her time, money, and/or
                reputation to charitable causes.
              </italic>
            </p>
          </div>
      </div>
    </div>
  );
}

export default InfoTab;