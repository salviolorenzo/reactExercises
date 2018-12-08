import React, { Component } from 'react';
import Nav from './Nav';
import Content from './Content';

class Site extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {
        home: `Hello welcome to the home page`,
        cats: `This page is about cats`,
        about: `I'm a weird guy who eats cat food`
      },
      focus: ''
    };
  }

  _onClick(key) {
    // console.log(key);
    this.setState({
      focus: this.state.site[key]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav items={this.state.site} onClick={this._onClick.bind(this)} />
        <Content content={this.state.focus} />
      </div>
    );
  }
}

export default Site;
