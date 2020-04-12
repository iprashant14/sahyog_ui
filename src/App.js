import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Benefactor from "./components/benefactor/Benefactor";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/contributors" component={Benefactor} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
