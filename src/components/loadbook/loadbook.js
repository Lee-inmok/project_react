import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setSavedBook } from "../../storage/actions";


export const Loadbook = ({ loadbook }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedPokemonFromStorage =
      JSON.parse(localStorage.getItem("savedPokemonbook")) || [];
    dispatch(setSavedBook(savedPokemonFromStorage));
  }, [dispatch]);

  if (!loadbook || loadbook.length === 0) {
    return <p>저장된 포켓몬이 없습니다.</p>;
  }
  

  return (
    <>
      {loadbook.map((poke, i) => {
        if (poke && poke.name && poke.img) {
          return (
            <div key={i}>
              <img src={poke.img} alt={poke.name} />
              <p>
                {i + 1}번 {poke.name}
              </p>
            </div>
          );
        } else {
          return (
            <div key={i}>
              <p>유효하지 않은 포켓몬 데이터입니다.</p>
            </div>
          );
        }
      })}
    </>
  );
};