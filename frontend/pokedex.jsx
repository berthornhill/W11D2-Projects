import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { requestAllItems } from './actions/item_actions';
import {requestSinglePokemon} from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.requestSinglePokemon = requestSinglePokemon;
  window.requestAllItems = requestAllItems;
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl)
})