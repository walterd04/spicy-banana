import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { Row, Column, Button } from "../../components/styles";

interface IAppProps {
  theme: object;
}

const App = ({ theme }: IAppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Row>
          <Column lg="12">
            <Button className="btn-default">Example Primary Button</Button>
            <Button inverted={true} className="btn-default">
              Example Primary Button Inverted
            </Button>
          </Column>
        </Row>
        <Row>
          <Column lg="12">
            <Button className="btn-secondary">Example Secondary Button</Button>
            <Button inverted={true} className="btn-secondary">
              Example Secondary Button Inverted
            </Button>
          </Column>
        </Row>
      </div>
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
