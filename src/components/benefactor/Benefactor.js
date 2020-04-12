import React from "react";
import "./Benefactor.css";
import InfoTab from "./info_tab/InfoTab";
import Pagination from "./pagination/Pagination";
import Toolbar from "./toolbar/Toolbar";
import axios from "axios";

class Benefactor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      pagination: {
        count: 0,
        selectedPage: 1,
      },
      benefactors: [],
      offset: 0,
      limit: 10,
      searchText: null,
      perPagePagination: 10,
    };
  }

  selectPage = (currentPage, selectedPage) => {
    if (currentPage != selectedPage && selectedPage > 0 &&
      selectedPage <= Math.ceil(this.state.pagination.count/this.state.limit)) {
      let pagination = this.state.pagination;
      pagination.selectedPage = selectedPage;
      this.setState({
        pagination: pagination,
        offset: (selectedPage - 1) * this.state.limit,
        limit: this.state.limit,
      }, () => {
        this.componentDidMount();
      });
    }
  };

  transitionPage = (selectedPage) => {
    if (selectedPage > 0 && selectedPage <= Math.ceil(this.state.pagination.count/this.state.limit)) {
      let pagination = this.state.pagination;
      pagination.selectedPage = selectedPage;
      this.setState({
        pagination: pagination,
        offset: (selectedPage - 1) * this.state.limit,
        limit: this.state.limit,
      }, () => {
        this.componentDidMount();
      });
    }
  };

  selectPerPageLimit = (currentPerPageLimit, selectedPerPageLimit) => {
    if(currentPerPageLimit != selectedPerPageLimit) {
      this.setState({
        pagination: {
          count: 0,
          selectedPage: 1,
        },
        offset: 0,
        limit: selectedPerPageLimit,
      }, () => {
        this.componentDidMount();
      });
    }
  };

  search = (searchText) => {
    console.log(searchText);
    if (searchText != undefined) {
      this.setState({
        pagination: {
          count: 0,
          selectedPage: 1,
        },
        offset: 0,
        searchText: searchText,
      }, () => {
        this.componentDidMount();
      });
    }
  };

  fetchComponents = () => {
    if(this.state.error) {
      return <div>{this.state.error}</div>;
    }else if(this.state.isLoading) {
      return <div>Loading...</div>
    }else{
      return (
        <div className="col-sm-12">

          <Toolbar selectPerPageLimit={this.selectPerPageLimit} selectedPerPageLimit={this.state.limit} search={this.search}/>

          {this.state.benefactors.map(benefactor => (
            <InfoTab benefactor={benefactor}/>
          ))}
          <Pagination pagination={this.state.pagination} selectPage={this.selectPage} perPage={this.state.limit}
                      transitionPage={this.transitionPage} perPagePagination={this.state.perPagePagination}/>

        </div>
      );
    }
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:8000/api/benefactor/", {
        params: {
          offset: this.state.offset,
          limit: this.state.limit,
          search: this.state.searchText,
        }
      })
      .then((response) => {
        let pagination = this.state.pagination;
        pagination.count = response.data.count;

        this.setState({
          benefactors: response.data.results,
          pagination: pagination,
          offset: this.state.offset,
          // limit: this.state.limit,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          isLoading: false,
        });
      });
  };

  render() {
    return (
      <div id="benefactor" className="container-fluid text-center">
        <h3 className="benefactor-heading">CONTRIBUTERS</h3>
        {this.fetchComponents()}
      </div>
    );
  }
}

export default Benefactor;
