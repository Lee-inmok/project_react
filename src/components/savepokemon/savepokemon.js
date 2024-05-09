import React, { useState } from "react";
import { Container } from "./styled";

export const SavedPokemonList = ({ savedPokemon, onDeletePokemon, onChangePokemon, addmonsterbook }) => {
  const [editingIndex, setEditingIndex] = useState(-1); // 초기에는 수정 중인 인덱스가 없음

  const handleEdit = (index) => {
    setEditingIndex(index); // 수정 중인 인덱스 설정
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    onChangePokemon(index, value); // 수정된 이름을 상위 컴포넌트로 전달
  };

  const handleFinishEdit = () => {
    setEditingIndex(-1); // 수정 완료 시 인덱스 초기화
  };
  return (
    <Container>
      {savedPokemon.map((pokemon, index) => (
        <div key={index} style={{ display: "inline-block", marginRight: "10px", marginTop: "10px", border: "1px solid black", padding: "10px" }}>
          <img src={pokemon.img} alt={pokemon.name} />
          {editingIndex === index ? (
            <div>
              <input type="text" value={pokemon.name} onChange={(event) => handleInputChange(event, index)} />
              <button onClick={handleFinishEdit}>완료</button>
            </div>
          ) : (
            <div>
              <p>{index+1}번 {pokemon.name}</p>
              <button onClick={() => onDeletePokemon(index)}>삭제</button>
              <button onClick={() => handleEdit(index)}>수정</button>
              <button onClick={() => addmonsterbook(index)}>몬스터북 추가</button>
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};