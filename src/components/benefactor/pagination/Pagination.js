import React from "react";
import "./Pagination.css";

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    let perPagePagination = props.perPagePagination;
    let minPage = 1;
    let maxPage = Math.ceil(this.props.pagination.count/this.props.perPage);
    let startIndex = Math.ceil(props.pagination.selectedPage / perPagePagination - 1  ) * perPagePagination + 1;
    let endIndex = Math.ceil(props.pagination.selectedPage / perPagePagination) * perPagePagination;
    this.state = {
      selectedPage: props.pagination.selectedPage,
      previous: (startIndex - perPagePagination) >= minPage,
      next: endIndex < maxPage,
      startIndex: startIndex,
      endIndex: endIndex < maxPage ? endIndex : maxPage,
      perPagePagination: perPagePagination,
    };
  }

  getPageList = () => {
    let pageList = [];
    for (let i = this.state.startIndex; i <= this.state.endIndex; i++) {
      pageList.push(i);
    }
    return pageList;
  };

  getPreviousPage = () => {
    return Math.ceil(this.state.selectedPage / this.state.perPagePagination - 1) * this.state.perPagePagination;
  };

  getNextPage = () => {
    return Math.ceil(this.state.selectedPage / this.state.perPagePagination) * this.state.perPagePagination + 1;
  };

  componentWillReceiveProps = (props) => {
    let perPagePagination = props.perPagePagination;
    let minPage = 1;
    let maxPage = Math.ceil(this.props.pagination.count/this.props.perPage);
    let startIndex = Math.ceil(props.pagination.selectedPage / perPagePagination - 1  ) * perPagePagination + 1;
    let endIndex = Math.ceil(props.pagination.selectedPage / perPagePagination) * perPagePagination;
    this.setState({
      selectedPage: props.pagination.selectedPage,
      previous: (startIndex - perPagePagination) >= minPage,
      next: endIndex < maxPage,
      startIndex: startIndex,
      endIndex: endIndex < maxPage ? endIndex : maxPage,
      perPagePagination: perPagePagination,
    });
  };

  render() {
    return (
      <div className="col-sm-12">
        <ul className="pagination pagination-md justify-content-center page">
          <li id="previous-page" className={this.state.previous ? "" : "disabled"}
              onClick={() => this.props.transitionPage(this.getPreviousPage())}>
            <a>&laquo;</a>
          </li>
          {this.getPageList().map(pageNumber => (
            <li id={this.state.selectedPage == pageNumber ? "active-page" : ""}
                onClick={() => this.props.selectPage(this.state.selectedPage, pageNumber)}>
              <a>{pageNumber}</a>
            </li>
          ))}
          <li id="next-page" className={this.state.next ? "": "disabled"}
              onClick={() => this.props.transitionPage(this.getNextPage())}>
            <a>&raquo;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;