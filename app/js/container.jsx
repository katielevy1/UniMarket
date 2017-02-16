import React from 'react';
import Header from './header';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div>Container</div>
        <Header school="University of San Diego" />
      </div>
    );
  }
}
