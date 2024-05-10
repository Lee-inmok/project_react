import { SET_SAVED_BOOK, SET_SAVED_POKEMON } from "./actions";

const initialState = {
  savedPokemon: [],
  savedPokemonbook: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED_POKEMON:
      return { ...state, savedPokemon: action.payload };
    case SET_SAVED_BOOK:
      return {
        ...state,
        savedPokemonbook: [...state.savedPokemonbook, action.payload],
      };
    default:
      return state;
  }
}
export default rootReducer;
