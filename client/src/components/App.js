import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./NavBar"
import About from "./About"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
// import Home from "./Home"


const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <NavBar />
        <Switch>
          {/* <Route path="/">
          <Home />
        </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;