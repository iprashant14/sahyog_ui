import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="text-center">
        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span className="glyphicon glyphicon-chevron-up"></span>
        </a><br/><br/>
        <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" data-toggle="tooltip" title="Visit w3schools">www.w3schools.com</a>
        </p>
    </footer>
  );
}

export default Footer;
