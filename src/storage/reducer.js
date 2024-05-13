import { SET_SAVED_BOOK, SET_SAVED_POKEMON, SET_SAVED_POKEMON_BOOK } from "./actions";

const initialState = {
  savedPokemon: [],
  savedPokemonbook: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED_POKEMON:
      return { ...state, savedPokemon: action.payload };
    case SET_SAVED_BOOK:
      return { ...state, savedPokemonbook: action.payload };
    case SET_SAVED_POKEMON_BOOK:
      return { ...state, savedPokemonbooks: action.payload };
    default:
      return state;
  }
}
export default rootReducer;
