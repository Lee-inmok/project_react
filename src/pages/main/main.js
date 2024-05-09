import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import axios from "axios";
import { SavedPokemonList } from "../../components/savepokemon/savepokemon";

export const Main = () => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    localStorage.setItem("todoItem", value);
  };
  const [number, setNumber] = useState(0);
  const [pekemonimg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [savedPokemon, setSavedPokemon] = useState([]);

  useEffect(() => {
    getPokemonImg();
  }, [pokemonName]);

  const handleDeletePokemon = (index) => {
    const updatedPokemonList = savedPokemon.filter((pokemon, i) => i !== index);
    setSavedPokemon(updatedPokemonList);
    localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
  };

  const getPokemonImg = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-form/${number}`
      );
      setPokemonImg(response.data.sprites.front_default);
    } catch (e) {
      console.log(e);
    }
  };

  const apirequest = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      setPokemonName(response.data.forms[0].name);
    } catch (e) {
      console.log(e);
    }
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
      setSavedPokemon(updatedPokemonList);
      localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
      console.log("버튼클릭");
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditPokemon = (index, newName) => {
    const updatedPokemonList = savedPokemon.map((pokemon, i) => {
      if (i === index) {
        return { ...pokemon, name: newName };
      }
      return pokemon;
    });
    setSavedPokemon(updatedPokemonList);
    localStorage.setItem("savedPokemon", JSON.stringify(updatedPokemonList));
  };

  const onChangePokemon = (index, newName) => {
    const updatedPokemon = [...savedPokemon];
    updatedPokemon[index].name = newName;
    setSavedPokemon(updatedPokemon);
  }

  return (
    <>
      <Container>
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          placeholder="몬스터번호"
        ></input>
        <div onClick={handleSavePokemon}>포켓몬 저장하기</div>
        <div onClick={apirequest}>포켓몬 정보보기</div>
        <img src={pekemonimg} alt="" />
        <p>{pokemonName}</p>

        <SavedPokemonList
          savedPokemon={savedPokemon}
          onDeletePokemon={handleDeletePokemon}
          onEditPokemon={handleEditPokemon}
          onChangePokemon={onChangePokemon}
        />
      </Container>
    </>
  );
};
