import React from "react";

export const Loadbook = ({ loadbook }) => {
  if (!loadbook || loadbook.length === 0) {
    return <p>저장된 포켓몬이 없습니다.</p>;
  }

  return (
    <>
      {loadbook.map((poke, i) => (
        <div key={i}>
          <img src={poke.img} alt={poke.name} />
          <p>
            {i + 1}번 {poke.name}
          </p>
        </div>
      ))}
    </>
  );
};