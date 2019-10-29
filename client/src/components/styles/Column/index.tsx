import styled from "styled-components";
// import * as PropTypes from "prop-types";

// TODO: move this into its own types file?
interface IColumnProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
}

function getWidthString(span: number) {
  if (!span) {
    return;
  }

  const width = (span / 12) * 100;
  return `width: ${width}%`;
}

const Column = styled.div<IColumnProps>`
  float: left;
  ${({ xs }) => (xs ? getWidthString(parseInt(xs, 10)) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(parseInt(sm, 10))};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(parseInt(md, 10))};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(parseInt(lg, 10))};
  }
`;

// Column.propTypes = {
//   lg: PropTypes.string,
//   md: PropTypes.string,
//   sm: PropTypes.string,
//   xs: PropTypes.string
// };

export default Column;
