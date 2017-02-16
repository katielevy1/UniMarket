import React from 'react';
import { render } from 'react-dom';
import Container from './container';

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
