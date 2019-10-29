import React from "react";
import styled from "styled-components";

export const Select = ({ children, select }) => {
  const handleOption = () => {
    return console.log("1111");
  };

  return (
    <>
      <SelectWrap select={select}>
        <OptionView onClick={handleOption} />
        {select}
        {children}
      </SelectWrap>
    </>
  );
};

export const Option = ({ children }) => {
  return <OptionWrap>{children}</OptionWrap>;
};

export const OptionSelect = ({ option }) => {
  return <div>{option}</div>;
};

const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  padding: 6px 30px 6px 6px;
  outline: none;
  border: 1px solid #ccc;
`;

const OptionWrap = styled.div``;

const OptionView = styled.div`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 10px;
  height: 10px;
  background: red;
  cursor: pointer;
`;
