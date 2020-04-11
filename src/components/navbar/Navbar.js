import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#myPage">
            Logo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="#band">BAND</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link to="#contact">CONTACT</Link>
            </li>
          
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-search"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
