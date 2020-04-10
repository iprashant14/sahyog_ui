import React, { Component } from "react";
import "./Gallery.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

class Gallery extends Component {
  
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  render() {
    return (
      <div style={{"marginTop":"100px"}}>
        <div>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
        <div id="gallery" className="row">
          <div className="column">
            <img src="images/img5.jpg" className="zoom" />
            <img src="images/img6.jpg" className="zoom" />
            <img src="images/img7.jpg" className="zoom" />
          </div>
          <div className="column">
            <img src="images/img8.jpg" className="zoom" />
            <img src="images/img9.jpg" className="zoom" />
            <img src="images/img10.jpg" className="zoom" />
          </div>
          <div className="column">
            <img src="images/img11.jpg" className="zoom" />
            <img src="images/img5.jpg" className="zoom" />
            <img src="images/img6.jpg" className="zoom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
