import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { Row, Column } from "../../components/styles";

interface IAppProps {
  theme: object;
}

const App = ({ theme }: IAppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <Column xs="12" sm="6" md="4">
          xs-12 sm-6 md-4
        </Column>
        <Column xs="6" md="4">
          xs-6 md-4
        </Column>
      </Row>
    </ThemeProvider>
  );
};

App.propTypes = {
  theme: PropTypes.object.isRequired
};

App.DefaultProps = {
  theme: {}
};

export default App;
