import React from "react";
import "./Searchbar.css";

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: props.searchText,
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      searchText: props.searchText,
    });
  };

  changeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" onChange={this.changeHandler} placeholder="Search for..."/>
        <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => this.props.search(this.state.searchText)}>
              <span className="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
          </span>
      </div>
    );
  }
}

export default Searchbar;