import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import DadJokeContainer from './containers/DadJokeContainer';


$(function() {
  ReactDOM.render(
    <DadJokeContainer />,
    document.getElementById('app')
  );
});
