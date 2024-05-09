import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import axios from "axios";
import { SavedPokemonList } from "../../components/savepokemon/savepokemon";
import { useDispatch, useSelector } from "react-redux";
import { setSavedPokemon, setSvaedBook } from "../../storage/actions";

export const Main = () => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    localStorage.setItem("todoItem", value);
  };

  const [number, setNumber] = useState("");
  const [pokemonImg] = useState("");
  const [pokemonName] = useState("");
  const dispatch = useDispatch();
  const savedPokemon = useSelector((state) => state.savedPokemon) || []; // savedPokemon이 없을 때 빈 배열을 반환

  useEffect(() => {
    const savedPokemonFromStorage = JSON.parse(localStorage.getItem("savedPokemon")) || [];
    dispatch(setSavedPokemon(savedPokemonFromStorage));
  }, [dispatch]);

  const handleDeletePokemon = (index) => {
    const updatedPokemonList = savedPokemon.filter((pokemon, i) => i !== index);
    dispatch(setSavedPokemon(updatedPokemonList));
    localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
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
    const addmonsterbook = savedPokemon.map((pokemon, i) => {
      if ( i === index ) {
        return {...pokemon};
      }
      return pokemon
    });
    dispatch(setSvaedBook(addmonsterbook));
    localStorage.setItem("savedPokemonbook", JSON.stringify(addmonsterbook));
    console.log("몬스터북 추가 성공")

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