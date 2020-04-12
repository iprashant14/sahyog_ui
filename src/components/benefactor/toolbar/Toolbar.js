import React from "react";
import "./Toolbar.css";


class Toolbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
      selectedPerPageLimit: this.props.selectedPerPageLimit,
      perPageAvailableLimitList: [10, 20, 50]
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      selectedPerPageLimit: this.props.selectedPerPageLimit,
      perPageAvailableLimitList: [10, 20, 50]
    });
  };

  changeHandler= (event) => {
    this.setState({
        searchText: event.target.value,
    }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="toolbar-tab">
        <div className="col-sm-10 search-bar">
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.changeHandler} placeholder="Search for..."/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={() => this.props.search(this.state.searchText)}>
                <span className="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="btn-group page-dropdown">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
              Page <span className="caret" aria-hidden="true"></span>
            </button>
            <ul className="dropdown-menu">
              {this.state.perPageAvailableLimitList.map(perPageLimit => (
                <li id={this.state.selectedPerPageLimit == perPageLimit ? "selected-dropdown-menu": ""}
                    onClick={() => this.props.selectPerPageLimit(this.state.selectedPerPageLimit, perPageLimit)}>
                  <a>{perPageLimit}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;