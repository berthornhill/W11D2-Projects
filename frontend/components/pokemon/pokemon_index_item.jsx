import React from "react";
import { Link } from "react-router-dom";


export const PokemonIndexItem = ({pokemon}) => {
  // debugger;
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li className="pokemon-index-item">
        <span>{pokemon.id}</span>
        <img src={pokemon.imageUrl} />
        <span>{pokemon.name}</span>
      </li>
    </Link>
  );
};
