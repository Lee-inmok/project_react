import React from "react";
import Typename from "./typename.json";
import { Container, StyledButton } from "./styled";

export const Typeselecter = ({ onTypeChange }) => {
  const handleTypeClick = (type) => {
    onTypeChange(type);
  };

  return (
    <>
      <div>
        <Container>
          {Typename.typename.map((type, index) => (
            <div key={index} onClick={() => handleTypeClick(type)}>
              <StyledButton>{type}</StyledButton>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};
