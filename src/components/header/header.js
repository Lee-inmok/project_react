import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, SpanButton } from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SpanButton onClick={() => navigate("/main")}>메인</SpanButton>
      <SpanButton onClick={() => navigate("/sign-in")}>로그인</SpanButton>
      <SpanButton onClick={() => navigate("/temp")}>템프</SpanButton>
    </Container>
  );
};
