import React from "react";
import styled from "styled-components";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <>
      <Wrap>
        <Title>Check box</Title>
        <Checkbox label="fisrt" />
        <Checkbox label="second" disabled />
        <Checkbox label="third" />
      </Wrap>
      <Wrap>
        <Title>Check box</Title>
        <Checkbox label="fisrt" />
        <Checkbox label="second" disabled />
        <Checkbox label="third" />
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;

const Title = styled.h4`
  margin: 10px 20px;
  font-size: 30px;
`;

export default App;
