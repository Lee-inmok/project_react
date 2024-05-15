import React, { useContext, useState, useEffect } from "react";
import { RankingContent } from "../../App";

export const Ranking = () => {
  const {value} = useContext(RankingContent);
  console.log(value);
  const getSortedPokemonList = () => {
    return [...value].sort((a, b) => a.number - b.number);
  };

  return (
    <>
      {getSortedPokemonList().map((pokemon, index) => (
        <div key={index}>
          <span>{pokemon.number}</span>
          <span>{pokemon.name}</span>
          <span><img src={pokemon.img} alt="" /></span> 
          <span>{pokemon.score}</span>
        </div>
      ))}
    </>
  );
};
