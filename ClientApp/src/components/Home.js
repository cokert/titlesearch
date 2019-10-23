import React, { Component } from 'react';

import {Detail} from './Detail';

export class Home extends Component {
  static displayName = Home.name;

  constructor (props) {
    super(props);
    this.state = { titles: [], loading: true, searchText: "", take: 50, skip: 0, selectedTitle: { }, expandedRows: [] };

    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
    
  }

  componentDidMount() {
    this.loadData("");
  }

  loadData (search) {
    this.setState({loading:true});
    fetch('api/Titles/index?title=' + search + '&take=' + this.state.take + '&skip=' + this.state.skip)
      .then(response => response.json())
      .then(data => {
        this.setState({ titles: data.titles, count: data.totalCount, loading: false });
      });
  }
  
  handleChange(e) {
    this.loadData(e.target.value);
    this.setState({ searchText: e.target.value });
  }

  showDetails(title) {
    this.setState({selectedTitle: title});
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
    const newExpandedRows = isRowCurrentlyExpanded ? 
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);
    this.setState({expandedRows: newExpandedRows});
  }

  renderRow(item) {
    var isExpanded = this.state.expandedRows.includes(item._id);

    const clickCallback = () => this.handleRowClick(item._id);
    const itemRows = [
      <div className="row border p-2 cursor-pointer" onClick={clickCallback} key={"row-data-" + item._id}>
        <div className="col-md-6">
          {item.titleName}
        </div>
        <div className="col-md-5">
          {item.releaseYear}
        </div>
      </div>
    ];

    if (isExpanded) {
      itemRows.push(
        <div key={"row-expanded-" + item._id} className='p-3 border mt-2 mb-2'>
            <Detail title={item} />
            <button type='button' className='btn btn-light' onClick={clickCallback} key={"row-data-" + item._id}>Close</button>
        </div>
      )
    }

    return itemRows;
  }


  render () {
    let allItemsRows = [];
    this.state.titles.forEach(item => {
      const row = this.renderRow(item);
      allItemsRows = allItemsRows.concat(row);
    });

    return (
      <div>
        Filter by name: <input onChange={this.handleChange} value={this.state.searchText}/>
        <h6>Showing {this.state.titles.length} of {this.state.count}</h6>
        <div className="row border p-4">
            <div className="col-md-6">
              <h6>Title</h6>
            </div>
            <div className="col-md-6"> 
              <h6>Release Year</h6>
            </div>
          </div>
          {allItemsRows}
      </div>
    );
  }
}
