import React from "react";
import styled from "styled-components";

const GreetContainer = styled.div`
  grid-area: greet;
  text-align: right;
`;

const GreetText = styled.span`
  font-size: 3.5vw;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
`;

const Greet = () => {
  const greets = ["Cześć!", "Hello!", "Hola!", "Servus!", "こんにちは"];

  return (
    <GreetContainer>
      <GreetText>{greets[Math.floor(Math.random() * greets.length)]}</GreetText>
    </GreetContainer>
  );
};

export default Greet;
