import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const CapturedPokemon = () => {
  const { capturedPokemon, release } = useContext(PokemonContext);

  return (
    <div className='captured-pokemon'>
      <h2>Captured Pokemon</h2>

      {capturedPokemon.map(pokemon => 
        <div key={`${pokemon.id} - ${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>Release</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CapturedPokemon;