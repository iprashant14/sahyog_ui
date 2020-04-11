import React from "react";
import "./Benefactor.css";
import InfoTab from "./info_tab/InfoTab";
import Pagination from "./pagination/Pagination";
import Toolbar from "./toolbar/Toolbar";

function Benefactor() {
  return (
    <div id="benefactor" className="container-fluid text-center">
      <div className="col-sm-12">

          <div className="col-sm-12 benefactor-heading">
            <h3>CONTRIBUTERS</h3>
          </div>

          <Toolbar/>

          <InfoTab/>
          <InfoTab/>
          <InfoTab/>
          <InfoTab/>
          <InfoTab/>
          <InfoTab/>
          <InfoTab/>
          <InfoTab/>

          <Pagination/>
        </div>
    </div>
  );
}

export default Benefactor;
