import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';

const PokemonCreator = () => {
  const [pokemonName, setPokemonName] = useState();

  const { addPokemon } = useContext(PokemonContext);
  
  const handleNameOnChange = e => setPokemonName(e.target.value);
  
  const generateID = () => {
    const a = Math.random().toString(36).substring(2, 15);
    const b = Math.random().toString(36).substring(2, 15);
    return a + b;
  };
  
  const handleFormSubmit = e => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' placeholder='Pokemon Name' onChange={handleNameOnChange} />
      <input type='submit' value='Create' />
    </form>
  );
};

export default PokemonCreator;