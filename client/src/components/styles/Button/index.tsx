import styled from "styled-components";

interface IButtonProps {
  theme: object;
  inverted?: boolean;
  disabled?: boolean;
}

const Button = styled.button<IButtonProps>`
  text-decoration: none;
  margin: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  &.btn-default {
    background-color: ${props =>
      props.inverted ? props.theme.colors.white : props.theme.primary};
    color: ${props =>
      props.inverted ? props.theme.primary : props.theme.colors.white};
    border: 1px solid ${props => props.theme.primary};
  }
  &.btn-secondary {
    background-color: ${props =>
      props.inverted ? props.theme.colors.white : props.theme.secondary};
    color: ${props =>
      props.inverted ? props.theme.secondary : props.theme.colors.white};
    border: 1px solid ${props => props.theme.secondary};
  }
  &.btn-brand {
    background-color: ${props =>
      props.inverted ? props.theme.colors.white : props.theme.brand};
    color: ${props => props.theme.colors.darkGray};
    border: 1px solid ${props => props.theme.brand};
  }
`;

export default Button;
