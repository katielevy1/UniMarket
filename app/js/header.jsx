import React from 'react';
import Search from './search';
require('../scss/header.scss');

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <h1 className="header-title">UniMarket</h1>
          <h1 className="header-school">{this.props.school}</h1>
        </div>
        <Search />
      </div>
    );
  }
}

