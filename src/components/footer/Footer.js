import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="text-center">
        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span className="glyphicon glyphicon-chevron-up"></span>
        </a><br/><br/>
        <p>Contact us @ sahyog.humara@gmail.com
        </p>
    </footer>
  );
}

export default Footer;
