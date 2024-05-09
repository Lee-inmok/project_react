export const SET_SAVED_POKEMON = "SET_SAVED_POKEMON"; 
export const SET_SAVED_BOOK = "SET_SAVED_BOOK";

export function setSavedPokemon(savedPokemon) {
  return {
    type: SET_SAVED_POKEMON,
    payload: savedPokemon,
  };
}

export function setSvaedBook(savedPokemonbook) {
  return {
    type: SET_SAVED_BOOK,
    payload: savedPokemonbook
  }
}