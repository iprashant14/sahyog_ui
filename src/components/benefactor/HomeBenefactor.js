import React, { Component } from "react";
import "./HomeBenefactor.css";
import axios from "axios";

class HomeBenefactor extends Component {
  state = {
    benefactors: [],
  };

  serviceCallToBenefactor = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/benefactor/random`)
      .then((response) => {
        if (response.status == 200) {
          var benefactors = response.data;
          if (benefactors != null) {
            console.log(benefactors);
            this.setState({ benefactors: benefactors });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.serviceCallToBenefactor();
  };

  render() {
    return (
      <div id="band" className="container text-center">
        <h3>OUR CONTRIBUTORS</h3>
        <p>
          <em>We love our supporters!</em>
        </p>
        <p>
          Our contributors are important to us because of them only we are able
          to do help others.
        </p>
        <p>
          Please be one of them and help us to contribute more in this noble
          work.
        </p>
        <br />
        <div className="row" style={{ align: "middle" }}>
          <div className="col-sm-12">
            
            {
              	this.state.benefactors.map((benefactor)=>{
                  return (
                    <div className="col-sm-4">
                      <p className="text-center">
                      <strong>{benefactor.name}</strong>
                      </p>
                      <br />
                      <a href={"#"+benefactor.id} data-toggle="collapse">
                      <img
                        src={benefactor.thumbnail_url}
                        className="img-circle person"
                        alt="Random Name"
                        width="255"
                        height="255"
                      />
                      </a>
                      <div id={benefactor.id} className="collapse">
                        <p>{benefactor.description}</p>
                      </div>
                    </div>
                  );
              })
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBenefactor;
