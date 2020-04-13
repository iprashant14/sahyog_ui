import React from "react";
import "./Toolbar.css";
import Dropdown from "./dropdown/Dropdown";
import Searchbar from "./searchbar/Searchbar";

class Toolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.searchText,
      selectedPerPageLimit: this.props.selectedPerPageLimit,
      // JSON content api value as keys and display value as value
      perPageAvailableLimits: {
        10: "10",
        20: "20",
        50: "50"
      },
      selectedSort: this.props.selectedSort,
      availbleSortings: {
        "name": "Name Asc",
        "-name": "Name Desc",
        "created": "Created Asc",
        "-created": "Created Desc",
      }
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      searchText: props.searchText,
      selectedPerPageLimit: props.selectedPerPageLimit,
      selectedSort: props.selectedSort,
    });
  };

  render() {
    return (
      <div className="toolbar-tab">
        <div className="col-sm-8">
          <Searchbar searchText={this.state.searchText} search={this.props.search}/>
        </div>
        <div className="col-sm-4 dropdown-button-tab">
          <Dropdown dropdownButtonTitle="Page" dropdown={this.state.perPageAvailableLimits}
                    selectedElement={this.state.selectedPerPageLimit} selectDropdown={this.props.selectPerPageLimit}/>
          <Dropdown dropdownButtonTitle="Sort" dropdown={this.state.availbleSortings}
                    selectedElement={this.state.selectedSort} selectDropdown={this.props.selectSorting}/>
          {/*<button className="btn btn-default" type="button">*/}
            {/*<span className="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>*/}
          {/*</button>*/}
        </div>
      </div>
    );
  }
}

export default Toolbar;