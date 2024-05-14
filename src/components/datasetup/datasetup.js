import axios from "axios";
import { setSavedPokemonBook } from "../../storage/actions";

export const Datasetup = async (dispatch, setSavedPokemonFromStorage) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10277&offset=0`
    );
    const c = {
      c: response.data.count,
    };
    const pokemonbook = [];
    for (let i = 0; i < c.c; i++) {
      const URL = response.data.results[i].url;
      const addresponse = await axios.get(URL);
      const newPokemon = {
        name: response.data.results[i].name,
        img: addresponse.data.sprites.front_default,
        type: addresponse.data.types[0].type.name,
        height: addresponse.data.height,
        weight: addresponse.data.weight,
      };
      if (newPokemon.img == null) {
        newPokemon.img = "../../assets/pokeball.png";
      }
      pokemonbook.push(newPokemon);
    }
    dispatch(setSavedPokemonBook(pokemonbook));
    localStorage.setItem("savedPokemonbooks", JSON.stringify(pokemonbook));
    setSavedPokemonFromStorage(pokemonbook);
  } catch (error) {
    console.log(error);
  }
};