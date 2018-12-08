import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TermList from './TermList';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Philadelphia',
        'Phoenix',
        'San Antonio',
        'San Diego',
        'Dallas',
        'San Jose',
        'Austin',
        'Jacksonville',
        'San Francisco',
        'Indianapolis',
        'Columbus',
        'Fort Worth',
        'Charlotte',
        'Seattle',
        'Denver',
        'El Paso'
      ],
      searchTerm: ''
    };
  }

  _setSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleChange={this._setSearchTerm.bind(this)}
        />
        <TermList />
      </div>
    );
  }
}

export default AutoComplete;
