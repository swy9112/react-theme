import React from "react";
import styled from "styled-components";

const Checkbox = ({ label, ...props }) => (
  <Wrap disabled={props.disabled}>
    <input type="checkbox" {...props} />
    <CheckboxStyle />
    {label}
  </Wrap>
);

const Wrap = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    display: none;

    & + div {
      position: relative;
    }

    &:checked + div {
      &:after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: blue;
      }
    }

    &[disabled] + div {
      pointer-events: none;

      &:after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: #ccc;
      }
    }
  }
`;

const CheckboxStyle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: 1px solid #000;
`;

export default Checkbox;
