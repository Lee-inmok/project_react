
import { SET_SAVED_BOOK, SET_SAVED_POKEMON } from "./actions"; // 수정

const initialState = {
  contents: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED_POKEMON:
      return {...state, savedPokemon: action.payload}
    case SET_SAVED_BOOK:
      return {...state, savedPokemonbook: action.payload}
    default:
      return state;
  }
}
export default rootReducer;