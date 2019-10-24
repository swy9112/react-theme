import React, { useState } from "react";
import styled from "styled-components";

export const Select = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("naver.com");
  const [submitValue, setSubmitValue] = useState("");

  const selectChange = event => {
    setSelectValue(event.target.value);
  };

  const inputChange = event => {
    setInputValue(event.target.value);
  };

  const selectSubmit = () => {
    inputValue ? setSubmitValue(`${inputValue}@${selectValue}`) : setSubmitValue("id를 입력하세요.");
  };

  return (
    <>
      <InputStyle placeholder="id" onChange={inputChange} value={inputValue} type="text" />
      <SelectWrap onChange={selectChange}>{children}</SelectWrap>
      <Submit onClick={selectSubmit}>Submit</Submit>
      <SubmitView>{submitValue}</SubmitView>
    </>
  );
};

export const Option = ({ ...props }) => {
  return <OptionStyle {...props}>{props.value}</OptionStyle>;
};

const SelectWrap = styled.select`
  margin-right: 10px;
  padding: 6px;
  outline: none;
`;
const OptionStyle = styled.option``;

const InputStyle = styled.input`
  margin-right: 10px;
  padding: 6px;
`;

const Submit = styled.button`
  cursor: pointer;
  padding: 6px;
  border: none;
  outline: none;
`;

const SubmitView = styled.div`
  display: block;
  margin-top: 20px;
  font-size: 36px;
`;
