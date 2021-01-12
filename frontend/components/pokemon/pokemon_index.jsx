import React from "react";
import PokemonDetail from "./pokemon_detail";
import { PokemonIndexItem } from "./pokemon_index_item";


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger;
    const pokemonItems = this.props.pokemon.map((poke) => {
      // debugger
        return <PokemonIndexItem key={poke.id} pokemon={poke} />
      // <p>Hi</p>
    });
    // debugger
    return (
      <div>
      
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
      
      </div>
    );
  }
}

export default PokemonIndex;
