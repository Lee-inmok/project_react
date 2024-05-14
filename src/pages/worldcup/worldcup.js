// Worldcup 컴포넌트
import React, { useEffect, useState } from "react";
import { GameContainer, ImgBox, ImgContainer, Round, Game } from "./styled";
import PokemonFetcher from "../../components/pekemonfetcher/pokemonfetcher";

export const Worldcup = () => {
  const [newPokemonList, setNewPokemonList] = useState([]);
  const [allnumber] = useState(32);
  const [win, setWin] = useState([]);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(0);

  useEffect(() => {
    // 초기 포켓몬 리스트를 가져오는 로직을 시뮬레이션합니다.
    const fetchedPokemonList = PokemonFetcher();
    setNewPokemonList(
      fetchedPokemonList.map((c) => ({
        key: c.key,
        name: c.name,
        src: c.src,
        order: Math.random()
      })).sort((l, r) => l.order - r.order)
    );
    setGame(fetchedPokemonList.length);
  }, []);

  const handleClick = (e) => {
    setNewPokemonList((prev) => {
      const temp = prev.splice(0, 2);
      return prev.filter((el) => el.key !== temp.key);
    });
    setRound((prev) => prev + 1);
    setWin((prev) => [...prev, e]);
  };

  useEffect(() => {
    if (game === 1) return;
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
        allnumber={allnumber}
        setNewPokemonList={setNewPokemonList}
      />
      {game === 1 ? (
        <Game>Win!</Game>
      ) : game === 2 ? (
        <Game>결승</Game>
      ) : (
        <Game>{game}강</Game>
      )}
      {game > 2 && (
        <Round>
          {round} 라운드
        </Round>
      )}
      <GameContainer>
        {newPokemonList.map((e, i) => {
          if (i > 1) return null;
          return (
            <ImgContainer key={e.key} onClick={() => handleClick(e)}>
              <ImgBox src={e.src} alt={e.name} />
              <div>{e.name}</div> {/* 텍스트를 위한 별도 태그 */}
            </ImgContainer>
          );
        })}
      </GameContainer>
    </>
  );
};