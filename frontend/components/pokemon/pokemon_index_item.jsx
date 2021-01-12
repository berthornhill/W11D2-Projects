import React from "react";

export const PokemonIndexItem = (poke) => {
  debugger;
  return (
    <li className="pokemon-index-item">
      <span>{pokemon.id}</span>
      <img src={pokemon.imageUrl} />
      <span>{pokemon.name}</span>
    </li>
  );
};
