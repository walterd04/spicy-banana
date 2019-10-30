import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  padding: 10px 15px;
  font: small-caption;
  width: calc(100% - 50px);
  color: ${props => props.theme.colors.primary};
  outline: none;
  line-height: 1.5;
  border: 1px solid black;
`;

const Header = () => {
  return (
    <div>
      <nav>
        <Input type="password" />
      </nav>
    </div>
  );
};

export default Header;
