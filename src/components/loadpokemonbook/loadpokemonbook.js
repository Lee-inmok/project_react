import temp from "../../assets/pokeball.png";

export const Loadpekomonbook = ({ loadpekomonbook, typename }) => {
  if (!loadpekomonbook || loadpekomonbook.length === 0) {
    return <p>데이터를 가져오는중...</p>;
  }
  return (
    <>
      {loadpekomonbook.map((poke, i) => {
        if (
          poke &&
          poke.name &&
          poke.img && // 이미지가없는 포켓몬이 존재해서 임시 삭제
          poke.type &&
          poke.height &&
          poke.type == typename
        ) {
          return (
            <div
              key={i}
              style={{
                display: "inline-block",
                marginRight: "10px",
                marginTop: "10px",
                border: "1px solid black",
                padding: "10px",
                width: "200px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {poke.img === "../../assets/pokeball.png" ? (
                <img src={temp} alt={poke.name} />
              ) : (
                <img src={poke.img} alt={poke.name} />
              )}
              <p>
                {i + 1}번 {poke.name}
              </p>
              <p>타입 : {poke.type}</p>
              <p>신장 : {poke.height}</p>
              <p>무개 : {poke.weight}</p>
            </div>
          );
        } else {
          return (
            null
          );
        }
      })}
    </>
  );
};
