import React, { createContext, useReducer } from 'react';
import { CAPTURE, pokemonReducer, RELEASE } from './PokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const defaultState = {
    wildPokemon: [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' }
    ],
    capturedPokemon: []
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = pokemon => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = pokemon => () => {
    dispatch({ type: RELEASE, pokemon });
  };
  
  const { wildPokemon, capturedPokemon } = state;

  const providerValue = {
    wildPokemon,
    capturedPokemon,
    release,
    capture
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};