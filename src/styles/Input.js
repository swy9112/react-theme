import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ type = "text", placeholder = "default", ...props }) => {
  const [textLength, setTextLength] = useState("0");
  const [newType, setNewType] = useState(type);

  const handleChange = event => {
    setTextLength(event.target.value.length);
  };

  const viewChange = () => {
    newType === "password" ? setNewType("text") : setNewType("password");
  };

  return (
    <Wrap {...props}>
      <InputStyle placeholder={placeholder} type={newType} {...props} onChange={handleChange} />
      {type === "password" ? <ViewBtn onClick={viewChange} /> : ""}
      {props.textlegnth ? <ViewLength>{textLength}</ViewLength> : ""}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 200px;
  margin: 10px 20px 10px 0;
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  color: #666;
`;

const ViewLength = styled.span`
  position: absolute;
  right: 0;
  top: 4px;
  color: #666;
  font-size: 14px;
`;

const ViewBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 10px;
  width: 10px;
  height: 10px;
  background-color: red;
`;

export default Input;
