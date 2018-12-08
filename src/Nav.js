import React from 'react';

function Nav(props) {
  let keysArray = Object.keys(props.items).map(key => {
    return (
      <li
        onClick={() => {
          props.onClick(key);
        }}
      >
        {key}
      </li>
    );
  });
  return <ul>{keysArray}</ul>;
}

export default Nav;
