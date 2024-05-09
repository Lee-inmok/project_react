import React, { useState, useEffect } from "react";
import { Container } from "./styled";

export const Signin = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  useEffect(() => {
    const pokemonImg = localStorage.getItem("pokemonImg")
    const pokemon = localStorage.getItem("pokemonName");
    if (pokemon) {
      setPokemonName(pokemon);
    } else {
      console.log("error");
    }
    if (pokemonImg) {
        setPokemonImg(pokemonImg);
      } else {
        console.log("error");
      }
  }, []);

  return (
    <Container>
      <div>{pokemonName}</div>
      <div>{pokemonImg}</div>
    </Container>
  );
};