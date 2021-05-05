export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';

const getPokemonList = (wildPokemon, capturedPokemon) => wildPokemon.filter(pokemon => pokemon !== capturedPokemon);

const capturePokemon = (pokemon, state) => ({
  wildPokemon: getPokemonList(state.wildPokemon, pokemon),
  capturedPokemon: [...state.capturedPokemon, pokemon]
});

const getCapturedPokemon = (capturedPokemon, releasedPokemon) => capturedPokemon.filter(pokemon => pokemon !== releasedPokemon);

const releasePokemon = (releasedPokemon, state) => ({
  wildPokemon: [...state.wildPokemon, releasedPokemon],
  capturedPokemon: getCapturedPokemon(state.capturedPokemon, releasedPokemon)
});

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    default:
      return state;
  }
};