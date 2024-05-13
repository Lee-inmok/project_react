export const SET_SAVED_POKEMON = "SET_SAVED_POKEMON"; 

export function setSavedPokemon(savedPokemon) {
  return {
    type: SET_SAVED_POKEMON,
    payload: savedPokemon,
  };
}

export const SET_SAVED_BOOK = "SET_SAVED_BOOK";

export function setSavedBook(savedPokemonbook) {
  return {
    type: SET_SAVED_BOOK,
    payload: savedPokemonbook
  };
}

export const SET_SAVED_POKEMON_BOOK = "SET_SAVED_POKEMON_BOOK";

export function setSavedPokemonBook(savedPokemonbooks) {
  return {
    type: SET_SAVED_POKEMON_BOOK,
    payload: savedPokemonbooks
  };
}