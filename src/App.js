import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Benefactor from "./components/benefactor/Benefactor";
import Beneficiary from "./components/beneficiary/Beneficiary";

class App extends Component {
  render() {
    return (
      <div className="app" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
        <Navbar />
        <Carousel />
        <Benefactor />
        <Beneficiary />
      </div>
    );
  }
}

export default App;
