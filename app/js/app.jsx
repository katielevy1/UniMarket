import React from 'react';
import { render } from 'react-dom';
import Container from './container';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

if (module.hot) module.hot.accept();
const hello = (
  <Container />
);

window.onload = () => {
  render(
    hello,
    document.getElementById('react'),
  );
};
