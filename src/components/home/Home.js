import React, { Component } from "react";
import Carousel from "../carousel/Carousel";
import HomeBenefactor from "../benefactor/HomeBenefactor";

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel />
                <HomeBenefactor />
            </div>
        );
    }
}

export default Home;