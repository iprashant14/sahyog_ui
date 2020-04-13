import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dropdownButtonTitle: props.dropdownButtonTitle,
      dropdown: props.dropdown,
      selectedElement: props.selectedElement,
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      selectedElement: props.selectedElement,
    });
  };

  render() {
    return (
      <div className="btn-group page-dropdown">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          {this.state.dropdownButtonTitle}<span className="caret" aria-hidden="true"></span>
        </button>
        <ul className="dropdown-menu">
          {Object.keys(this.state.dropdown).map(dropdownElement => (
            <li id={this.state.selectedElement == dropdownElement ? "selected-dropdown-menu": ""}
                onClick={() => this.props.selectDropdown(dropdownElement)}>
              <a>{this.state.dropdown[dropdownElement]}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dropdown;