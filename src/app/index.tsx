import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./router";
import "styles/index.css";
const App = () => {
  return (
    <Router>
      <Route component={Main} />
    </Router>
  );
};

export default App;
