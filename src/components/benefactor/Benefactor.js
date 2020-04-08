import React from "react";
import "./Benefactor.css";

function Benefactor() {
  return (
    <div id="band" className="container text-center">
      <h3>THE BAND</h3>
      <p>
        <em>We love music!</em>
      </p>
      <p>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <br />
      <div className="row" style={{ align: "middle" }}>
        <div className="col-sm-1">
          <button>Previous</button>
        </div>
        <div className="col-sm-10">
          <div className="col-sm-4">
            <p className="text-center">
              <strong>Name</strong>
            </p>
            <br />
            <a href="#demo" data-toggle="collapse">
              <img
                src="https://www.w3schools.com/bootstrap/bandmember.jpg"
                className="img-circle person"
                alt="Random Name"
                width="255"
                height="255"
              />
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div>
          </div>
          <div className="col-sm-4">
            <p className="text-center">
              <strong>Name</strong>
            </p>
            <br />
            <a href="#demo" data-toggle="collapse">
              <img
                src="https://www.w3schools.com/bootstrap/bandmember.jpg"
                className="img-circle person"
                alt="Random Name"
                width="255"
                height="255"
              />
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div>
          </div>
          <div className="col-sm-4">
            <p className="text-center">
              <strong>Name</strong>
            </p>
            <br />
            <a href="#demo"  aria-expanded="true">
              <img
                src="https://www.w3schools.com/bootstrap/bandmember.jpg"
                className="img-circle person"
                alt="Random Name"
                width="255"
                height="255"
              />
            </a>
            <div id="demo" className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div>
          </div>
        </div>
        <div className="col-sm-1">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Benefactor;
