import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Benefactor from "./components/benefactor/Benefactor";
import Beneficiary from "./components/beneficiary/Beneficiary";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Benefactor />
        <Beneficiary />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
