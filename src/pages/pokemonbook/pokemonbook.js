import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loadpekomonbook } from "../../components/loadpokemonbook/loadpokemonbook";
import { Datasetup } from "../../components/datasetup/datasetup";
import { Typeselecter } from "../../components/typeselecter/typeselecter";
import { Container } from "./styled";

export const Pokemonbook = () => {
  const [savedPokemonFromStorage, setSavedPokemonFromStorage] = useState([]);
  const dispatch = useDispatch();
  const [typenumber, setTypenumber] = useState("normal");

  useEffect(() => {
    if (savedPokemonFromStorage.length === 0) {
      Datasetup(dispatch, setSavedPokemonFromStorage);
    }
  }, [dispatch, savedPokemonFromStorage]);

  const handleTypeChange = (type) => {
    setTypenumber(type);
  };

  return (
    <Container>
      <Typeselecter typename={typenumber} onTypeChange={handleTypeChange} />
      <Loadpekomonbook
        loadpekomonbook={savedPokemonFromStorage}
        typename={typenumber}
      />
    </Container>
  );
};
