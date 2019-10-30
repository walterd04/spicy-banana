import styled from "styled-components";

interface IInputProps {
  icon?: boolean;
  theme: object;
}

const Input = () => styled.div<IInputProps>`
  input {
    border: none;
    padding: 10px 15px;
    font: small-caption;
    width: calc(100% - 50px);
    color: ${props => props.theme.colors.primary};
    outline: none;
    line-height: 1.5;
  }
`;

export default Input;
