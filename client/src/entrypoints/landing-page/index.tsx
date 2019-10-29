import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const colors = {
  black: "#000",
  blue: "#026C7C",
  darkGray: "#121212",
  pink: "#B81365",
  red: "#720E07",
  white: "#fff"
};

const theme = {
  colors,
  primary: colors.red,
  secondary: colors.blue
};

ReactDOM.render(<App theme={theme} />, document.getElementById("react-root"));
