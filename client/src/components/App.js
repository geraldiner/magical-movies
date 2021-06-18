import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar"
import Home from "./Home"


const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;