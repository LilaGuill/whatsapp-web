import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./components/Login";
import Main from "./components/Main";
import theme from "./theme/NormalTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/chats" component={Main} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
