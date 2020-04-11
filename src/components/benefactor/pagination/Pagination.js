import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="col-sm-12">
      <ul className="pagination pagination-md justify-content-center page">
        <li id="previous-page" className="disabled"><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li id="active-page"><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        {/*<li><a href="#">6</a></li>*/}
        {/*<li><a href="#">7</a></li>*/}
        {/*<li><a href="#">8</a></li>*/}
        {/*<li><a href="#">9</a></li>*/}
        {/*<li><a href="#">10</a></li>*/}
        <li id="next-page"><a href="#">&raquo;</a></li>
      </ul>
    </div>
  );
}

export default Pagination;