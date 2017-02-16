import React from 'react';
require('../scss/header.scss');

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">UniMarket</h1>
        <h1 className="header-school">{this.props.school}</h1>
      </div>
    );
  }
}

