import React from "react";
import {Link} from 'react-router-dom';
import './NoData.css'

function NoData(props) {
  return (
    <div className="container-fluid no-data text-center">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
             Oops!</h1>
            <h2>
              {props.objectName} not found for selected date.</h2>
            <div className="error-details">
                Please change date or go to home.
            </div>
            <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home"></span>&nbsp; Take Me Home
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NoData;
