import React from "react";

export const Loadpekomonbook = ({ loadpekomonbook }) => {
    if (!loadpekomonbook || loadpekomonbook.length === 0) {
        return <p>저장된 포켓몬이 없습니다.</p>;
    }
    return (
        <>
            {loadpekomonbook.map((poke, i) => {
                if (
                    poke &&
                    poke.name &&
                    poke.img &&
                    poke.type &&
                    poke.height &&
                    poke.weight
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
                            <img src={poke.img} alt={poke.name} />
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
                        <div key={i}>
                            <p>유효하지 않은 포켓몬 데이터입니다.</p>
                        </div>
                    );
                }
            })}
        </>
    );

}