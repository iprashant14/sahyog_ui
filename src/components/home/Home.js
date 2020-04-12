import React, { Component } from "react";
import Carousel from "../carousel/Carousel";
import HomeBenefactor from "../benefactor/HomeBenefactor";
import Contact from "../contact/Contact";

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel />
                <HomeBenefactor />
                <Contact />
            </div>
        );
    }
}

export default Home;