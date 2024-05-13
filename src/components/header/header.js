import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, SpanButton, BackgroundImage } from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundImage
        src={require("../../assets/headerback.png")}
      ></BackgroundImage>
      <SpanButton onClick={() => navigate("/main")}>포켓몬 뽑기</SpanButton>
      <SpanButton onClick={() => navigate("/mypokemon")}>내 포켓몬</SpanButton>
      <SpanButton onClick={() => navigate("/temp")}>백과사전</SpanButton>
    </Container>
  );
};
