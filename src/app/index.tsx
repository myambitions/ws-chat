import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import Main from "./router";
import theme from "./theme";
import "styles/index.css";
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Route component={Main} />
    </MuiThemeProvider>
  );
};

export default App;
