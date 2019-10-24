import React from "react";
import styled from "styled-components";
import { Checkbox, Input, Radio, Select, Option } from "./styles/index";

function App() {
  return (
    <>
      <Wrap>
        <Title>Checkbox</Title>
        <Checkbox label="fisrt" />
        <Checkbox label="second" disabled />
        <Checkbox label="third" />
      </Wrap>
      <Wrap>
        <Title>Radio</Title>
        <Radio label="fisrt" name="test1" />
        <Radio label="second" name="test1" disabled />
        <Radio label="third" name="test1" />
      </Wrap>
      <Wrap>
        <Title>Input</Title>
        <Input />
        <Input textlegnth maxLength="20" />
        <Input type="password" placeholder="password" />
        <Input disabled />
      </Wrap>
      <Wrap>
        <Title>Select</Title>
        <Select>
          <Option value="naver.com" />
          <Option value="gmail.com" />
          <Option value="daum.net" />
        </Select>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  padding: 30px 40px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
  font-size: 30px;
`;

export default App;
