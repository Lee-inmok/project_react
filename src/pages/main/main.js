import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import axios from "axios";
import { SavedPokemonList } from "../../components/savepokemon/savepokemon";
import { useDispatch, useSelector } from "react-redux";
import { setSavedPokemon, setSavedBook } from "../../storage/actions";

export const Main = () => {
  const [number, setNumber] = useState("");
  const [pokemonImg] = useState("");
  const [pokemonName] = useState("");
  const dispatch = useDispatch();
  const savedPokemon = useSelector((state) => state.savedPokemon) || [];

  useEffect(() => {
    const savedPokemonFromStorage =
      JSON.parse(localStorage.getItem("savedPokemon")) || [];
    dispatch(setSavedPokemon(savedPokemonFromStorage));
  }, [dispatch]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    localStorage.setItem("todoItem", value);
  };

  const handleSavePokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      const newPokemon = {
        name: response.data.forms[0].name,
        img: response.data.sprites.front_default,
      };
      const updatedPokemonList = [...savedPokemon, newPokemon];
      dispatch(setSavedPokemon(updatedPokemonList));
      localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeletePokemon = (index) => {
    const updatedPokemonList = savedPokemon.filter((p, i) => i !== index);
    dispatch(setSavedPokemon(updatedPokemonList));

    
    localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
  };

  const onChangePokemon = (index, newName) => {
    const updatedPokemon = savedPokemon.map((pokemon, i) => {
      if (i === index) {
        return { ...pokemon, name: newName };
      }
      return pokemon;
    });
    dispatch(setSavedPokemon(updatedPokemon));
    localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemon));
  };

  const monsterbookAdd = (index) => {
    const newMonster = savedPokemon[index];
    dispatch(setSavedBook(newMonster));
    localStorage.setItem("savedPokemonbook", JSON.stringify(newMonster));
    console.log("추가된 몬스터:", newMonster);
  };

  return (
    <>
      <Container>
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          placeholder="몬스터번호"
        />
        <div onClick={handleSavePokemon}>포켓몬 저장하기</div>
        <img src={pokemonImg} alt="" />
        <p>{pokemonName}</p>

        <SavedPokemonList
          savedPokemon={savedPokemon}
          onDeletePokemon={handleDeletePokemon}
          onChangePokemon={onChangePokemon}
          addmonsterbook={monsterbookAdd}
        />
      </Container>
    </>
  );
};
