import { Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import PokemonIndexContainer from "./pokemon/pokemon_index";

const App = () => <Route path="/" component={PokemonIndexContainer} />;
