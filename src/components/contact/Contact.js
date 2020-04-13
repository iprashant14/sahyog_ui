import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";
import { withAlert } from "react-alert";

class Contact extends Component {
  submitData = (data) => {
    axios
      .post("http://localhost:8000/api/send_email/", {
        name: data.get("name"),
        email: data.get("email"),
        comments: data.get("comments"),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    const alert = this.props.alert;
    event.preventDefault();
    const data = new FormData(event.target);
    this.submitData(data);
    alert.show("Thank you for your comments!");
    event.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <div id="contact" className="container">
          <h3 className="text-center">Contact</h3>
          <p className="text-center">
            <em>We would love to hear from you!</em>
          </p>

          <div className="row">
            <div className="col-md-4">
              <p>Please Drop a note.</p>
              <p>
                <span className="glyphicon glyphicon-map-marker"></span>
                Muradnagar, Ghaziabad
              </p>
              <p>
                <span className="glyphicon glyphicon-phone"></span>Phone: +91
                7409178866
              </p>
              <p>
                <span className="glyphicon glyphicon-envelope"></span>Email:
                sahyog.humara@gmail.com
              </p>
            </div>
            <div className="col-md-8">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Comment"
                  rows="5"
                ></textarea>
                <br />
                <div className="row">
                  <div className="col-md-12 form-group">
                    <button className="btn pull-right" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <h3 className="text-center">About us !</h3>
          <ul className="nav nav-tabs">
            <li className="active">
              <a data-toggle="tab" href="#home">
                Shubham Teotia
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu1">
                Shubham Agrawal
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu2">
                Prashant Pandey
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <h2>Shubham Teotia</h2>
              <p>Software Developer</p>
            </div>
            <div id="menu1" className="tab-pane fade">
              <h2>Shubham Agrawal</h2>
              <p>Software Developer</p>
            </div>
            <div id="menu2" className="tab-pane fade">
              <h2>Prashant Pandey</h2>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withAlert()(Contact);
