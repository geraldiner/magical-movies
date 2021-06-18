import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

import NavBar from "./NavBar"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import Home from "./Home"
import About from "./About"


const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;