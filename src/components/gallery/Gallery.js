import React, { Component } from "react";
import "./Gallery.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import NoData from "../no_data/NoData";

class Gallery extends Component {
  state = {
    startDate: new Date(),
    noData: false,
    minDate: new Date("03/30/2020"),
    maxDate: new Date(),
    imageList: [],
  };

  displayData = () => {
    if (!this.state.noData) {
      return this.imagesToDisplay();
    } else {
      return <NoData objectName="Image" />;
    }
  };

  serviceCallToBeneficiary = (dateToFormat) => {
    let formattedDate = dateToFormat.toISOString().substring(0, 10);
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/beneficiary`, {
        params: {
          image_date: formattedDate,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          let imageData = response.data.results;
          if (imageData != null) {
            this.addToImageList(imageData);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  imagesToDisplay = () => {
    return (

        <div className="row">
        {this.state.imageList.map((value,i)=>{
          if(i%2 === 0){
            return(
              <div className="col-sm-12 col-md-4 flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img
                      src={this.state.imageList[i]}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flip-box-back">
                  <img
                      src={this.state.imageList[i+1]}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}

      </div>
    );
  };

  addToImageList = (imageData) => {
    let imageList = [];
    for (let i = 0; i < imageData.length; i++) {
      if (imageData[i] != null) {
        imageList.push(imageData[i].image);
      }
     
    }
    if (imageList.length === 0 ) {
      this.setState({ noData: true });
    } else {
      this.setState({
        noData: false,
        imageList : imageList,
      });
    }
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.serviceCallToBeneficiary(new Date());
  };

  handleChange = (date) => {
    if (date != null && date !== undefined) {
      this.setState(
        {
          startDate: date,
        },
        () => {
          this.serviceCallToBeneficiary(this.state.startDate);
        }
      );
    }
  };

  render() {
    return (
      <React.Fragment>
      <div className="container text-center content-height">
          <div className="row img-row-property">
            <div className="col-sm-12 date-picker">
              <strong className="date-picker-text">
                View more images by selecting date :
              </strong>{" "}
              <DatePicker
                maxDate={this.state.maxDate}
                minDate={this.state.minDate}
                dateFormat="dd/MM/yyyy"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              {this.displayData()}
            </div>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
