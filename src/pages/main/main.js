import React, { useState, useEffect } from "react";
import { Container, StyleButton } from "./styled";
import { Card } from "../../components/card/card";
import axios from "axios";

const exampleStudent = [
  {
    name: "일이",
    number: 1,
  },
  {
    name: "이이",
    number: 2,
  },
  {
    name: "삼이",
    number: 3,
  },
  {
    name: "사이",
    number: 4,
  },
  {
    name: "오이",
    number: 5,
  },
];

export const Main = () => {
  const [number, setNumber] = useState(1);
  const [pekemonimg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  let valueNumber = 0;

  useEffect(() => {
    console.log("hihihihi");
  }, [number]);

  const plusState = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    getPokemonImg();
  }, [pokemonName]);

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
      localStorage.setItem("pokemonName", response.data.forms[1].name);
      setPokemonName(response.data.forms[1].name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <div onClick={apirequest}>api button</div>
        <img src={pekemonimg} alt="" />
        {pokemonName}
        {exampleStudent.map((e, i) => {
          const temp = e.name + "님";

          return <Card key={i} props={temp} />;
        })}
      </Container>
    </>
  );
};
