import React from "react";
import "./InfoTab.css";

class InfoTab extends React.Component {

  render() {
    return (
      <div className="col-sm-12 info-tab">
        <div className="row ">
          <div className="col-sm-6 info-image-tab">
            <img className="profile-image img-thumbnail" src={this.props.benefactor.thumbnail_url}
                 alt={this.props.benefactor.name}/>
          </div>
          <div className="col-sm-6 info-text-tab">
            <p>
              <strong>{this.props.benefactor.name}</strong>
            </p>
            <p>
              <em>{this.props.benefactor.description}</em>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTab;