import React, { useEffect, useState, useContext } from "react";
import PokemonFetcher from "../../components/pekemonfetcher/pokemonfetcher";
import { GameContainer, ImgBox, ImgContainer, Game, Round } from "./styled";
import { RankingContent } from "../../App";
import { useNavigate } from "react-router-dom";

export const Worldcup = () => {
  const {value, setValue} = useContext(RankingContent);
  const [newPokemonList, setNewPokemonList] = useState([]);
  const [win, setWin] = useState([]);
  const [number] = useState(8);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(newPokemonList.length);

  const navigate = useNavigate();

  const handleClick = (pokemon) => {
    setNewPokemonList((prev) => {
      const temp = prev.splice(0, 2);
      return prev.filter((el, i) => el.key === temp.key);
    });
    setWin((prev) => [...prev, pokemon]);
    setRound((prev) => prev + 1);
  };

  const rank = () => {
    const currentValue = [...value];
  
    const updatePokemonList = (pokemon) => {
      const existingPokemonIndex = currentValue.findIndex((e) => e.number === pokemon.number);
      //findindex 값찾기
      if (existingPokemonIndex !== -1) {
        const updatedList = currentValue.map((e, i) => {
          if (i === existingPokemonIndex) {
            return { ...e, score: e.score + 1 };
          }
          return e;
        });
        return updatedList;
      } else {
        return [...currentValue, { ...pokemon, score: 1 }];
      }
    };
  
    const updatedList = updatePokemonList(newPokemonList[0]);
    setValue(updatedList);
    navigate("/ranking");
  };

  useEffect(() => {
    if (newPokemonList.length === 1) {
      rank();
      return;
    }
    if (newPokemonList.length === 0) {
      setRound(1);
      setWin([]);
      setNewPokemonList(win);
      setGame((prev) => prev / 2);
    }
  }, [round]);

  return (
    <>
      <PokemonFetcher
        allnumber={number}
        setNewPokemonList={setNewPokemonList}
      ></PokemonFetcher>
      {game > 2 && (
        <Round>
          {round}
          {"Round"}
        </Round>
      )}
      <GameContainer>
        {newPokemonList.slice(0, 2).map((e, i) => (
          <ImgContainer key={i} onClick={() => handleClick(e)}>
            <ImgBox src={e.img} />
            {e.name}
          </ImgContainer>
        ))}
      </GameContainer>
    </>
  );
};
