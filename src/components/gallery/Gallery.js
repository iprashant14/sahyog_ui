import React, { Component } from "react";
import "./Gallery.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class Gallery extends Component {
  state = {
    startDate: new Date(),
    imageList1: [],
    imageList2: [],
    imageList3: [],
  };

  serviceCallToBeneficiary = (dateToFormat) => {
    let formattedDate = dateToFormat.toISOString().substring(0, 10);
    axios
      .get("http://localhost:8000/api/beneficiary", {
        params: {
          image_date: formattedDate,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          var imageData = response.data.results;
          if (imageData != null) {
            this.addToImageList(imageData);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToImageList = (imageData) => {
    let imageList1 = [];
    let imageList2 = [];
    let imageList3 = [];
    for (let i = 0; i < imageData.length; i += 3) {
      if (imageData[i] != null) {
        imageList1.push(imageData[i].image);
      }
      if (imageData[i + 1] != null) {
        imageList2.push(imageData[i + 1].image);
      }
      if (imageData[i + 2] != null) {
        imageList3.push(imageData[i + 2].image);
      }
      this.setState({
        imageList1: imageList1,
        imageList2: imageList2,
        imageList3: imageList3,
      });
    }
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.serviceCallToBeneficiary(new Date());
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    this.serviceCallToBeneficiary(date);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ maxWidth: "100%" }}>
          <div className="col-sm-12 datePicker" style={{ textAlign: "center" }}>
            <strong>You can view more gallery by selecting date :</strong>{" "}
            <DatePicker
              minDate={new Date("11/04/2020")}
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ maxWidth: "100%" }}>
          <div id="gallery" className="customRow">
            <div className="column">
              {this.state.imageList1.map((value, i) => {
                return <img src={value} className="zoom" key={i} />;
              })}
            </div>
            <div className="column">
              {this.state.imageList2.map((value, i) => {
                return <img src={value} className="zoom" key={i} />;
              })}
            </div>
            <div className="column">
              {this.state.imageList3.map((value, i) => {
                return <img src={value} className="zoom" key={i} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
