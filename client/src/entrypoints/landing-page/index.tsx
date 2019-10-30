import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const colors = {
  black: "#000",
  blue: "#4F86C6",
  cyan: "#2f0318",
  darkBlue: "#1F2041",
  darkGray: "#333633",
  gray: "#D8DDEF",
  green: "#76907E",
  pink: "#9B287B",
  red: "#5d3a40",
  white: "#fff",
  yellow: "#ffe135"
};

const theme = {
  brand: colors.yellow,
  colors,
  primary: colors.cyan,
  secondary: colors.blue
};

ReactDOM.render(<App theme={theme} />, document.getElementById("react-root"));
