import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Band from "./components/Band/Band";
import Tour from "./components/Tour/Tour";

class App extends Component {
  render() {
    return (
      <div className="app" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
        <Navbar />
        <Carousel />
        <Band />
        <Tour />
      </div>
    );
  }
}

export default App;
