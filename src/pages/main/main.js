import React, { useState, useEffect } from "react";
import { Container, StyleButton } from "./styled";
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
  const savedPokemonbook = useSelector((state) => state.savedPokemonbook) || [];

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 1024) + 1;
    setNumber(randomValue);
    const savedPokemonFromStorage =
      JSON.parse(localStorage.getItem("savedPokemon")) || [];
    dispatch(setSavedPokemon(savedPokemonFromStorage));
  }, [dispatch]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
  };

  const monsterbookAdd = (index) => {
    try {
      // 새로운 포켓몬 객체 생성
      const newPokemon = {
        name: savedPokemon[index].name,
        img: savedPokemon[index].img,
      };

      // 기존 몬스터 리스트에 새로운 몬스터 추가
      const uploadPokemonbook = [...savedPokemonbook, newPokemon];
      dispatch(setSavedBook(uploadPokemonbook));
      localStorage.setItem(
        "savedPokemonbook",
        JSON.stringify(uploadPokemonbook)
      );
      console.log("추가된 몬스터:", uploadPokemonbook);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSavePokemon = async () => {
    const randomValue = Math.floor(Math.random() * 1024) + 1;
    setNumber(randomValue);
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
      console.log("추가된 몬스터:", updatedPokemonList);
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

  return (
    <>
      <StyleButton>
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          placeholder="몬스터번호"
        />
      </StyleButton>
      <StyleButton>
        <div onClick={handleSavePokemon}>포켓몬 저장하기</div>
      </StyleButton>
      <Container>
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
