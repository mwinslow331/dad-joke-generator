import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <PokemonShowContainer />,
    document.getElementById('app')
  );
});
