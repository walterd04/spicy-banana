import * as React from "react";
import styled from "styled-components";

interface IInputProps {
  icon?: boolean;
  theme: object;
  type: string;
}

const Input = () => styled.input<IInputProps>`
  input {
    border: none;
    padding: 10px 15px;
    font: small-caption;
    width: calc(100% - 50px);
    color: ${props => props.theme.colors.darkGray};
    outline: none;
    line-height: 1.5;
  }
`;

export default Input;
