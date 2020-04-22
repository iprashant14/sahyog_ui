import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  state = {
    collapsed: true,
    displayNamePathMapping: {
      "HOME": "/",
      "GALLERY": "/gallery",
      "CONTRIBUTORS": "/contributors",
      "CONTACT": "/contact",
    }
  };

  toggleCollapse = () => {
    let collapsed = !this.state.collapsed;
    this.setState({
      collapsed: collapsed,
    })
  };

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className={this.state.collapsed ? "navbar-toggle collapsed": "navbar-toggle"}
              data-toggle="collapse"
              data-target="#myNavbar"
              aria-expanded={!this.state.collapsed}
              onClick={()=> this.toggleCollapse()}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#myPage">
              Humara Sahyog
            </a>
          </div>
          <div className={this.state.collapsed ? "collapse navbar-collapse": "navbar-collapse collapse in"} id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {Object.keys(this.state.displayNamePathMapping).map(displayName => (
                <li key={displayName}>
                  <Link to={this.state.displayNamePathMapping[displayName]} onClick={()=> this.toggleCollapse()}>
                    {displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
