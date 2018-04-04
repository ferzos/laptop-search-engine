import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return (
      <h1 className="text-lg">
        <img className="App-logo-left" src={this.props.logo} alt="react-logo" />
        {this.props.text}
        <img
          className="App-logo-right"
          src={this.props.logo}
          alt="react-logo"
        />
      </h1>
    );
  }
}
