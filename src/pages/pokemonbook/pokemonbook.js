import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSavedPokemonBook } from "../../storage/actions";

export const Pokemonbook = () => {
    const dispatch = useDispatch();
    const [savedPokemonFromStorage, setSavedPokemonFromStorage] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
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
            pokemonbook.push(newPokemon);
          }
          dispatch(setSavedPokemonBook(pokemonbook));
          localStorage.setItem("savedPokemonbooks", JSON.stringify(pokemonbook));
          setSavedPokemonFromStorage(pokemonbook);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [dispatch]);
  
    // savedPokemonFromStorage 값이 로컬 스토리지에서 가져와서 비어 있으면 useEffect가 실행되지 않음
    if (savedPokemonFromStorage.length > 0) {
      dispatch(setSavedPokemonBook(savedPokemonFromStorage));
      console.log(savedPokemonFromStorage)
    }

  return <Container>
    
  </Container>;
};
