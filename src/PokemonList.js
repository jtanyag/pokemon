import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const PokemonList = () => {
  const { wildPokemon, capture } = useContext(PokemonContext);

  return (
    <div className='pokemon-list'>
      <h2>Pokemon List</h2>

      {wildPokemon.map(pokemon => 
        <div key={`${pokemon.id} - ${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}>Throw Pokeball</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonList;