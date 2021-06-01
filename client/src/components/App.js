import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import About from "./About"
import SignUp from "./SignUp"
// import Home from "./Home"


const App = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;