import React, {useEffect } from "react";
import { Container} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setSavedBook } from "../../storage/actions";
import { Loadmypokemon } from "../../components/loadmypokemon/loadmypokemon"


export const Mypokemon = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedPokemonBookStorage =
      JSON.parse(localStorage.getItem("savedPokemonbook")) || [];
    dispatch(setSavedBook(savedPokemonBookStorage))
  }, [dispatch]);

  const savedPokemonbook = useSelector((state) => state.savedPokemonbook) || [];
  return (
    <Container>
      <Loadmypokemon loadmypokemon={savedPokemonbook} />
    </Container>
  );
};
