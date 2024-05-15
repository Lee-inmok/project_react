import React, { useEffect } from "react";
import axios from "axios";

const PokemonFetcher = ({ allnumber, setNewPokemonList }) => {
  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = [];
      for (let i = 0; i < allnumber; i++) {
        const randomValue = Math.floor(Math.random() * 1024) + 1;
        promises.push(
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${randomValue}`)
            .then((response) => {
              return {
                number: randomValue,
                name: response.data.forms[0].name,
                img: response.data.sprites.front_default,
                score: 0
              };
            })
            .catch((error) => {
              console.log(error);
            })
        );
      }
      try {
        const newPokemonListData = await Promise.all(promises);
        setNewPokemonList(newPokemonListData);
        localStorage.setItem(
          "newPokemonList",
          JSON.stringify(newPokemonListData)
        );
        console.log("몬스터가 추가되었습니다:", newPokemonListData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPokemon();
  }, [allnumber, setNewPokemonList]);

  return null;
};

export default PokemonFetcher;