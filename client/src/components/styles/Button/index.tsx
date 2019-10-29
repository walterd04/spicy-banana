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
`;

// Button.defaultProps = {
//   disabled: false,
//   inverted: false,
//   theme: {
//     colors: {
//       black: "#000",
//       white: "#fff"
//     },
//     primary: "#FFF",
//     secondary: "#000"
//   }
// };

export default Button;
