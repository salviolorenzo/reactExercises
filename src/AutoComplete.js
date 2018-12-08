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

  _filterTerms(term) {
    if (term !== '') {
      const filteredArray = this.state.terms.filter(city => {
        const termInCity = city.toLowerCase().includes(term.toLowerCase());
        return termInCity;
      });
      return filteredArray;
    } else {
      const filteredArray = [];
      return filteredArray;
    }
  }

  render() {
    return (
      <div className='searchbox'>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleChange={this._setSearchTerm.bind(this)}
        />
        <TermList terms={this._filterTerms(this.state.searchTerm)} />
      </div>
    );
  }
}

export default AutoComplete;
