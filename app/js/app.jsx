import React from 'react';
import { render } from 'react-dom';
import Container from './container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-sssQKmCJSaKWi2OOgpfpI6FLyQ4RSpg",
  authDomain: "unimarket-8dac1.firebaseapp.com",
  databaseURL: "https://unimarket-8dac1.firebaseio.com",
  storageBucket: "unimarket-8dac1.appspot.com",
  messagingSenderId: "1064318433149",
};
firebase.initializeApp(config);


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
