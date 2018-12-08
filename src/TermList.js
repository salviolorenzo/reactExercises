import React from 'react';

function TermList(props) {
  return (
    <ul className='termlist'>
      {props.terms.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default TermList;
