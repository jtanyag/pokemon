import React from 'react';
import './App.css';
import PokemonList from './PokemonList';
import CapturedPokemon from './CapturedPokemon';
import { PokemonProvider } from './PokemonContext';
import PokemonCreator from './PokemonCreator';

function App() {

  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemon />
      </div>
      <PokemonCreator />
    </PokemonProvider>
  );
}

export default App;
