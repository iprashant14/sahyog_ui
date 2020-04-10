import React, { Component } from "react";
import Carousel from "../carousel/Carousel";
import Benefactor from "../benefactor/Benefactor";
import Contact from "../contact/Contact";

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel />
                <Benefactor />
                <Contact />
            </div>
        );
    }
}

export default Home;