import React from "react";

const PokemonFetcher = ({ allnumber, setNewPokemonList }) => {
  // 이제 이 컴포넌트 내부에서 allnumber와 setNewPokemonList를 사용할 수 있습니다.
  return (
    <div>
      {/* 컴포넌트 로직 */}
      <p>총 포켓몬 수: {allnumber}</p>
    </div>
  );
};

export default PokemonFetcher;