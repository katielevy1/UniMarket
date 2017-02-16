import React from 'react';
import Header from './header';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


export default class Container extends React.Component {
  render() {
    return (
      <MuiThemeProvider >
        <div>
          <Header school="University of San Diego" />
        </div>
      </MuiThemeProvider>
    );
  }
}
