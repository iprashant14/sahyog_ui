import React from "react";
import "./Benefactor.css";
import InfoTab from "./info_tab/InfoTab";
import Pagination from "./pagination/Pagination";
import Toolbar from "./toolbar/Toolbar";
import NoData from "../no_data/NoData";
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
      sort: null,
      searchText: null,
      perPagePagination: 10,
    };
  }

  selectPage = (selectedPage) => {
    if (this.state.pagination.selectedPage !== selectedPage && selectedPage > 0 &&
      selectedPage <= Math.ceil(this.state.pagination.count/this.state.limit)) {
      this.setState(prevState => ({
        pagination: {
          count: prevState.pagination.count,
          selectedPage: selectedPage,
        },
        offset: (selectedPage - 1) * prevState.limit,
        limit: prevState.limit
      }), () => {
        this.componentDidMount();
      });
    }
  };

  transitionPage = (selectedPage) => {
    if (selectedPage > 0 && selectedPage <= Math.ceil(this.state.pagination.count/this.state.limit)) {
      this.setState(prevState => ({
        pagination: {
          count: prevState.pagination.count,
          selectedPage: selectedPage,
        },
        offset: (selectedPage - 1) * prevState.limit,
        limit: prevState.limit,
      }), () => {
        this.componentDidMount();
      });
    }
  };

  selectPerPageLimit = (selectedPerPageLimit) => {
    if(this.state.limit !== selectedPerPageLimit) {
      this.setState({
        pagination: {
          count: 0,
          selectedPage: 1,
        },
        offset: 0,
        limit: typeof selectedPerPageLimit !== 'number' ? parseInt(selectedPerPageLimit): selectedPerPageLimit
      }, () => {
        this.componentDidMount();
      });
    }
  };

  selectSorting = (selectedSort) => {
    if(this.state.sort !== selectedSort) {
      this.setState({
        pagination: {
          count: 0,
          selectedPage: 1,
        },
        offset: 0,
        sort: selectedSort,
      }, () => {
        this.componentDidMount();
      });
    }
  };

  search = (searchText) => {
    if (searchText !== undefined && this.state.searchText !== searchText) {
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
    }else if(this.state.pagination.count <= 0){
      return <NoData objectName="Contributers"/>
    }else{
      return (
        <div>
        <Toolbar selectPerPageLimit={this.selectPerPageLimit} selectedPerPageLimit={this.state.limit}
                 selectSorting={this.selectSorting} selectedSort={this.state.sort} search={this.search}
                 searchText={this.state.searchText}/>

        {this.state.benefactors.map(benefactor => (
          <InfoTab benefactor={benefactor} key={benefactor.id}/>
        ))}
        <Pagination pagination={this.state.pagination} selectPage={this.selectPage} perPage={this.state.limit}
                    transitionPage={this.transitionPage} perPagePagination={this.state.perPagePagination}/>
        </div>
      );
    }
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/benefactor/`, {
        params: {
          offset: this.state.offset,
          limit: this.state.limit,
          ordering: this.state.sort,
          search: this.state.searchText,
        }
      })
      .then((response) => {
        this.setState(prevState => ({
          benefactors: response.data.results,
          pagination: {
            count: response.data.count,
            selectedPage: prevState.pagination.selectedPage,
          },
          offset: this.state.offset,
          isLoading: false,
        }));
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
      <div id="benefactor" className="container-fluid text-center content-height">
        <h3 className="benefactor-heading">CONTRIBUTERS</h3>
        <div className="col-sm-12">
          {this.fetchComponents()}
        </div>
      </div>
    );
  }
}

export default Benefactor;
