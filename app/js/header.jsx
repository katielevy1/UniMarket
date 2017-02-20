import React from 'react';
import Search from './search';
require('../scss/header.scss');
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12, float: "right",
};


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <h1 className="header-title">UniMarket</h1>
          <h1 className="header-school">{this.props.school}</h1>
          <RaisedButton label="Login" primary={true} style={style} />
        </div>
        <Search />
      </div>
    );
  }
}

