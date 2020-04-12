import React from "react";
import "./Toolbar.css";


function Toolbar() {
  return (
      <div className="toolbar-tab">
        <div className="col-sm-10 search-bar">
          <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..."/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <span className="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
          </span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="btn-group page-dropdown">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
              Page <span className="caret" aria-hidden="true"></span>
            </button>
            <ul className="dropdown-menu">
              <li id="selected-dropdown-menu"><a href="#">10</a></li>
              <li><a href="#">20</a></li>
              <li><a href="#">50</a></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Toolbar;