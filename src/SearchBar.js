import React from 'react';

function SearchBar(props) {
  return (
    <form className='searchForm'>
      <input
        type='text'
        placeholder='Search for something'
        value={props.searchTerm}
        onChange={event => {
          props.handleChange(event.target.value);
        }}
        name='search'
      />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchBar;
