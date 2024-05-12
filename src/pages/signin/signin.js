import React from "react";
import { Container } from "./styled";
import {useSelector } from "react-redux";
import { Loadbook } from "../../components/loadbook/loadbook";


export const Signin = () => {

  const savedPokemonbook = useSelector((state) => state.savedPokemonbook) || [];
  return (
    <Container>
      <Loadbook loadbook={savedPokemonbook} />
    </Container>
  );
};
